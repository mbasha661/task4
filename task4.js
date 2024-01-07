// below programs in anonymous function & IIFE
// 1.Print odd numbers in an array
// Anonymous Function
const printOddNumbers = function (arr) {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

// IIFE
(function (arr) {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5]);

// 2.Convert all the strings to title caps in a string array
// Anonymous Function
const convertToTitleCaps = function (arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };
  
  // IIFE
  const titleCapsResult = (function (arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  })(['apple', 'banana', 'cherry']);
  
  console.log(titleCapsResult);

//   3. Sum of all numbers in an array:
// Anonymous Function
const sumArray = function (arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  };
  
  // IIFE
  const sumResult = (function (arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  })([1, 2, 3, 4, 5]);
  
  console.log(sumResult);

//   4. Return all the prime numbers in an array
// Anonymous Function
const getPrimeNumbers = function (arr) {
    return arr.filter(num => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  };
  
  // IIFE
  const primeNumbersResult = (function (arr) {
    return arr.filter(num => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  })([2, 3, 5, 7, 8, 11, 13]);
  
  console.log(primeNumbersResult);
  
//   5. Return all the palindromes in an array:
// Anonymous Function
const getPalindromes = function (arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
  };
  
  // IIFE
  const palindromeResult = (function (arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
  })(['level', 'hello', 'racecar', 'world']);
  
  console.log(palindromeResult);


//   6. Return median of two sorted arrays of the same size:
// Anonymous Function
const findMedian = function (arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    const mid = Math.floor(sortedArray.length / 2);
    
    if (sortedArray.length % 2 === 0) {
      return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    } else {
      return sortedArray[mid];
    }
  };
  
  // IIFE
  const medianResult = (function (arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    const mid = Math.floor(sortedArray.length / 2);
    
    if (sortedArray.length % 2 === 0) {
      return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    } else {
      return sortedArray[mid];
    }
  })([1, 2, 3], [4, 5, 6]);
  
  console.log(medianResult);

//   7. Remove duplicates from an array:    
// Anonymous Function
const removeDuplicates = function (arr) {
    return Array.from(new Set(arr));
  };
  
  // IIFE
  const uniqueArrayResult = (function (arr) {
    return Array.from(new Set(arr));
  })([1, 2, 2, 3, 4, 4, 5]);
  
  console.log(uniqueArrayResult);
  
//   8. Rotate an array by k times:
// Anonymous Function
const rotateArray = function (arr, k) {
    const len = arr.length;
    k = k % len;
    return arr.slice(k).concat(arr.slice(0, k));
  };
  
  // IIFE
  const rotatedArrayResult = (function (arr, k) {
    const len = arr.length;
    k = k % len;
    return arr.slice(k).concat(arr.slice(0, k));
  })([1, 2, 3, 4, 5], 2);
  
  console.log(rotatedArrayResult);
  
//   Do the below programs in arrow functions.

// 1. Print odd numbers in an array:
const printOddNumberss = arr => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  printOddNumberss([1, 2, 3, 4, 5]);

//   2. Convert all the strings to title caps in a string array:
const convertToTitleCapss = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());


const titleCapsResultt = convertToTitleCapss(['apple', 'banana', 'cherry']);
console.log(titleCapsResultt);


// 3. Sum of all numbers in an array:
const sumArrayy = arr => arr.reduce((acc, num) => acc + num, 0);

const sumResultt = sumArrayy([1, 2, 3, 4, 5]);
console.log(sumResultt);
// 4. Return all the prime numbers in an array:
const getPrimeNumberss = arr => arr.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
  
  const primeNumbersResultt = getPrimeNumberss([2, 3, 5, 7, 8, 11, 13]);
  console.log(primeNumbersResultt);
//   5. Return all the palindromes in an array:

const getPalindromess = arr => arr.filter(str => str === str.split('').reverse().join(''));

// Example usage
const palindromeResultt = getPalindromess(['level', 'hello', 'racecar', 'world']);
console.log(palindromeResultt);


  




  
  
  