/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0;

    while (low <= high) {
        let lowStr = low.toString();
        if (lowStr.length % 2 === 0) {

            let leftSide = lowStr.slice(0, lowStr.length / 2);
            let rightSide = lowStr.slice(lowStr.length / 2);
            let leftSum = 0;
            let rightSum = 0;

            leftSide.split('').forEach(num => leftSum += Number(num))
            rightSide.split('').forEach(num => rightSum += Number(num))
            console.log(leftSum, rightSum)
            if (leftSum === rightSum) {
                count++
            }
        }
        low++
    }

    return count
};