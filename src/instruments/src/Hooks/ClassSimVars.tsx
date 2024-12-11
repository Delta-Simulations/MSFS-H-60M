import * as React from 'React'

type SimVarValue = string | number | boolean

// TODO: https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Simulation_Variable_Units.htm
export enum SimVarUnitsEnum {
  // ------ Length -----
  METER = 'meter',
  METER_SCALAR_256 = 'meter scaler 256',
  MILLIMETER = 'millimeter',
  CENTIMETER = 'centimeter',
  KILOMETER = 'kilometer',
  NAUTICAL_MILE = 'nautical mile',
  DECINMILE = 'decinmile',
  INCH = 'inch',
  FOOT = 'foot',
  YARD = 'yard',
  DECIMILE = 'decimile',
  MILE = 'mile',

  // ----- Area -----
  SQUARE_INCH = 'square inch',
  SQUARE_FEET = 'square feet',
  SQUARE_YARD = 'square yard',
  SQUARE_MILE = 'square mile',
  SQUARE_MILLIMETER = 'square millimeter',
  SQUARE_CENTIMETER = 'square centimeter',
  SQUARE_METER = 'square millimeter',
  SQUARE_KILOMETER = 'square millimeter',

  // ----- Volume -----
  CUBIC_INCH = 'cubic inch',
  CUBIC_FOOT = 'cubic foot',
  CUBIC_YARD = 'cubic yard',
  CUBIC_MILE = 'cubic mile',
  CUBIC_MILLIMETER = 'cubic millimeter',
  CUBIC_CENTIMETER = 'cubic centimeter',
  CUBIC_METER = 'cubic meter',
  CUBIC_KILOMETER = 'cubic kilometer',
  LITER = 'liter',
  GALLON = 'gallon',
  QUART = 'quart',
  FS7_OIL_QUANTITY = 'fs7 oil quantity',

  // ----- Temperature -----
  KELVIN = 'kelvin',
  RANKINE = 'rankine',
  FAHRENHEIT = 'fahrenheit',
  CELSIUS = 'celsius',
  CELSIUS_FS7_EGT = 'celsius fs7 egt',
  CELSIUS_FS7_OIL_TEMP = 'celsius fs7 oil temp',
  CELSIUS_SCALER_1_256 = 'celsius scaler 1/256',
  CELSIUS_SCALER_256 = 'celsius scaler 256',
  CELSIUS_SCALER_16K = 'celsius scaler 16k',

  // ----- Angles ------
  RADIAN = 'radian',
  ROUND = 'round',
  DEGREE = 'degree',
  GRAD = 'grad',
  ANGL116 = 'angl116',
  ANGL132 = 'angl132',

  // ------ Global Position -----
  DEGREE_LATITUDE = 'degree latitude',
  DEGREE_LONGITUDE = 'degree longitude',
  METER_LATITUDE = 'meter latitude',

  // ----- Angular Velocity -----
  RADIAN_PER_SECOND = 'radian per second',
  RPM = 'rpm',
  RPM_1_OVER_16K = 'rpm 1 over 16k',
  MINUTE_PER_ROUND = 'minute per round',
  NICE_MINUTE_PER_ROUND = 'nice minute per round',
  DEGREE_PER_SECOND = 'degree per second',
  DEGREE_PER_SECOND_ANG16 = 'degree per second ang16',

  // ----- Angular Acceleration -----
  RADIAN_PER_SECOND_SQUARED = 'radian per second squared',
  DEGREE_PER_SECOND_SQUARED = 'degree per second squared',

  // ----- Speed -----
  METER_PER_SECOND = 'meter per second',
  METER_PER_SECOND_SCALER_256 = 'meter per second scaler 256',
  METER_PER_MINUTE = 'meter per minute',
  KILOMETER_PER_HOUR = 'kilometer/hour',
  FEET_PER_SECOND = 'feet/second',
  FEET_PER_MINUTE = 'feet/minute',
  MILE_PER_HOUR = 'mile per hour',
  KNOT = 'knot',
  KNOT_SCALER_128 = 'knot scaler 128',
  MACH = 'mach',
  MACH_3D2_OVER_64K = 'mach 3d2 over 64k',

  // ----- Acceleration ------
  METER_PER_SECOND_SQUARED = 'meter per second squared',
  FEET_PER_SECOND_SQUARED = 'feet per second squared',
  G_FORCE = 'Gforce',
  G_FORCE_624_SCALED = 'G Force 624 scaled',

  // ----- Time -----
  SECOND = 'second',
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
  HOUR_OVER_10 = 'hour over 10',
  YEAR = 'year',

  // ----- Power -----
  WATT = 'Watt',
  FT_LB_PER_SECOND = 'ft lb per second',

  // ----- Volume Rate -----
  METER_CUBED_PER_SECOND = 'meter cubed per second',
  LITER_PER_HOUR = 'liter per hour',
  GALLON_PER_HOUR = 'gallion per hour',

  // ----- Weight -----
  KILOGRAM = 'kilogram',
  POUND = 'pound',
  POUND_SCALER_256 = 'pound scaler 256',
  SLUG = 'slug',

  // ----- Weight Rate -----
  KILOGRAM_PER_SECOND = 'kilogram per second',
  POUND_PER_HOUR = 'pound per hour',

  // ----- Electrical Current -----
  AMPERE = 'ampere',
  FS7_CHARGING_AMPS = 'fs7 charging amps',

  // ----- Electrical Potential -----
  VOLT = 'volt',

  // ----- Frequency -----
  HERTZ = 'Hertz',
  KILOHERTZ = 'Kilohertz',
  MEGAHERTZ = 'Megahertz',
  FREQUENCY_BCD16 = 'Frequency BCD16',
  FREQUENCY_BCD32 = 'Frequency BCD32',
  FREQUENCY_ADF_BCD32 = 'Frequency ADF BCD32',

  // ----- Density -----
  KILOGRAM_PER_CUBIC_METER = 'kilogram per cubic meter',
  SLUG_PER_CUBIC_FEET = 'Slug per cubic feet',
  POUND_PER_GALLON = 'pound per gallon',

  // ----- Pressure -----
  PASCAL = 'pascal',
  KILOPASCAL = 'kpa',
  MMHG = 'mmHg',
  CMHG = 'cmHg',
  INHG = 'inHg',
  INHG_64_OVER_64K = 'inHg 64 over 64k',
  MILLIMITER_OF_WATER = 'millimiter of water',
  NEWTON_PER_SQUARE_METER = 'Newton per square meter',
  PSI = 'psi',
  BAR = 'bar',
  ATMOSPHERE = 'atm',
  MILLIBAR = 'millibar',

  // ----- Torque -----
  NEWTON_METER = 'nm',
  FOOT_POUND = 'ft-lbs',
  POUND_FOOT = 'lbf-feet',
  KILOGRAM_METER = 'kgf meter',
  POUNDAL_FEET = 'poundal feet',

  // ----- Misc -----
  PERCENT = 'percent',
  PERCENT_OVER_100 = 'percent over 100',
  BEL = 'bel',
  DECIBEL = 'decibel',
  NUMBER = 'number',
  POSITION = 'position',
  ENUM = 'Enum',
  BOOL = 'Bool',
  STRING = 'string',
  KEYFRAME = 'keyframe',
}

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
  retrieve: (name: string, unit: SimVarUnitsEnum, force?: boolean, global?: boolean) => SimVarValue
  update: (
    name: string,
    unit: SimVarUnitsEnum,
    value: SimVarValue | ((prevValue: SimVarValue) => SimVarValue),
    proxy?: string
  ) => void
  register: (name: string, unit: SimVarUnitsEnum, maxStaleness?: number, global?: boolean) => void
  unregister: (name: string, unit: SimVarUnitsEnum, maxStaleness?: number, global?: boolean) => void
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
        const [name, unit] = key.split('/')
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

  private getKey = (name: string, unit: SimVarUnitsEnum, global: boolean): string =>
    `${global ? '_GLOBAL_' : ''}${name}/${unit}`

  retrieve = (name: string, unit: SimVarUnitsEnum, force = false, global = false): SimVarValue => {
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
    unit: SimVarUnitsEnum,
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

  register = (name: string, unit: SimVarUnitsEnum, maxStaleness: number = 0, global: boolean = false): void => {
    const key = this.getKey(name, unit, global)
    if (!this.listeners[key]) {
      this.listeners[key] = []
    }
    this.listeners[key].push(maxStaleness || 0)
  }

  unregister = (name: string, unit: SimVarUnitsEnum, maxStaleness: number = 0, global: boolean = false): void => {
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
