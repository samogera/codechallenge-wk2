//function to generate an array between two numbers
function generateArray(start, end) {
    // initialize an empty array to store the numbers
    const arr = [];  
/*for each of the number from start to end
   add the number to the array */
     for (let i = start; i <= end; i++) {
      // Push the current number to the `arr` array
      arr.push(i);
    }
  
    // return the array
    return arr;
  }
  console.log(generateArray(1, 9)); 
  console.log(generateArray(-1, 9));
  console.log(generateArray(-10, 10));