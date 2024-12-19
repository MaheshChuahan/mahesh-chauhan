// pogram 1....

// let myColor = ["Red", "Green", "White", "Black"];

//         console.log(myColor.join(", "));

//         console.log("Red + Green + White + Black");

//         console.log(myColor.slice(0, 3).join(", "));

//         console.log(myColor[0]);

//         console.log(myColor.slice(1, 3).join(", "));

//         myColor.push("orange");
//         console.log(myColor.join(", "));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// pogram 2. write a javascript pogram to get the sum off all array elements usingfor loop and foreach loop.......

// using forloop

// let arr =[ 11,22,33,44,55,66,77];

// let sum= 0;

// for(let i=0;  i<arr.length; i++){

//   sum = sum + arr[i];

// }

//   console.log("sum number",sum);


//   // foreach....

//   let num =[11,22,33,44,55,66,77];

//   let sum = 0;

//   num.forEach(num => {

//     sum = sum + num;

//   })

//   console.log(sum);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  pogram  3..

// var arr = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10,0];
// var min = (max = arr[0]);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("minimum value in array  "+ min);
// console.log("maximum value in array  "+ max)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// pogram 4...

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// pogram  5...

// let data = [-23,-20,-17,-12,-5,0,11,22,33,44,55];

// let arr = data.filter((ele,index) => {
//     return ele >= 0;
// });

// console.log(arr);

// output:[ 0,11,22,33,44,55]

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// pogram  6...

// let arr = [2, 5, 6, 3, 8, 9]

// let square = arr.map((ele, index) => {
//     return ele ** 2
// })

// console.log("arr ==>", square)

// output : [4,25,36,9,64,81]

////////////////////////////////////////////////////////////////////////////////////////////////////////

// pogram  7...

///////////////////////////////////////////////////////////////////////////////////////////////////////

// pogram  8...

// let words = ['Paython', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']
// let arr = words.filter((ele, index) => {
//     return ele.length >= 8;
// })
// console.log(arr);

// output : [javascript]

/////////////////////////////////////////////////////////////////////////////////////////////////

// pogram 9...


// x="airplane"; output:-r
// x = "oxoxoxox"; output:- "oXоХоXоX"
// x="A New Java Book";
// output:- "a new java book", "A NEW JAVA BOOK"

// 1)

// let x = "airplane";
// console.log(x[2]);

// Output :- r

// 2)

// let y = "oxoxoxox";
// let result = "";

// for (let i = 0; i < x.length; i++) {
//     result += (i % 2 === 0) ? y[i].toLowerCase() : y[i].toUpperCase();
// }
// console.log(result);

// Output: "oXoXoXoX

// pogram  10...

// let toreverse = [10, 20, 30, 40, 50]

// toreverse.reverse();
// console.log(toreverse);

// output : [50,40,30,20,10]

/////////////////////////////////////////////////////////////////////////////////////////////////

// pogram  11...

// let fruits = ["apple", "banana", "cherry"];

// console.log(fruits.includes("banana")+, This is found in the array.);

 // Output :- true 'This is found in the array.'

// console.log(fruits.includes("orange")+", This is not found in the array.");

 // Output :- false 'This is not found in the array.

 ////////////////////////////////////////////////////////////////////////////////////////////////

 //pogram  12...

 // let Name = prompt("Enter Your Name :");

// console.log("The Total Number of Character is :-",Name.length);

// Output :- The Total Number of Character is :- 3

/////////////////////////////////////////////////////////////////////////////////////////////////

// pogram   13...

// Input: "I often take a walk with my dog in the evening.
// His dog follows him everywhere. I don't feed my dog in the morning";

// let str = "I often take a walk with my dog in the evening.
// His dog follows him everywhere. I don't feed my dog in the morning";

// console.log("String Before Replace :-",str);

// let newStr = str.replace(/dog/g, "cat");

// console.log("String After Replace :",newStr);

// Output: "I often take a walk with my cat in the evening.
// His cat follows him everywhere. I don't feed my cat in the morning"

////////////////////////////////////////////////////////////////////////////////////////////////////

// pogram  14...

// let string = "Hire the top 1% freelance developers";

// let stringToArray = string.split(" ");

// console.log("Array : ", stringToArray);

// Output:- Array : ["Hire", "the", "top", "1%", "freelance", "developers"]

////////////////////////////////////////////////////////////////////////////////////////////////////////

// pogram  15....

// let arr = ['5',32,'Daniel']

// let str = arr.join(); 

// console.log(str);

//  output is : 5,32,Danil
