import * as SolidJS from 'solid-js'

type UnitName = string
type SimVarValue = number | any
type SimVarSetter = <T extends SimVarValue>(oldValue: T) => T

declare const SimVar: any

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
  KEYFRAME = 'keyframe'
}

interface SimVarContextType {
  retrieve: (name: string, unit: SimVarUnitsEnum, force?: boolean, varType?: number) => SimVarValue
  update: (name: string, unit: SimVarUnitsEnum, value: SimVarValue | SimVarSetter, proxy?: string) => void
  register: (name: string, unit: SimVarUnitsEnum, maxStaleness: number, varType: number) => void
  unregister: (name: string, unit: SimVarUnitsEnum, maxStaleness: number, varType: number) => void
}

const createErrorCallback = () => {
  throw new Error('useSimVar was called outside of SimVarProvider')
}

const SimVarContext = SolidJS.createContext<SimVarContextType>({
  retrieve: createErrorCallback,
  update: createErrorCallback,
  register: createErrorCallback,
  unregister: createErrorCallback
})

export const SimVarProvider = (props: { children?: any }) => {
  const [listeners, setListeners] = SolidJS.createSignal<Record<string, number[]>>({})
  const [cache, setCache] = SolidJS.createSignal<Record<string, { value: SimVarValue; lastUpdated: number }>>({})

  let updateInterval: any
  const startUpdateLoop = () => {
    updateInterval = setInterval(() => {
      const deltaTime = 16
      const currentListeners = listeners()
      const currentCache = cache()

      const stateUpdates: Record<string, { value?: SimVarValue; lastUpdated: number }> = {}

      for (const [key, intervals] of Object.entries(currentListeners)) {
        if (!intervals.length) continue

        const threshold = Math.min(...intervals)
        const lastUpdated = (currentCache[key] ? currentCache[key].lastUpdated || 0 : 0) + deltaTime

        if (lastUpdated >= threshold) {
          const [name, unit] = key.split('/')
          let value
          if (name.startsWith('_GLOBAL_')) {
            value = SimVar.GetGlobalVarValue(name.substr(8), unit)
          } else if (name.startsWith('_GAME_')) {
            value = SimVar.GetGameVarValue(name.substr(6), unit)
          } else {
            value = SimVar.GetSimVarValue(name, unit)
          }

          stateUpdates[key] = {
            value,
            lastUpdated: lastUpdated % threshold
          }
        } else {
          stateUpdates[key] = { lastUpdated }
        }
      }
      setCache((oldCache) => {
        const newCache: Record<string, { value: SimVarValue; lastUpdated: number }> = { ...oldCache }
        for (const [key, update] of Object.entries(stateUpdates)) {
          newCache[key] = { ...newCache[key], ...update }
        }
        return newCache
      })
    }, 16)
  }

  startUpdateLoop()

  SolidJS.onCleanup(() => clearInterval(updateInterval))

  const getKey = (name: string, unit: SimVarUnitsEnum, varType: number) => {
    switch (varType) {
      default:
        return `${name}/${unit}`
      case 1:
        return `_GLOBAL_${name}/${unit}`
      case 2:
        return `_GAME_${name}/${unit}`
    }
  }

  const contextValue: SimVarContextType = {
    retrieve(name, unit, force, varType = 0) {
      const key = getKey(name, unit, varType)
      const currentCache = cache()

      if (currentCache[key] && !force) {
        return currentCache[key].value
      }

      let value
      switch (varType) {
        default:
          value = SimVar.GetSimVarValue(name, unit)
          break
        case 1:
          value = SimVar.GetGlobalVarValue(name, unit)
          break
        case 2:
          value = SimVar.GetGameVarValue(name, unit)
          break
      }

      setCache((oldCache) => ({
        ...oldCache,
        [key]: {
          value,
          lastUpdated: 0
        }
      }))

      return value
    },
    update(name, unit, value, proxy) {
      const key = getKey(name, unit, 0)
      setCache((oldCache) => {
        const oldValue = oldCache[key]?.value
        const newValue = typeof value === 'function' ? value(oldValue) : value
        SimVar.SetSimVarValue(proxy || name, unit, newValue)
        return {
          ...oldCache,
          [key]: {
            value: newValue,
            lastUpdated: 0
          }
        }
      })
    },
    register(name, unit, maxStaleness, varType) {
      const key = getKey(name, unit, varType)
      setListeners((oldListeners) => {
        const updatedListeners = { ...oldListeners }
        if (!updatedListeners[key]) {
          updatedListeners[key] = []
        }
        updatedListeners[key].push(maxStaleness || 0)
        return updatedListeners
      })
    },
    unregister(name, unit, maxStaleness, varType) {
      const key = getKey(name, unit, varType)
      setListeners((oldListeners) => {
        const updatedListeners = { ...oldListeners }
        const old = updatedListeners[key]

        if (!Array.isArray(old) || old.length === 0) {
          throw new Error('Attempted to unregisterHook with no known listener')
        }

        if (old.length === 1) {
          delete updatedListeners[key]
        } else {
          const index = old.indexOf(maxStaleness || 0)
          old.splice(index, 1)
        }

        return updatedListeners
      })
    }
  }
  return <SimVarContext.Provider value={contextValue}>{props.children}</SimVarContext.Provider>
}

export const useSimVar = (
  name: string,
  unit: SimVarUnitsEnum,
  maxStaleness = 0
): [SolidJS.Accessor<SimVarValue>, (newValue: SimVarValue | SimVarSetter) => void] => {
  const contextValue = SolidJS.useContext(SimVarContext)
  const [value, setValue] = SolidJS.createSignal(contextValue.retrieve(name, unit, false, 0))

  SolidJS.createEffect(() => {
    contextValue.register(name, unit, maxStaleness, 0)

    const intervalId = setInterval(() => {
      const currentValue = contextValue.retrieve(name, unit, true, 0)
      setValue(currentValue)
    }, maxStaleness || 100)

    SolidJS.onCleanup(() => {
      clearInterval(intervalId)
      contextValue.unregister(name, unit, maxStaleness, 0)
    })
  })
  const setter = (newValue: SimVarValue | SimVarSetter) => {
    contextValue.update(name, unit, newValue)
    setValue(contextValue.retrieve(name, unit, true, 0))
  }

  return [value, setter]
}

export const useGlobalVar = (name: string, unit: SimVarUnitsEnum, maxStaleness = 0): SolidJS.Accessor<SimVarValue> => {
  const contextValue = SolidJS.useContext(SimVarContext)
  const [value, setValue] = SolidJS.createSignal(contextValue.retrieve(name, unit, false, 1))

  SolidJS.createEffect(() => {
    contextValue.register(name, unit, maxStaleness, 1)

    SolidJS.onCleanup(() => {
      contextValue.unregister(name, unit, maxStaleness, 1)
    })
  })

  return value
}
