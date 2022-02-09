// https://leetcode.com/problems/plus-one
var digits = [9,9,9,9,9]

const Hello = (digits) => {
    digits[digits.length-1] = digits[digits.length-1] + 1
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits.length === 1 && digits[i] === 10){
            digits.unshift(1)
            digits[1] = 0
        } else if(digits[1] === 10 && digits[0] === 9){
            digits.unshift(1)
            digits[1] = 0
            digits[2] = 0
        }
        if(digits[i] === 10){
            digits[i] = 0
            digits[i-1] = digits[i-1] + 1
        }
    }
    return digits
}

Hello(digits)


