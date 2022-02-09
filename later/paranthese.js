/**
 * @param {string} s
 * @return {boolean}
 */
var s = "([)]"
var isValid = function(s) {
    var countA = 0
    var countB = 0
    var countC = 0
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            countA++
        } else if(s[i] === ')'){
            countA--
        } else if(s[i] === '['){
            countB++
        } else if(s[i] === ']'){
            countB--
        } else if(s[i] === '{'){
            countC++
        } else if(s[i] === '}'){
            countC--
        }
    }
    if(countA === 0 && countB === 0 && countC === 0){
        console.log(true);
        return true
    } else {
        console.log(false);
        return false
    }
}

isValid(s)