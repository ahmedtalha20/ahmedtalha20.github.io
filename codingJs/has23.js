function has23(nums){
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2 || nums[i] === 3 || nums[nums.length-1] === 2 || nums[nums.length-1] === 3) {
      return true;
    }
    else {
      return false;
    }
  }
}