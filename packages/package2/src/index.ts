import { coreFunction } from '@mrcointreau/core'

import type { Package2Response } from './types'

export const package2Function = (): Package2Response => {
  const coreResponse = coreFunction()

  return { message: `Package2: ${coreResponse.message}` }
}

export * from './types'
