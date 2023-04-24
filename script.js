function fibonacci(nums){
  let x = 0;
  let y = 1;
  let term = 1;
  let sum = 0;
  
  while(term<=nums){
      console.log(sum + " ");
      x = y;
      y = sum;
      sum = x+y;
      term = term + 1;
  }
}

fibonacci();

module.exports = fibonacci;
