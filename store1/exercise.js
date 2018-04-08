var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from store1
function accessesingData1() {
 return (store1["2015-01-08"][0][1]);
}

// Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2() {
 return (store1["2015-01-06"][1][2])
}

// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
function loopingData1() {
var candies = [];
var date = store1["2015-01-08"]
for (var i = 0; i < date.length; i++){
  console.log(date[i][0])
candies.push(date[i][0])
}
return candies;

}
// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
function loopingData2() {
var total = 0;
var date = store1["2015-01-10"]
for (var i = 0; i < date.length; i++){
  total += date[i][2]
}
return(total)
}


// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
function loopingData3() {

var a = Object.keys(store1)
return a
console.log (a)
}


// Use a loop to calculate the total number of candies sold at store1.
function loopingData4() {
// var candies = dates[i][2]
var total = 0;
var dates = Object.keys(store1)
for (var i = 0; i < dates.length; i++) {
for (var j = 0; j < store1[dates[i]].length; j++){
total += store1[dates[i]][j][2]
}
}
return total
}

// In the previous exercise, where did you have to initialize the counter variable? Why?
function loopingData5() {
  var Answer = "0"
  return 'Answer'
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by store1 on January 10th.
// Be sure to return a number! Example `14.55`
function challenge1() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1
}
