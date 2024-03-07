import type { CoreResponse } from './types'

export const coreFunction = (): CoreResponse => ({ message: 'Response from core' })

export * from './types'
