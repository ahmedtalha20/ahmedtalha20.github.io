function sameFirstLast(nums){
  if (nums.length === 0) {
    return false;
  }
  return (nums.length === 1 || nums[0] === nums[nums.length-1])
}