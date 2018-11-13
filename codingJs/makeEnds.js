function makeEnds(nums){
  let another_array = [];
  if (nums.length === 1) {
    another_array = [nums[0], nums[0]];
  }
  else if(nums.length > 1){
    another_array = [nums[0], nums[nums.length-1]];
  }
  return another_array;
}