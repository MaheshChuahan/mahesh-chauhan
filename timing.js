// 1.setTimeout 2.setTimeinterval 3.clearTimeout 4.clearTimeinterval
// console.log("Hello World...")

// setTimeout(()=>{
//     console.log(10*3);
// },3000);

// setInterval(()=>{
//     console.log(10*3)
// },3000);

// console.log("Good Byy......!") 

let id;
document.getElementById("start").addEventListener('click',()=>{
    id = setInterval(()=>{
        let date = new Date;
        let time =date.toLocaleTimeString();
        document.getElementById("timeing").innerHTML = time
    },100);
})

document.getElementById("stop").addEventListener('click',()=>{
    clearInterval(id);
     
      })

