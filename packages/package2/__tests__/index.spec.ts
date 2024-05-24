import { describe, expect, it } from 'vitest'

import { package2Function } from '../src'

describe('package2Function', () => {
  it('returns an object with a message property', () => {
    const response = package2Function()
    expect(response).toHaveProperty('message')
  })

  it('returns the correct response message', () => {
    const response = package2Function()
    expect(response.message).toBe('Package2: Response from core')
  })
})
