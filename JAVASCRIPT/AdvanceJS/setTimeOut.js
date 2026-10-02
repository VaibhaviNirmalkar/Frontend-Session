// setTimeout utna time leta hai

// console.log("Order Placed");

// setTimeout(()=>{console.log("Food Ready");},3000);

// console.log("We can do some work while food is being prepared");

// API acts as a bridge between client and server


console.log("Order Placed point 1");

setTimeout(() => {
  console.log("After 1 sec");
}, 3000);
console.log("I aM CONSOLE AFTER 1 SEC BLOCK");
setTimeout(() => {
  console.log("After 2 Seconds");
}, 4000);
console.log("I am a console after 2 second block");
setTimeout(() => {
  console.log("After 3 Seconds");
}, 2000);
console.log("I am a console after 3 second block");
setTimeout(() => {
  console.log("After 4 seconds");
}, 1000);

console.log("Final");