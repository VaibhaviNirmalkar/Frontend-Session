// function square(side){
//     let result=side*side;
//     console.log(`The square is ${result}`);
// }

// square(45);

// function add (a,b,c){
//     let sum = a+b+c;
//     console.log(`The sum is ${sum}`);
// }

// add(5,7,2);


// function even(){
//     for(let i=1;i<20;i++){
    
//     }
// }
//  console.log(`Even numbers are${result}`);

// function greet(){
//     console.log(`Hello. Welcome to Javascript.`);
// }
// greet();

// function intro(name,age,course){
//     console.log(``);
// }

// function showMessage(){
//     console.log(`Practice makes you perfect!`);
// }
// showMessage();



// function showOddNumbers(){
//     for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// }

//  showOddNumbers();


// function  printNumbers(){
//     for(let i=1;i<=10;i++){
//         console.log(i);
//     }
// }

//  printNumbers();


// function  reverseCounting(){
//     for(i=10;i>=1;i--){
//         console.log(i);
//     }
// }

//  reverseCounting();

// function  tableOfFive(){
//     for(let i=1;i<=10;i++){
//         console.log(`5 x ${i} = ${i*5}`);
//     }
// }

//  tableOfFive();


// function sumNumbers() {
//     let sum = 0;
//     for(let i=1;i<=10;i++){
//         sum=sum+i;
//     }
//     console.log(sum);
// }

// sumNumbers();

// function  sumEvenNumbers(){
//     let sum=0;
//     for(let i = 1;i<=10;i++){
//         sum=sum+i;
//         i++;
//     }
//     console.log(sum);
// }

//  sumEvenNumbers();

// function divisibleByThree(){
//     for(let i = 1;i<=50;i++){
//         if(i%3===0){
//             console.log(i);
//         }
//     }
// }

// divisibleByThree();


// function  countEvenNumbers(){
//     for(let i=1;1<=50;i++){

//     }
// }


// 19??

// function printPrimes(){
//     for(let i=2;i<=50;i++){
//         if(i%1===0){
//             console.log(i);
//         }
//     }
// }

// printPrimes();

//20

// function fizzBuzz(){
//     for(let i=1;i<=30;i++){
//             console.log(i);
//     }
// }

// fizzBuzz();

// function fizzBuzz(){
//     for(let i=1;i<=30;i++){
//         if(i%3===0){
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();


// function fizzBuzz(){
//     for(let i=1;i<=30;i++){
//         if(i%5===0){
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();

// function fizzBuzz(){
//     for(let i=1;i<=30;i++){
//         if(i%3===0 && i%5===0){
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();


// function fizzBuzz(){
//     for(let i=1;i<=30;i++){
//         if(i%3!==0 && i%5!==0){
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();

// const resultExp = function(StudentName,Math,Science,English,Hindi,SSt){
//     let total = Math+Science+English+Hindi+SSt;
//     let percent = (total/500)*100;
//     let grade="";
//     if(percent>90){
//     grade="A+";
//     }
//     else if(percent>80 && percent>=90){
//     grade="A";
//     }
//     else if(percent>70 && percent>=80){
//     grade="B+";
//     }
//     else if(percent>60 && percent>=70){
//     grade="B";
//     }
//     else if(percent>50 && percent>=60){
//     grade="C";
//     }
//     return `${StudentName} has secured ${grade} grade with ${percent}%`;
// };

// console.log(resultExp("Vaibhavi",90,70,60,80,60));


// Arrow Function 
// ()=>()
// ()=>{}


// const evenOdd = (num) => {
//     if(num%2===0){
//         return `even`;
//     }
//     else{
//         return `odd`;
//     }
// };

// console.log(evenOdd(5));


// IIFE - Immediately Invoked Function Expression (())();
// GLOBAL Pollution se bachata hai like jab huge program hota hai toh usme naming convention same rehte hai toh conflict hone se bachata hai

// named IIFE

(function greet(){
    console.log("Hello");
})();

// unnamed IIFE

(function(){
console.log("I am unnamed IIFE");
})();

(function add(a,b){
    console.log(a+b);
})(5,6);