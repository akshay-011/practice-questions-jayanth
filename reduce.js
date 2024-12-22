const complement = function (fn) {
  return function (...inputs) {
    return !fn(...inputs);
  };
};

const add = function (number1, number2) {
  return number1 + number2;
};

const multiply = function (multipier, multiplicant) {
  return multipier * multiplicant;
};

// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

// console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce(multiply, 1);
};

// console.log(productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return sumOf(numbers) / numbers.length;
};

// console.log(averageOf([1, 2, 3, 4, 5]));


// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return Math.min(...numbers);
};

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return Math.max(...numbers);
};

const isPositive = function (number) {
  return number > 0;
};

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {
  return numbers.filter(isPositive).reduce(add, 0);
};

// console.log(sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const square = function (number) {
  return number * number;
};

const sumOfSquares = function (numbers) {
  return numbers.map(square).reduce(add);
};

// console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = function (number) {
  return (number & 1) === 1;
};

const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(add, 0);
};

// console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// countNegativeNumbers([1, -2, 3, -4]) => 2
const isNegative = complement(isPositive);

const count = function (count, element) {
  return count + 1;
};

const countNegativeNumbers = function (numbers) {
  return numbers.filter(isNegative).reduce(count, 0);
};

// console.log(countNegativeNumbers([1, -2, 3, -4]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  return numbers.filter(complement(isOdd)).map(square).reduce(add);
};

// console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce(add, "");
};

// console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const isStringBigger = function (string1, string2) {
  return string1.length > string2.length;
};

const findLargest = function (largest, candidate) {
  return isStringBigger(largest, candidate) ? largest : candidate;
};

const longestWord = function (words) {
  return words.reduceRight(findLargest);
};

// console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"

const findShortest = function (shortest, candidate) {
  return isStringBigger(shortest, candidate) ? candidate : shortest;
};

const shortestWord = function (words) {
  return words.reduceRight(findShortest);
};

// console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinArray = function (seperator) {
  return function (result, element) {
    return result + seperator + element;
  };
};

const joinWithComma = function (words) {
  const join = joinArray(",");
  return words.reduce(join);
};

// console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  const joinWIthSpace = joinArray(" ");

  return words.reduceRight(joinWIthSpace);
};

// console.log(reverseWords(["hello", "world"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  const joinWIthSpace = joinArray(" ");

  return words.reduce(joinWIthSpace);
};

// console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  const join = joinArray("");

  return names.reduce(join);
};

// console.log(concatenateNames(["John", "Jane", "Doe"]));

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) { };

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const camelCase = function (string) {
  return string[0].toUpperCase() + string.slice(1);
};

const makeCamelCase = function ([first, ...restWords]) {
  const join = joinArray("");

  return restWords.map(camelCase).reduce(join, first);
};

// console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const stringReverse = function (string) {
  if (string === "") {
    return "";
  }

  return stringReverse(string.slice(1)) + string[0];
};

const reverseString = function (words) {
  const join = joinArray("");

  return words.map(stringReverse).reduce(join);
};

// console.log(reverseString(["apple", "banana", "cherry"]));

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const filterDulicates = function (uniqueArray, element) {
  if (!uniqueArray.includes(element)) {
    uniqueArray.push(element);
  }

  return uniqueArray;
};

const duplicate = function (duplicatedArray, number) {
  return [...duplicatedArray, number, number];
};

const duplicateNumbers = function (numbers) {
  return numbers.reduce(duplicate, []);
};

// console.log(duplicateNumbers([1, 2, 3]));

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const unwrap = function (unwrappedArray, element) {
  return [...unwrappedArray, ...element];
};

const concatenateArrays = function (arrays) {
  return arrays.reduce(unwrap);
};

// console.log(concatenateArrays([[1, 2], [3, 4], [5, 6]]));

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {
  return arrays.reduce(unwrap);
};

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {
  return numbers.reduce(filterDulicates, []);
};

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const mapByLengths = function (result, string) {
  const attribute = result[string.length] || [];
  result[string.length] = [...attribute, string];

  return result;
};

const groupByLength = function (strings) {
  return strings.reduce(mapByLengths, {});
};

// console.log(groupByLength(["apple", "banana", "cherry", "date"]));

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const occurenceCounter = function (result, string) {
  const currentCount = result[string] || 0;
  result[string] = currentCount + 1;

  return result;
};

const countOccurrences = function (strings) {
  return strings.reduce(occurenceCounter, {});
};

// console.log(countOccurrences(["apple", "banana", "cherry", "banana"]));

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) { };

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {
  const zippedObject = {};

  for (let index = 0; index < keys.length; index++) {
    zippedObject[keys[index]] = values[index];
  }

  return zippedObject;
};

// console.log(zip(["a", "b", "c"], [1, 2, 3]));

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France"; }
const makeObject = function (keys, values) {
  return zip(keys, values);
};

// console.log(makeObject(["city", "country"], ["Paris", "France"]));

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) { };

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const getColumn = function (array, column) {
  return array.reduce(function (columnArray, element) {
    columnArray.push(element[column]);

    return columnArray;
  }, []);
};

const mergeArrays = function (arr1, arr2) {
  const mergedArray = [...arr1, ...arr2];

  return zip(getColumn(mergedArray, 0), getColumn(mergedArray, 1));
};

// console.log(mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]));

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) { };

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) { };

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {
  return zip(getColumn(pairs, 0), getColumn(pairs, 1));
};

// console.log(flattenToObject([['a', 1], ['b', 2], ['c', 3]]));


// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) { };

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) { };

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) { };

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) { };

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) { };

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) { };

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) { };

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) { };

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) { };

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) { };

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) { };

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) { };

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) { };

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) { };

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) { };

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) { };

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) { };

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) { };

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) { };

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) { };

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) { };
