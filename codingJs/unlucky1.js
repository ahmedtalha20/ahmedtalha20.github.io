function unlucky1(nums){
  for (let i = 0; i < nums.length; i++) {
  
    if (nums[i] === 1 && nums[i+1] === 3) {
      return true;
    }
  }
  return false;
}