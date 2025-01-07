// P. 1 
class School {
    Studant(name, email, contact) {
        console.log("Studant name is :", name);
        console.log("Studant email :", email);
        console.log("Studant contact Number is :", contact);
    }
    Faculty(name, email, contact) {
        console.log("Faculty name is :", name);
        console.log("Faculty email :",email);
        console.log("Faculty contact Number is :", contact);
    }
}
let StuDeatil = new School();
StuDeatil.Studant("Mahesh Chauhan", "mahesh@gmail.com", 987653212);
let FacDeatil = new School();
FacDeatil.Faculty("Girishsir", "Girishsir@gmail.com", 1233456778);

//  output:  

// Studant name is : Mahesh Chauhan
// Studant email : mahesh@gmail.com
// Studant contact Number is : 987653212
//  Faculty name is : Girishsir
//  Faculty email : Girishsir@gmail.com
//  Faculty contact Number is : 1233456778


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// P.2

// class person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class employee extends person {
//     constructor(name, age) {
//         super(name, age);
//     }
    
//     sayemp() {
//         console.log("employe name is ==>", this.name);
//         console.log("employe age ==>", this.age);
//     }
// }

// let data = new employee("Mahesh", 20);
// data.sayemp();

// output:

// employee name is ==> Mahesh
// employee age ==> 20

/////////////////////////////////////////////////////////////////////////////////////////////////////

// P.3

// class employee{
//     constructor(message){
//         this.message = message;
//     }
//     sayhello(){
//         console.log("this message is ==>",this.message);
        
//     }
// }

// let emp = new employee("hello 2025...!!!");
// emp.sayhello();

// output:

//this message is ==> hello 2025...!!!

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// P.4

// class Shape {
//     constructor(radius,width,height) {
//         this.radius = radius;
//         this.width = width;
//         this.height = height;
//     }  
//     circleArea() {
//         return 3.14 * this.radius * this.radius;
//     }


//     rectangleArea() {
//         return this.width * this.height;
//     }
// }

// let obj = new Shape(4);
// console.log(obj.circleArea());

// let obj2 = new Shape(4,5,6);
// console.log(obj2.rectangleArea());