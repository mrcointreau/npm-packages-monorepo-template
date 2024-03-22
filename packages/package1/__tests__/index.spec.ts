import { package1Function } from '../src'

describe('package1Function', () => {
  it('returns an object with a message property', () => {
    const response = package1Function()
    expect(response).toHaveProperty('message')
  })

  it('returns the correct response message', () => {
    const response = package1Function()
    expect(response.message).toBe('Package1: Response from core')
  })
})
