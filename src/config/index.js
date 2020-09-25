import { devConfig, testConfig } from './config-env'

const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: 5454,
}

let envConfig = {}

switch (env) {
  case 'dev':
  case 'development':
    envConfig = devConfig
    break
  case 'test':
  case 'testing':
    envConfig = testConfig
    break
  default:
    envConfig = devConfig
}

const mergedConfig = {
  ...baseConfig,
  ...envConfig,
}

export default mergedConfig
