
// Filter numbers from the first array that are present in the second array
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [2, 4]
const filterByMembership = function (numbers, criteria) { };

// Filter strings from the first array that appear in the second array
// Input: ["apple", "banana", "cherry"], ["banana", "cherry", "date"]
// Output: ["banana", "cherry"]
const filterStringsByMembership = function (strings, criteria) { };

// Filter objects from the first array where the 'id' property is present in the second array
// Input: [{id: 1, name: "apple"}, {id: 2, name: "banana"}], [1, 3]
// Output: [{id: 1, name: "apple"}]
const filterObjectsById = function (objects, ids) { };

// Filter numbers from the first array that are found in the second array, and greater than a specific threshold
// Input: [1, 2, 3, 4, 5], [2, 4, 6], threshold: 3
// Output: [4]
const filterGreaterThanThresholdByMembership = function (numbers, criteria, threshold) { };

// Filter strings from the first array that have a length greater than a specified value and are present in the second array
// Input: ["apple", "banana", "cherry"], ["banana", "date"], length: 5
// Output: ["banana"]
const filterStringsByLengthAndMembership = function (strings, criteria, length) { };

// Filter numbers from the first array that are not present in the second array
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [1, 3, 5]
const filterByExclusion = function (numbers, criteria) { };

// Filter objects from the first array that contain properties in the second array
// Input: [{name: "apple", color: "red"}, {name: "banana", color: "yellow"}], ["color"]
// Output: [{name: "apple", color: "red"}, {name: "banana", color: "yellow"}]
const filterObjectsByProperties = function (objects, properties) { };

// Filter strings from the first array where the substring exists in the second array
// Input: ["hello", "world", "hell", "how"], ["hell", "hello"]
// Output: ["hello", "hell"]
const filterStringsBySubstringMembership = function (strings, criteria) { };

// Filter numbers from the first array that fall within a range specified by a pair in the second array
// Input: [1, 2, 3, 4, 5], [[2, 4]]
// Output: [2, 3, 4]
const filterByRange = function (numbers, ranges) { };

// Filter numbers from the first array that are present in the second array and are even
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [2, 4]
const filterEvenNumbersByMembership = function (numbers, criteria) { };

// Find countries that exist based on a lookup object with country names as keys and existence status as values.
// Input: ["India", "USA", "Iran"], { "India": "exists", "USA": "does not exist", "Iran": "exists" }
// Output: ["India", "Iran"]
const findCountriesThatExist = function (countries, lookup) { };

// Find numbers that are marked as 'valid' in the lookup object.
// Input: [10, 20, 30, 40], {10: "valid", 20: "invalid", 30: "valid", 40: "valid"}
// Output: [10, 30, 40]
const findValidNumbers = function (numbers, lookup) { };

// Find users whose account status is 'active' from the lookup object.
// Input: ["Alice", "Bob", "Charlie"], { "Alice": { status: "active" }, "Bob": { status: "inactive" }, "Charlie": { status: "active" } }
// Output: ["Alice", "Charlie"]
const findActiveUsers = function (users, lookup) { };

// Find strings where the length of the string is greater than the corresponding numeric threshold in the lookup object.
// Input: ["apple", "banana", "kiwi"], { "apple": 4, "banana": 5, "kiwi": 6 }
// Output: ["banana"]
const findStringsAboveThreshold = function (strings, lookup) { };

// Find the products whose price is less than a given threshold from the lookup object.
// Input: ["Laptop", "Phone", "Tablet"], { "Laptop": { price: 1000 }, "Phone": { price: 500 }, "Tablet": { price: 300 } }
// Output: ["Phone", "Tablet"]
const findAffordableProducts = function (products, lookup) { };

// Find students who have scored more than a given score in their exam from the lookup object.
// Input: ["John", "Alice", "Bob"], { "John": 85, "Alice": 92, "Bob": 70 }
// Output: ["John", "Alice"]
const findHighScoringStudents = function (students, lookup) { };

// Find employees who have been at the company for more than 5 years based on the lookup object.
// Input: ["John", "Alice", "Bob"], { "John": { yearsAtCompany: 6 }, "Alice": { yearsAtCompany: 4 }, "Bob": { yearsAtCompany: 7 } }
// Output: ["John", "Bob"]
const findLongTermEmployees = function (employees, lookup) { };

// Find cities with a population greater than a threshold provided in the lookup object.
// Input: ["London", "Paris", "Tokyo"], { "London": { population: 9000000 }, "Paris": { population: 2200000 }, "Tokyo": { population: 14000000 } }
// Output: ["London", "Tokyo"]
const findLargeCities = function (cities, lookup) { };

// Find items in an inventory whose quantity is greater than 10 based on the lookup object.
// Input: ["item1", "item2", "item3"], { "item1": { quantity: 15 }, "item2": { quantity: 5 }, "item3": { quantity: 20 } }
// Output: ["item1", "item3"]
const findInStockItems = function (items, lookup) { };

// Find animals whose habitat matches the required type from the lookup object.
// Input: ["Lion", "Elephant", "Shark"], { "Lion": { habitat: "Jungle" }, "Elephant": { habitat: "Jungle" }, "Shark": { habitat: "Ocean" } } , "Jungle"
// Output: ["Lion", "Elephant"]
const findAnimalsByHabitat = function (animals, lookup) { };

