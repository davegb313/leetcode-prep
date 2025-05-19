class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numToIndex = {}
        for num in range(len(nums)):
            compliment = target - nums[num]
            if compliment in numToIndex:
                return [numToIndex[compliment], num]
            numToIndex[nums[num]] = num
        return []