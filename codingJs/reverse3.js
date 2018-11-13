function reverse3(nums){
  another_array = [];
  another_array[0] = nums[nums.length-1];
  for (i = 0; i<nums.length-1; i++) {
    another_array[i+1] = nums[nums.length-2];
  }
  another_array[another_array.length-1] = nums[0];
  return another_array;
}