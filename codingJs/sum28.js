function sum28(nums){
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2){
      counter += nums[i];
    }
  }
  if (counter === 8) {
    return true;
  }
  return false;
}