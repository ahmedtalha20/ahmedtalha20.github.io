function makeLast(nums){
  let another_array = [];
  another_array.length = nums.length * 2;
  for (let i = 0; i < another_array.length; i++){
  	another_array[i] = 0;
  }
  another_array[another_array.length-1] = nums[nums.length-1];
  return another_array;
}