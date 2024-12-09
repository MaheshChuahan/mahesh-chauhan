// no argument no return

function saygreeting(){
    console.log("good morning.....!!!")
}

saygreeting();

/////////////////////////////

//no arg with return

function greeting(){

    console.log("good afternoon...!!")  
}
     let a=greeting();
     console.log(a);

////////////////////////////////////////

//with arg no return

function addition(num1, num2){
    
    console.log("addition is ",num1 + num2);
}
addition(30+12);

///////////////////////////////////////////////

// with arg with return

function voting(age){
    if (age>=18)
        return"you are eligble";
    else 
    return"you not eligble";

}
console.log(voting(34));


// choice = prompt("enter your choice");
// switch (choice){
// case"1":
//     console.log(saygreeting);
//     break;
     
// case"2":
//     console.log("write greeting==>",greeting());
//     break;

// case"3":
//     console.log("addition is ==>",addition(30,12));
//     break;

// case"4":
//     console.log("voting==>",voting(4));
//     break;
// default:
//         console.log("invalid input");
//         break;
    

// }

// 1
// function doller() {
//     let doller = 85;
//     let rupees = doller * 2
//     console.log("convert 2 dollaer into rupees :", rupees);
// }
// doller()


// 2
// function feet() {
//     let foot = 10;
//     let inche = foot * 12
//     console.log("convert 10 foot into inche :", inche);
// }
// feet()


//  3
// function fah() {
//     let fahrenheit = 32, formula = 9 / 5;
//     let celsius = fahrenheit + 7 * formula;
//     console.log("convert fahrenheit into celsius :", celsius);
// }
// fah()


// 4
// function meter() {
//     let centimeter = 300;
//     let meter = centimeter / 100;
//     console.log("convert fahrenheit into celsius :", meter);
// }
// meter()


// 5
// function triangel() {
//     let base = 100, height = 5;
//     let triangle = 1 / 2 * base * height;
//     console.log("find out area of triangel :", triangle);
// }
// triangel()


//  6
// function rectangle() {
//     let length = 12, width = 7;
//     let rectangle = length * width;
//     console.log("find out area of rectangle :", rectangle);
// }
// rectangle()


//  7
// function circle() {
//     let pi = 3.14, r2 = 3;
//     let circle = pi * r2 * 2;
//     console.log("find out area of circle :", circle)
// }
// circle()


//  8
// function interest() {
//     let p = 5, r = 3, t = 6;
//     let sl = p * r * t / 100;
//     console.log("find out simple of interest :", sl)
// }
// interest()


//  9
// function salary() {
//     var basic = 100;
//     var HRA = (basic * 12) / 100;
//     var DA = (basic * 18) / 100;
//     var salary = basic + HRA + DA;
//     console.log("find out salary of employe :", salary);
// }
// salary()


///////////////////////////////////// if else pogram ///////////////////////////////////////
//  1 
// function pogram1() {
//     let unit = 288;
//     if (unit <= 100) {
//         console.log("Your charged a minimuum 50 rs", (unit * 0.60) + 50)
//     }
//     else if (unit >= 100 && unit < 300) {
//         console.log("Your charged 60p.", ((unit - 100) * 0.80) + 50 + 60);
//     }
//     else if (unit >= 300) {
//         console.log("Your charged 90p.", (((unit - 300) * 0.90) + 50 + 60 + 160) + ((unit - 300) * 15 / 100));
//     }
//     else {
//         console.log("uit is not valid");
//     }
// }
// pogram1()


//  2
// function pogram2() {
//     let age = 20;
//     if (age >= 18) {
//         console.log('person eligible for vote');
//     }
//     else {
//         console.log('person is not valid....!');
//     }
// }
// pogram2()


// 3
// function pogram3() {
//     let salary = 11000;
//     if (salary <= 5000) {
//         console.log('HRA salary is 1: ', salary * 0.08);
//         console.log('DA salary is 1: ', salary * 0.20);
//     }
//     else if (salary >= 5000 && salary < 10000) {
//         console.log('HRA salary is 2: ', ((salary - 5000) * 0.08 + 400));
//         console.log('DA salary is 2: ', ((salary - 5000) * 0.30 + 1000));
//     }
//     else if (salary >= 10000 && salary < 15000) {
//         console.log('HRA salary is 3: ', ((salary - 10000) * 0.15 + 400 + 400));
//         console.log('DA salary is 3: ', ((salary - 10000) * 0.40 + 1000 + 1500));
//     }
//     else if (salary >= 15000) {
//         console.log('HRA salary is 4: ', ((salary - 15000) * 0.20 + 400 + 400 + 750));
//         console.log('DA salary is 4: ', ((salary - 15000) * 0.50 + 1000 + 1500 + 2500));
//     }
//     else {
//         console.log('salary is not valid')
//     }
// }
// pogram3()


// pogram 4
// function pogram4() {
//     let income = 5200;
//     if (income <= 2500) {
//         console.log('Tax free: ');
//     } else if (income >= 2500 && income < 5000) {
//         console.log('slab 2 is : ', (income - 2500) * 0.10);
//     } else if (income >= 5000 && income < 10000) {
//         console.log('slab 3 is : ', ((income - 5000) * 0.20 + 250));
//     } else if (income >= 10000) {
//         console.log('slab 4 is : ', ((income - 10000) * 0.30 + 250 + 1000));
//     }
//     else {
//         console.log('income is not valid')
//     }
// }
// pogram4()


//  5 
// function pogram5() {
//     let marks = 80;
//     if (marks >= 75) {
//         console.log("Your grade is A")
//     }
//     else if (marks >= 60 && marks < 75) {
//         console.log("Your grade is B");
//     }
//     else if (marks >= 45 && marks < 60) {
//         console.log("Your grade is C");
//     }
//     else if (marks >= 35 && marks < 45) {
//         console.log("Your grade is D");
//     }
//     else {
//         console.log("you are fail");
//     }
// }
// pogram5()


//  6
// function pogram6() {
//     let x = 1000, y = 15;
//     if (x < 2000 || x > 3000) {
//         console.log('value of x :', x);
//     }
//     else if (y > 100 && y < 500) {
//         console.log('value of Y :', y);
//     }
//     else {
//         console.log("no value is printed");
//     }
// }
// pogram6()


///////////////////////////////////////// Loop ///////////////////////////////////////////


// 1
// function dec() {
//     for (let i = 10; i >= 1; i--) {
//         console.log(i);
//     }
// }
// dec()


//  2
// function inc() {
//     for (let i = 51; i <= 79; i++) {
//         console.log(i);
//     }
// }
// inc()


// 3 
// function same() {
//     let n = 10;
//     for (i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// same()


// 4
// function rev() {
//     let n = 3;
//     for (i = -n; i <= 1; i++) {
//         console.log(i);
//     }
// }
// rev()


//  5
// function num() {
//     let n = 2;
//     for (i = -n; i <= n; i++) {
//         console.log(i);
//     }
// }
// num()


// 6
// function old() {
//     let n = 10;
//     for (i = 1; i <= n; i += 2) {
//         console.log(i);
//     }
// }
// old()


//  7
// function even() {
//     let n = 10;
//     for (i = 0; i <= n; i += 2) {
//         console.log(i);
//     }
// }
// even()


// 8
// function next() {
//     for (i = 1; i <= 5; i++) {
//         if (i % 2 == 0) {
//             console.log(i ** 2);
//         }
//         if (i % 2 == 1) {
//             console.log(i);
//         }
//     }
// }
// next()


//  9 
// function fibonali() {
//     let a = 1, b = 1;
//     console.log(a);
//     console.log(b);
//     for (let i = 0; i < 6; i++) {
//         let c = a + b; 
//         console.log(c);
//         a = b; 
//         b = c; 
//     }
// }
// fibonali()


//  10 
// function series() {
//     let a = 1, i;
//     for (i = 1; i <= 5; i++) {
//         console.log(a * i);
//         a *= 2
//     }
// }
// series()


//  11
// function factorial(){
//     let num = 1 , n =10;
//     for (let i = 1; i <= n; i++) {
//         num *= i;
//         console.log(num);
//         }
// }
// factorial()


//  12
// function total() {
//     let sum = 0, n = 5;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//         console.log(sum);
//     }
// }
// total()


//  13 
// function even(){
//     let sum = 0 , n = 4;
//     for (let i = 0; i <= n; i+=2) {
//         sum += i;
//         console.log(sum);
//     }
// }
// even()


// 14 
// function old() {
//     let sum = 0, n = 10;
//     for (let i = 1; i <= n; i += 2) {
//         sum += i;
//         console.log(sum);
//     }
// }
// old()


//  15 
// function digit() {
//     let n = 541;
//     let digit = 0;
//     for (let i = 0; i < n.length; i++) {
//         digit += n[i];
//     }
//     console.log("sum of digite:", + digit);
// }
// digit()