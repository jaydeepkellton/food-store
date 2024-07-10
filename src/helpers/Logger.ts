const logInfo = (...values: any) => {
  console.log(...values)
}

const logWarning = (warning: any) => {
  console.warn(warning)
}

const logError = (error: any) => {
  console.error(error)
}

export const logger = {
  info: logInfo,
  warn: logWarning,
  error: logError,
}
