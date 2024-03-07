import { coreFunction } from '@mrcointreau/core'

import type { Package1Response } from './types'

export const package1Function = (): Package1Response => {
  const coreResponse = coreFunction()

  return { message: `Package1: ${coreResponse.message}` }
}

export * from './types'
