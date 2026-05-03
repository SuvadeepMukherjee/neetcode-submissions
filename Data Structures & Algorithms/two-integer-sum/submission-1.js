class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap = new Map();
        for(let i=0;i<nums.length;i++){
            const num = nums[i];
            const complement = target - num;
            const complementIndex = myMap.get(complement);
            if(myMap.has(complement)){
                return [i,complementIndex ]
            }
            myMap.set(num,i)
        }
    }
}
