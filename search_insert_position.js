/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var nums = [1,3,5,6]
var target = 2

var searchInsert = function(nums, target) {
    var location = nums.length
    var boolean = false
    var counter = 0

    for(let i = 0; i < location; i++){
        if(nums[i] === target){
            boolean = true
            location = i
        }
    }

    if(boolean){
        return location
    } else {
        for(let i = 0; i < nums.length; i++){
            if(nums[i] < target){
                counter++
            }
        }
        location = counter++
        return location
    }
};

searchInsert(nums, target)