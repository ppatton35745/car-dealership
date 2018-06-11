// Copy the JSON from cars.json and assign it to a variable in a new application. This data holds sales information for a car dealership. Your job is to produce the following reports for the dealership based on their total 2017 sales.

// Total profit for 2017
// In which month did they sell the most cars?
// Which salesperson sold the most cars?
// Which salesperson made the most profit?
// Which model was the most popular?
// Which bank provided the most loans to our customers?

const grossProfit = cars.map(car => {
    return car["gross_profit"];
}).reduce((cur, next) => {
    return cur = cur + next;
})

const monthlySales = cars.map(car => {
    const salesDate = new Date(car["purchase_date"]);
    return salesDate.getMonth() + 1;
})

const salesBySalesPerson = cars.map(car => {
    return `${car["sales_agent"]["last_name"]}, ${car["sales_agent"]["first_name"]}`
})

const profitBySalesPerson = cars.map(car => {
    return {
        "salesPerson" : `${car["sales_agent"]["last_name"]}, ${car["sales_agent"]["first_name"]}`,
        "salesIndividual" : car["gross_profit"]
    }
})

var totalSalesPerMonth = {};
for (var i = 0, j = monthlySales.length; i < j; i++) {
    totalSalesPerMonth[monthlySales[i]] = (totalSalesPerMonth[monthlySales[i]] || 0) +1;
}

const totalSalesPerPerson = {};
for (var i = 0, j = salesBySalesPerson.length; i < j; i++) {
    totalSalesPerPerson[salesBySalesPerson[i]] = (totalSalesPerPerson[salesBySalesPerson[i]] || 0) +1;
}

const totalProfitBySalesPerson = {};
for (var i = 0, j = profitBySalesPerson.length; i  < j; i++) {
    totalProfitBySalesPerson[profitBySalesPerson[i]["salesPerson"]] = (totalProfitBySalesPerson[profitBySalesPerson[i]["salesIndividual"]] || 0) + profitBySalesPerson[i]["salesIndividual"]
}

let maxMonth = ""
let maxMonthValue = "0";
for (key in totalSalesPerMonth) {
    if (totalSalesPerMonth[key] > maxMonthValue) {
        maxMonth = key;
        maxMonthValue = totalSalesPerMonth[key];
    }

}

let maxSalesPerson = ""
let maxSalesPersonValue = "0";
for (key in totalSalesPerPerson) {
    if (totalSalesPerPerson[key] > maxSalesPersonValue) {
        maxSalesPerson = key;
        maxSalesPersonValue = totalSalesPerPerson[key];
    }
}


console.log(grossProfit);
console.log(monthlySales);
console.log(salesBySalesPerson);
console.log(profitBySalesPerson);
console.log(totalSalesPerMonth);
console.log(totalSalesPerPerson);
console.log(totalProfitBySalesPerson);
console.log(maxMonth);
console.log(maxMonthValue);
console.log(maxSalesPerson);
console.log(maxSalesPersonValue);

