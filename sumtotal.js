// Create a function that takes an array and returns the sum of all numbers in the array.

// 1 input - array of numbers
function getSumOfItems(arr) {
    // creating a result variable 
    var sum = 0;
   //iterating through the array of numbers
  for (var i = 0; i < arr.length; i++) {
 //getting the sum of all the numbers in the array
      sum += arr[i];
  }//returning the sum total 
  return sum;
}

// testing our function by calling it 

var result1 = getSumOfItems([5, 5, 5, 5, 8]);
console.log(result1) // --> 28

var result2 = getSumOfItems([100, 200, 400, 200]);
console.log(result2) // --> 900

var result3 = getSumOfItems([-36, 50, -90, 800]);
console.log(result3) // --> 724
