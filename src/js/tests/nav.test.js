/**
 * @jest-environment jsdom
 */

import { initNav } from '../nav'

describe('function initNav', () => {
  it('should return expected value', () => {
    expect(initNav()).toBeUndefined()
  })
})