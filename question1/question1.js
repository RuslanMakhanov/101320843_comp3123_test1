// create array 
const mixedArray = ['PIZZA', 10, true, 25, false , 'Wings'];


const lowerCaseWords = (arr) =>
// a Promise function that will check if array is array and have some input
// and take words from it and lower case the remaining words
  new Promise((resolve, reject) => {
    if (!arr || arr.length === 0 || !Array.isArray(arr)) reject("Invalid input array");
    resolve(arr.filter((item) => isNaN(item)).map((word) => word.toLowerCase()));
  });

lowerCaseWords(mixedArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));