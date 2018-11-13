function maxEnd3(nums){
  if(nums[0] >= nums[nums.length-1]){
    big_num = nums[0];
  }
  else if (nums[0] <= nums[nums.length-1]){
    big_num = nums[nums.length-1];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = big_num;
  }
  return nums;
}