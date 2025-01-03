// polymorphism ==> many form

class test {
    sayHello(){
        console.log("test class called......!")
    }
}

class result extends test{
    sayHello(){
        console.log("result class calles....")
    }
}

let polymorphism = new result();
polymorphism.sayHello();
let polymorphism1 =new test();
polymorphism1.sayHello();