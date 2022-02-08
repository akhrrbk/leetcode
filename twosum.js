// https://leetcode.com/problems/two-sum/
var twoSum = function(nums, target) {
    var number = []
    for(let i = 0; i < nums.length; i++){
        for(let y = i + 1; y < nums.length; y++){
            if(nums[i] + nums[y] === target){
                number.push(i, y)
                return number;
            }
        }
    }
};