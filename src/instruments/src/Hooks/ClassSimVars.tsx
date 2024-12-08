import * as React from 'React'

type SimVarValue = string | number | boolean

type SimVarCache = {
  [key: string]: {
    value: SimVarValue
    lastUpdatedAgo: number
  }
}

type SimVarListeners = {
  [key: string]: number[]
}

interface SimVarProviderProps {
  children: React.ReactNode
}

interface SimVarProviderState {
  cache: SimVarCache
}

interface SimVarContextValue {
  retrieve: (name: string, unit: string, force?: boolean, global?: boolean) => SimVarValue
  update: (
    name: string,
    unit: string,
    value: SimVarValue | ((prevValue: SimVarValue) => SimVarValue),
    proxy?: string
  ) => void
  register: (name: string, unit: string, maxStaleness: number, global?: boolean) => void
  unregister: (name: string, unit: string, maxStaleness: number, global?: boolean) => void
}

function normalizeUnitName(unit: string): string {
  switch (unit) {
    case 'bool':
    case 'Bool':
    case 'boolean':
    case 'Boolean':
      return 'bool'
    case 'number':
    case 'Number':
      return 'number'
    case 'Degrees':
    case 'degree':
      return 'degree'
    case 'Percent':
    case 'percent':
      return 'percent'
    case 'Feet':
    case 'feet':
    case 'feets':
    case 'Feets':
      return 'feet'
    case 'Knots':
    case 'knots':
      return 'knots'
    case 'Meters':
      return 'Meter'
    default:
      return unit
  }
}

const SimVarContext = React.createContext<SimVarContextValue>({
  retrieve: () => {
    throw Error('useSimVar must be used within a SimVarProvider')
  },
  update: () => {
    throw Error('useSimVar must be used within a SimVarProvider')
  },
  register: () => {
    throw Error('useSimVar must be used within a SimVarProvider')
  },
  unregister: () => {
    throw Error('useSimVar must be used within a SimVarProvider')
  }
})

class ClassSimVarProvider extends React.Component<SimVarProviderProps, SimVarProviderState> {
  private readonly listeners: SimVarListeners
  private updateInterval: NodeJS.Timer

  constructor(props: SimVarProviderProps) {
    super(props)

    this.listeners = {}
    this.state = {
      cache: {}
    }
  }

  componentDidMount() {
    this.updateInterval = setInterval(this.updateSimVars, 16)
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval)
  }

  private updateSimVars = () => {
    const stateUpdates: SimVarCache = {}

    for (const [key, intervals] of Object.entries(this.listeners)) {
      if (!intervals.length) continue

      const threshold = Math.min(...intervals)
      const lastUpdatedAgo = (this.state.cache[key]?.lastUpdatedAgo || 0) + 16

      if (lastUpdatedAgo >= threshold) {
        const [name, rawUnit] = key.split('/')
        const unit = normalizeUnitName(rawUnit)
        stateUpdates[key] = {
          value: name.startsWith('_GLOBAL_')
            ? SimVar.GetGlobalVarValue(name.substr(8), unit)
            : SimVar.GetSimVarValue(name, unit),
          lastUpdatedAgo: lastUpdatedAgo % threshold
        }
      } else {
        stateUpdates[key] = { value: '', lastUpdatedAgo }
      }
    }

    this.setState((prevState) => {
      const newCache = { ...prevState.cache }
      for (const [key, update] of Object.entries(stateUpdates)) {
        newCache[key] = { ...newCache[key], ...update }
      }
      return { cache: newCache }
    })
  }

  private getKey = (name: string, unit: string, global: boolean): string =>
    `${global ? '_GLOBAL_' : ''}${name}/${normalizeUnitName(unit)}`

  retrieve = (name: string, unit: string, force = false, global = false): SimVarValue => {
    const key = this.getKey(name, unit, global)
    if (this.state.cache[key] && !force) {
      return this.state.cache[key].value
    }

    const value = global ? SimVar.GetGlobalVarValue(name, unit) : SimVar.GetSimVarValue(name, unit)
    this.setState((prevState) => ({
      cache: {
        ...prevState.cache,
        [key]: { value, lastUpdatedAgo: 0 }
      }
    }))
    return value
  }

  update = (
    name: string,
    unit: string,
    value: SimVarValue | ((prevValue: SimVarValue) => SimVarValue),
    proxy?: string
  ): void => {
    const key = this.getKey(name, unit, false)
    this.setState((prevState) => {
      const newValue = typeof value === 'function' ? value(prevState.cache[key]?.value) : value
      SimVar.SetSimVarValue(proxy || name, unit, newValue)
      return {
        cache: {
          ...prevState.cache,
          [key]: { value: newValue, lastUpdatedAgo: 0 }
        }
      }
    })
  }

  register = (name: string, unit: string, maxStaleness: number, global: boolean = false): void => {
    const key = this.getKey(name, unit, global)
    if (!this.listeners[key]) {
      this.listeners[key] = []
    }
    this.listeners[key].push(maxStaleness || 0)
  }

  unregister = (name: string, unit: string, maxStaleness: number, global: boolean = false): void => {
    const key = this.getKey(name, unit, global)
    const old = this.listeners[key]
    if (!old || old.length === 0) {
      throw new Error('Attempted to unregisterHook with no known listener')
    }
    if (old.length === 1) {
      delete this.listeners[key]
    } else {
      const index = old.indexOf(maxStaleness || 0)
      this.listeners[key].splice(index, 1)
    }
  }

  render() {
    return (
      <SimVarContext.Provider
        value={{
          retrieve: this.retrieve,
          update: this.update,
          register: this.register,
          unregister: this.unregister
        }}
      >
        {this.props.children}
      </SimVarContext.Provider>
    )
  }
}

export { ClassSimVarProvider, SimVarContext }
