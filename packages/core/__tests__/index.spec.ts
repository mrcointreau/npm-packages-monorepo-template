import { describe, expect, it } from 'vitest'

import { coreFunction } from '../src'

describe('coreFunction', () => {
  it('returns an object with a message property', () => {
    const response = coreFunction()
    expect(response).toHaveProperty('message')
  })

  it('returns the correct response message', () => {
    const response = coreFunction()
    expect(response.message).toBe('Response from core')
  })
})
