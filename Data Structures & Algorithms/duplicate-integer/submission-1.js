class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myset = new Set();

        for(const num of nums){
            if(myset.has(num)) return true;
            myset.add(num);
        }
        return false
    }
}
