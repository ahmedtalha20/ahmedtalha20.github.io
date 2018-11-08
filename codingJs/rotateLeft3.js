function rotateLeft3(nums){
  another_array = [];
  another_array[0]= nums[nums.length-1];
  
  for (let i = 0; i<nums.length; i++){
    another_array[i] = nums[i+1];
  }
  another_array[another_array.length-1] = nums[0];
  return another_array;
}