class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;
        let myMap = new Map();
        for(const str of s){
            const count = (myMap.get(str)||0)+1;
            myMap.set(str,count);
        }
        for(const str of t){
            const count= myMap.get(str)-1;
            myMap.set(str,count);
        }
        for(const [key,value] of myMap){
            const isEmpty = value===0;
            if(!isEmpty) return false;
        }
        return true;

    }
     
}
