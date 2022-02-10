/**
 * @param {number} num
 * @return {number}
 */
var num = 199
 var addDigits = function(num) {
    if(num === 0){
        return 0
    } else if(num % 9 === 0) {
        return 9
    } else {
        return num % 9
    }
};

addDigits(num)