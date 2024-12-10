// function sayhello(){
//     console.log("inside value",n);
//     if(n<5){
//         sayhello(++n);
//     }
//     else{
//         //console.log("finished value",n);
//     }
//     console.log("finished value",n);
// }
//  sayhello(1);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// function fact(n){
//     console.log("recursive:",n);
//     if(n==1){
//        return 1;
//     }
//     else{
//         return n*fact(n-1);
//     }
    
// }
// console.log(fact(7))

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//fiboncy series...

function fiboncy(){
    let n;
    n=prompt("enter a number:");
    let a=1 ,b=1;
    console.log(a);
    console.log(b);

    for(let i=0; i<=n; i++){
        let c= a+b;
        console.log(c);
        a=b;
        b=c;
    }
}
console.log(fiboncy(6));