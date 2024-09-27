/*
There is an array of transactions. You need to sort the transactions by date and group them by year, representing the dates as arrays in the MM-DD format. Example result:
javascript

result = {
  "2023": [
    "05-12",
    "06-12"
  ],
  "2022": [
    "06-24",
    "12-15"
  ], 
  .....
}
*/

const arrayOfDates = [
  { date: "2023-06-12" },
  { date: "2020-04-13" },
  { date: "2023-05-12" },
  { date: "2022-02-14" },
  { date: "2022-06-15" },
  { date: "2023-07-13" },
  { date: "2020-06-12" },
  { date: "2022-12-17" },
  { date: "2023-01-23" },
  { date: "2020-11-21" },
  { date: "2020-12-24" },
  { date: "2020-08-13" },
];

const transformArrayOfTransaction = (transactions) => {
  const DatesArray = transactions.map((item) => item.date.split("-"));

  const result = {};

  for (let [year, month, day] of DatesArray) {
    if (result[year]) {
      result[year].push(`${month}-${day}`);
    } else {
      result[year] = [`${month}-${day}`];
    }
  }

  for (let values of Object.values(result)) {
    values.sort((a, b) => {
      const [monthA, dayA] = a.split("-");
      const [monthB, dayB] = b.split("-");

      return monthA - monthB || dayA - dayB;
    });
  }

  return result;
};

console.log(
  "transformArrayOfTransaction",
  transformArrayOfTransaction(arrayOfDates)
);
