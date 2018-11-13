function no23(nums){
  if (nums[0] === 2 || nums[0] === 3 || nums[nums.length-1] === 3 || nums[nums.length-1] ===2) {
    return false;
  } else {
    return true;
  }
}