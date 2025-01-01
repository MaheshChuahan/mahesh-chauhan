class Test{
    constructor(name , city){
        this.name = name;
        this.city = city;
    }
    sayHellow(){
        console.log("hellow 2025....",this.name, this.city);
    }
    addition(a,b){
        console.log(a/b);
    }
}
 let obj = new Test("rohit sharma", "mumbai");
 obj.sayHellow()

 let data = new Test("virat kohli", "delhi");
 obj.sayHellow()
 data.addition(22,11)