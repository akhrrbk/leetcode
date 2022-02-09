/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
     let newnumber = ''
     let xstring = x.toString()
    for(let i = 0; i < xstring.length; i++){
        newnumber = newnumber.concat(xstring[xstring.length - i - 1])
    }
    const success = Number(newnumber) === x ? true : false
    return success
}