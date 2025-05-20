class Solution:
    def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:
        n = len(nums)
        diff = [0] * (len(nums) + 1)
        for j, q in enumerate(queries):
            diff[queries[j][0]] += 1
            diff[queries[j][1] + 1] += -1

        count = 0

        for i in range(n):
            count += diff[i]
            if nums[i] - count > 0:
                return False

        return True