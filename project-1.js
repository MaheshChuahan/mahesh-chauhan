
//1 write a javascript programe to find the area of traiangle. 

// let base =50 , h = 15;
// let traiangle = (h * base ) / 2;
// console.log("Enter too area of traiangle =",traiangle);

// answer is : area of traiangle = 375

//2 write a javascript programe to convert temperatures to and from celsius, fahrenheit.

// let celsius = 32 , f = 9 / 5;
// let fahrenheit = (celsius * 9 / 5) +32;
// console.log("convert celsius into fahrenhit",fahrenheit);

// answer is : convert too celsius into fahrenhit = 89.6

//3 write a javascript programe to find the area of rectangle.

// let length = 20 , width = 30;
// let rectangle = length * width ;
// console.log("find out are of reactangle",rectangle);

// answer is : area of rectangle = 600

//4 write a javascript programe to find the area of circle.

// let r = 5
// let circle = 3.14 * r * r;
// console.log("find out area of circle",circle);

// answer is : area of circle = 78.5

//5 write a javascript programe to convert to feet into inches.

// let feet = 9;
// let inche = feet * 12 ;
// console.log("convert feet into inche :",inche);

// answer is : convert feet into inche : 108

//Q-2 write a javascript programe to to calculate given formula.

// 1. a**2 - b**2 = (a-b)(a+b)

let a = 6,b = 3;
let formula =(a ** 2) - (b ** 2);
let formula2 = (a - b) * (a + b);

console.log("the formula is :",formula, "is iqual too",formula2,formula === formula2);

// answer is : true 
 
// 2 (a-b)**2 = a**2 - 2ab + b**2

let a1 = 6,b1 = 3;
let formula3 =(a1-b1)** 2;
let formula4=(a1 ** 2) - (2 * a1 * b1) + (b1 ** 2);

console.log("the formula is",formula3,"is iqual too ",formula4,formula3 === formula4);

// answer is : true 
 
// 3 (a=b=c)**2 = a**2 + b**2 + c**2 + 2ab + 2ac + 2bc

let a2 = 6, b2 = 3, c = 9;
let formula5 = (a2 + b2 + c) ** 2;
let formula6 = (a2 ** 2) + (b2 ** 2) +(c ** 2) + (2 * a2 * b2) + (2 * a2 * c) + (2 * b2 * c);

console.log("The Formula is :",formula5, "Is Equal To",formula6, formula5 === formula6);

// answer is : true 

// 4 (a-b-c)**2 = a**2 + b**2 + c**2 - 2ab - 2ac + 2bc

let a3 = 6, b3 = 3, c3 = 9;
let formula7 = (a3 - b3 - c3) ** 2;
let formula8 = (a3 ** 2) + (b3 ** 2) + (c3 ** 2) - (2 * a3 * b3) - (2 * a3 * c3) + (2 * b3 * c3);

console.log("The Formula is :",formula7, "Is Equal To",formula8, formula7 === formula8);

// answer is : true 

// 5 (a-b)**3 = a**3 -3a**2b + 3ab**2 - b**3

// let a4 = 6, b4 = 3;
// let formula9 = (a4 - b4) ** 3;
// let formula10 = (a4 ** 3) - (3 * (a4 ** 2) * b4) + (3 * a4 * (b4 ** 2)) - (b4 ** 3);

// console.log("The Formula is :",formula9, "Is Equal To",formula10, formula9 === formula10);

// answer is : true