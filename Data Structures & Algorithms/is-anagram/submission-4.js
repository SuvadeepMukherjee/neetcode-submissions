class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let myMap = new Map();
        for(let i=0;i<s.length;i++){
            const count = (myMap.get(s[i]) || 0) + 1;
            myMap.set(s[i],count) 
        }
        for(let j=0;j<t.length;j++){
            const count = myMap.get(t[j]) - 1;
            myMap.set(t[j],count)
        }

        for(const [key,value] of myMap){
            const isZero = value === 0;
            if(!isZero) return false;
        }
        return true

    }
}
