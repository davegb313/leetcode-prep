/**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
var checkInclusion = function (s1, s2) {
    // create hashmap out of s1
    // length of this map is amount ot char we have to match in s2
    // go through s2 creating empty s2 hashmap
    // another loop for s2 to check matching char from s1 with s2
    // in case no matching char break
    // if there is a match add+1 to cur num of matching chars
    // once cur == needed return true
    // if no return false

    let count1 = {};
    for (let c of s1) { count1[c] = (count1[c] || 0) + 1; };
    const need = Object.keys(count1).length;
    for (let i = 0; i < s2.length; i++) {
        let count2 = {};
        let cur = 0;
        for (let j = i; j < s2.length; j++) {
            let c = s2[j];
            count2[c] = (count2[c] || 0) + 1;
            if ((count1[c] || 0) < count2[c]) {
                break;
            }

            if ((count1[c] || 0) == count2[c]) {
                cur++;
            }

            if (cur === need) {
                return true
            }
        }
    }
    return false
}