// setInterval(()=>{console.log("Hello");},2000);

// let count = 0;
// let timer = setInterval(()=>{
//     count++;
//     console.log(count);
//     if(count===5){
//         clearInterval(timer);
//     }
// })


let traffic = ["Red","Yellow","Green"];
traffic.forEach(element => {
    setInterval(()=>{console.log(element);},2000)
}); 