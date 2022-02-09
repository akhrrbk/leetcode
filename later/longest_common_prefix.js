/**
 * @param {string[]} strs
 * @return {string}
 */
var data = ["flower","flow","flight"]
var boolean = false;
var shortestitem = data[0]

var longestCommonPrefix = function(data) {
    for(let i = 0; i < data.length; i++){
        if(data[i].length < shortestitem.length){
            shortestitem = data[i]
        }
    }
    
    for(let y = 0; y < shortestitem.length; y++){
        for(let z = 0; z < data.length; z++){
            if(shortestitem !== data[z]){
                if(shortestitem[y] === data[z][y]){
                    console.log(`from ${shortestitem} ${shortestitem[y]} - from ${data[z]} ${data[z][y]}`);
                }
            }
        }
    }
};

longestCommonPrefix(data)