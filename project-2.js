// 1. 

// let unit = Number(prompt("Enter Electricity Consumption in Units:"));
// let bill = 0;
// if (unit >= 0 && unit <= 50) {
//     bill = unit * 1;
// } else {
//     if (unit <= 150) {
//         bill = (50 * 1) + ((unit - 50) * 2);
//     }
//     else if (unit <= 250) {
//         bill = (50 * 1) + (100 * 2) + ((unit - 150) * 3);
//     }
//     else if (unit >= 250) {
//         bill = (50 * 1) + (100 * 2) + (100 * 3)+((unit - 250) * 4);
//     }
//     else {
//         console.log("Invalid input. Please enter a positive number for units.");
//     }
// }
// if (unit > 150) {
//     bill += (bill * 0.20);
// }
// console.log("Total Electricity Bill : ₹" + bill);


////////////////////////////////////////////////////////////////////


// 2.

// let season, chioce;
// chioce = prompt("enter your chioce")
// switch (chioce) {
//     case "1":
//     case "2":
//     case "3":
//     case "4":
//         console.log("winter ");
//         break;
//     case "5":
//     case "6":
//     case "7":
//     case "8":
//         console.log("summer");
//         break;
//     case "9":
//     case "10":
//     case "11":
//     case "12":
//         console.log("monsoon");
//         break;
//     default:
//         console.log("invalid Season")
//         break;
// }


/////////////////////////////////////////////////////////////////////////////////////////////////


// 3.

// let amount, years;

// amount = prompt("enter amount", amount);
// years = Number(prompt("enter year", years));
// let rate;

// if (years > 3 && years <= 5) {
//     rate = 3;
// } else if (years <= 8) {
//     rate = 5;
// } else if ( years <= 12) {
//     rate = 12;
// } else {
//     rate = 15;
// }

// let interest = (amount * rate * years) / 100;

// console.log("Principal: " + amount);
// console.log("Rate: " + rate + "%");
// console.log("Years: " + years);
// console.log("Total Interest: " + interest);

/////////////////////////////////////////////////////////////////////////////////////

// 4.

// let age;
// age = prompt('Enter your age');
// if (age >= 18) {
//     console.log('person eligible for vote');
// }
// else {
//     console.log('person is not valid....!');
// }


///////////////////////////////////////////////////////////////////////////////////////


// 5.

// let group;

// group = prompt("enter your group :", group);

// if (group >= 0 && group <= 13) {
//     console.log("your category is child");
// }
// else if (group >= 13 && group <= 18) {
//     console.log("your category is teen");
// }
// else if (group >= 18 && group <= 39) {
//     console.log("your category is young");
// }
// else if (group >= 39 && group <= 60) {
//     console.log("your category is senior");
// }