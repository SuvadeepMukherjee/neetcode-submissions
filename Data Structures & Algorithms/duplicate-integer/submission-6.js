class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myMap = new Map();
        for(let i=0;i<nums.length;i++){
            const count =(myMap.get(nums[i]) || 0) + 1;
            myMap.set(nums[i],count)
        }
        for(const [num,freq] of myMap){
            const occursMoreThanOnce = freq > 1;
            if(occursMoreThanOnce) return true
        }
        return false
    }
}
