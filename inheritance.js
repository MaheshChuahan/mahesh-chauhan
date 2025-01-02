// inheritance
// type of inheritance : 1.single 2.multilevel 3.multiple 4.hierarchical 


//***************************************************  single  ***************************************************//
// class parent {
//     constructor(name) {
//         this.name = name
//     }
//     sayparent() {
//         console.log("parent called....!", this.name);
//     }
// }
// class child extends parent {
//     constructor(ParentName, ChildName) {
//         super(ParentName);
//         this.ChildName = ChildName
//     }
//     saychild() {
//         console.log("child called....!",this.ChildName);
//     }
// }
// let single = new child("sachin","arjun");
// single.saychild()
// single.sayparent()


//*************************************************** MULTILEVEL ***************************************************//


class GrandParent {
    constructor(Grandparent) {
        this.Grandparent = Grandparent
    }
    sayGrandparent() {
        console.log("Grandparent called....!", this.Grandparent);
    }
}
class Parent extends GrandParent {
    constructor(ParentName,Grandparent) {
        super(Grandparent)
        this.ParentName = ParentName
    }
    sayparent() {
        console.log("parent called....!", this.ParentName);
    }
}
class child extends Parent {
    constructor(Grandparent, ParentName, ChildName) {
        super(ParentName,Grandparent);
        this.ChildName = ChildName
    }
    saychild() {
        console.log("child called....!", this.ChildName);
    }
}
let multilevel = new child("Pachin", "sachin", "arjun");
multilevel.saychild()
multilevel.sayparent()
multilevel.sayGrandparent()


//*************************************************** hierarchical ***************************************************//


// class parent {
//     sayparent() {
//         console.log("parent called.....!");
//     }
// }
// class child1 extends Parent {
//     saychild1() {
//         console.log("child1 called.....!");
//     }
// }
// class child2 extends Parent {
//     saychild2() {
//         console.log("child2 called.....!");
//     }
// }
// let hierarchical = new child2()
// hierarchical.saychild2();
// hierarchical.sayparent();
// let hierarchical2 = new child1()
// hierarchical2.saychild1();
// hierarchical2.sayparent();