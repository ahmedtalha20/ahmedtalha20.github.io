function countEvens(nums){
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0){
      counter += 1;
    }
  }
  return counter;
}