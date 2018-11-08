function sum2(nums){
  if(nums.length >= 2){
    sum = nums[0] + nums[1];
  }
  else if (nums.length<2){
    sum = nums[0];
  }
  else if (nums.length === 0 || nums === undefined){
    sum = 0;
  }
  return sum;
}