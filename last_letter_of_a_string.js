/**
 * @param {string} s
 * @return {number}
 */

var s = "Hello World"
var lengthOfLastWord = function(s) {
    var keepgoing = true
    
    if(s[s.length-1] === ' '){
        for(let i = s.length -1; i >= 0; i--){
            if(s[i] === ' ' && keepgoing){
                s = s.slice(0, i)
                if(s[i-1] !== ' '){
                    keepgoing = false
                }
            }
        }
    }

    var newelement = ''
    
    for(let i = 0; i < s.length; i++){
        if(s[i] !== ' '){
            newelement = newelement.concat(s[i])
        } else {
            newelement = ''
        }
        
    }
    console.log(newelement);
    return newelement.lenght
}
lengthOfLastWord(s)