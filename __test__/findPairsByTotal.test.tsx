import findPairsByTotal from '@/lib/findPairsByTotal'

describe('findNumberPairs', () => {
  it('returns an empty array if no pairs are found', () => {
    const numbers = [1, 2, 3, 4, 5]
    const targetSum = 10
    const result = findPairsByTotal(numbers, targetSum)
    expect(result).toEqual([])
  })

  it('returns an empty array when given an empty input list', () => {
    const numbers: number[] = []
    const targetSum = 5
    const result = findPairsByTotal(numbers, targetSum)
    expect(result).toEqual([])
  })

  it('returns an empty array when no numbers are provided', () => {
    const numbers: number[] = []
    const targetSum = 0
    const result = findPairsByTotal(numbers, targetSum)
    expect(result).toEqual([])
  })

  it('returns an empty array when target sum is 0', () => {
    const numbers = [1, 2, 3, 4, 5]
    const targetSum = 0
    const result = findPairsByTotal(numbers, targetSum)
    expect(result).toEqual([])
  })
})
