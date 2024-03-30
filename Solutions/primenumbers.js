//function to filter prime numbers in a given set of array
function filterPrimes(arr) {
  //isPrime function checks if the given number is prime
    function isPrime(num) {
      //if number is less than 2 its not premium
      if (num < 2) return false;
      //iterate from 2 to square root of the number and check if its divisible by any of these numbers
      for (let i = 2; i <= Math.sqrt(num); i++) {
        //if the number is divisible its not a prime number
        if (num % i === 0) return false;
      }
      //if number passes the conditions its prime
      return true;
    }
  //filter function cycles through each element one by one and it applies isPrime function
    return arr.filter(isPrime);
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  console.log(filterPrimes(arr)); 