function hasTargetSum(array, target) {
  // Write your algorithm here
  let result = false

  for(i = 0; i<array.length;i++){
    for(x = i + 1; x<array.length;x++){
      if((array[i] + array[x]) === target)
        result = true
      
    } 
  } return result
}

/* 
  Write the Big O time complexity of your function here
  0(n * n) for the iteration
  execution is longer due to the two iterations
*/

/* 
  Add your pseudocode here
  iterate through the array
  compare first value against all the rest
  check the sum of both values if it matches the target
  return true if it does 
  return false if it does not
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
