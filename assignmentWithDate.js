// active users who posted in the last 7 days [{username: "alice", lastPostDate: "2024-12-01", active: true}, {username: "bob", lastPostDate: "2024-11-20", active: true}] => [{username: "alice", lastPostDate: "2024-12-01", active: true}]
const filterRecentActiveUsers = function (users) { };

// people whose birthday is this month [{name: "Alice", birthDate: "2024-12-01"}, {name: "Bob", birthDate: "2024-11-01"}] => [{name: "Alice", birthDate: "2024-12-01"}]
const filterBirthdaysThisMonth = function (people) { };

// Convert book publication dates, then filter for books published after a given year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterRecentBooks = function (books, yearThreshold) { };

// filter events that occur before a certain date [{name: "Event1", date: "2024-12-01"}, {name: "Event2", date: "2024-11-15"}] => [{name: "Event2", date: "2024-11-15"}]
const filterByDate = function (events, date) { };

// given an array of objects representing sales with date and amount, calculate the total sales for each month and return them as an array of arrays like [[month, total], ...] in [{ date: "2024-01-15", amount: 100 }, { date: "2024-02-10", amount: 150 }, { date: "2024-01-25", amount: 200 }] => [["2024-01", 300], ["2024-02", 150]]
// Steps: Group by month, sum the sales for each month.
const totalSalesByMonth = function (sales) { };

// for a list of transactions, return an array of objects where each object contains the user's name and the total amount they spent, grouping by user name in [{ user: "Alice", transaction: { amount: 50, date: "2024-01-01" } }, { user: "Bob", transaction: { amount: 30, date: "2024-01-02" } }, { user: "Alice", transaction: { amount: 20, date: "2024-01-03" } }] => [{ user: "Alice", totalSpent: 70 }, { user: "Bob", totalSpent: 30 }]
// Steps: Group by user, sum the transaction amounts for each user.
const totalSpentByUser = function (transactions) { };
