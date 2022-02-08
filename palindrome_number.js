/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
     let newnumber = ''
     let xstring = x.toString()
    for(let i = 0; i < xstring.length; i++){
        newnumber = newnumber.concat(xstring[xstring.length - i - 1])
        console.log(newnumber);
    }

    
};

isPalindrome(12345)