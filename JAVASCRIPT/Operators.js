// let x = 5;
// console.log(x++ + x++);
// console.log(x);

// let a = 5;
// let b = a++ + ++a;
// let c = --a + a--;
// let d = ++a + a++;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let num = 10;

// let check = num%4 == 0 ? "Divisible by 4": "Not Divisible by 4";
// console.log(check);

// let uname = "Rahul" ;
// let varAge = 17 ;

// if(varAge>=18) {
//     console.log(`Dear ${uname} , You are above 18 SO YOU CAN DRIVE.`);
// } else {
//     console.log(`Dear ${uname} , You are below 18 SO YOU CANNOT DRIVE.`);
// }

// write a program to check eligibility of the student . The 12th school marks should be above 60% and eligibility of college admission should be above 70%

// let uname="Raghav";
// let percentage=85;
// let entrance=60;

//  if(percentage>=60 && entrance>=70){
//     console.log(`Dear ${uname} , You Are Eligible For College.`);
//  }else{
//     console.log(`Dear ${uname} , You Are Not Eligible For College.`);
//  }

//  Q2
 
// let balance=5000;
// let withdrawal=-8000;

// if(withdrawal>0){
//     if(withdrawal<=balance){
//         let remaining=balance-withdrawal;
//     console.log(`Tansaction Successful`);
//     console.log(`Remaining Balance is ${remaining}`);
//    }else{
//     console.log(`Insufficient Balance`);
// }
// }else{
//     console.log(`Invalid Amount`);
// }

// Q4

// let age=12;
// let hasParent=false;

// if (age>=18){
//     console.log(`Ticket Allowed`);
// }

// else {
//         if (age>=13){
//             if(hasParent){
//                 console.log(`Ticket Allowed with Parent`);
//             }
//         else{
//     console.log(`Parent Required`);
// }
//         }
// else{
//     console.log(`Ticket Not Allowed`);
// }
// }

// Q5 

// let year=1900;

// if((year%4==0 && year%100!==0)||(year%400==0)){
//     console.log(`It is a Leap Year`);
//     }
// else{
//     console.log(`Not a Leap Year`);
// }

// // Positive or Negative

// let num=-1;

// if(num<0){
//     console.log(`It is negative number`)
// }
// else{
//     console.log(`it is positive number`)
// }

// Even Odd

// let num=2;

// if(num%2==0){
//     console.log(`Even`);
// }
// else{
//     console.log(`Odd`);
// }

// Passed or Failed

// let num=35;

// if(num>=40){
//     console.log(`Pass`);
// }
// else{
//     console.log(`Fail`);
// }

// Greater than 100 or not

// let num=900;

// if(num>100){
//     console.log(`Greater`);
// }else{
//     console.log(`Smaller`);
// }

// Divisible by 5

// let num=225;

// if(num%5==0){
//     console.log(`Divisible by 5`);
// }else{
//     console.log(`Not Divisible by 5`);
// }

// Check the number is zero,positive or negative

// let num=10;

// if(num=0){
//     console.log(`Zero`);
// }
// else if()


// Greater of two numbers

// let num1=40;
// let num2=30;

// if(num1>num2){
//     console.log(`Num1 is greater`);
// }
//  else{
//         console.log(`Num2 is greater`);
//     }


// Greatest of three numbers

// let num1=40;
// let num2=50;
// let num3=20;

// if(num1>num2 && num1>num3){
//     console.log(`Num1 is greater`);
// }
//    else if(num2>num1 && num2>num3){
//         console.log(`Num2 is greater`);
//     }
// else{
//         console.log(`Num3 is greater`)
//     } 


// Divisible by 3 & 5 both

// let num=5;

// if(num%3==0 && num%5==0)
// {
//     console.log(`Divisible by 3 & 5 both `);
// }
// else{
//     console.log(`Not divsible by 3 & 5`);
// }


// Write a program to calculate electricity bill:
// Units ≤ 100 → ₹5/unit
// Units ≤ 200 → ₹7/unit
// Units > 200 → ₹10/unit

// let unit = 150;

// if(unit<=100){
//     console.log(`₹5/unit`);
// }
//     else if(unit>100 && unit<=200){
//         console.log(`₹7/unit`);
//     }
// else{
//     console.log(`₹10/unit`);
// }


// let purchase = 6000;
// let discountPer;

// if(purchase>=10000){
//     discountPer=20;
// } 
//     else if(purchase>=5000){
//     discountPer=10;
// }
// else if(purchase>=2000){
//    discountPer=5;
// }

// else{
//     discountPer=0;
// }

// let amountPayable=purchase-(discountPer*purchase)/100;
// console.log(`Amount: ${purchase} DiscountPercent :${discountPer} NetPayableAmount: ${amountPayable}`);


// -----------------------------------------------------------------------------------------------------------------------------------------------
// switch case

// let day=1;

// switch(day){
//     case 1:{
//         console.log('Monday');
//         break;
//     }
//      case 2:{
//         console.log('Tuesday');
//         break;
//     }
//      case 3:{
//         console.log('Wednesday');
//         break;
//     }
//      case 4:{
//         console.log('Thursday');
//         break;
//     }
//      case 5:{
//         console.log('Friday');
//         break;
//     }
//      case 6:{
//         console.log('Saturday');
//         break;
//     }
//      case 7:{
//         console.log('Sunday');
//         break;
//     }
//     default: {
//         console.log('Invalid number');
//     }
// }

// let light="orange";

// switch(light){
//     case "red":{
//         console.log(`STOP`);
//         break;
//     }

//     case "yellow":{
//         console.log(`READY`);
//         break;
//     }

//     case "green":{
//         console.log(`GO`);
//         break;
//     }

//     default:{
//         console.log('System Failed');
//     }
// }

// let role="admin";

// switch(role){
//     case "admin":{
//         console.log(`Full Access`);
//         break;
//     }

//     case "editor":{
//         console.log(`Can Edit Only`);
//         break;
//     }

//     case "user":{
//         console.log(`Read Only`);
//         break;
//     }

//     default:{
//         console.log('Invalid');
//     }
// }


// let day="Mon";

// switch(day){
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//      case "Thursday":
//     case "Friday":{
//         console.log(`Weekday`);
//         break;
//     }

//     case "Saturday":
//     case "Sunday":{
//         console.log(`Weekend`);
//         break;
//     }
//     default:{
//         console.log('Invalid');
//     }
// }


// Nullish Colasceing

// const pro ={ 
//    product: "Phone",
//    price: null
// }

// console.log(`The price of the phone is ${pro.price ?? "Not Available"}`);

// const user ={
//     name:"Riya",
//     age:null,
//     city:null,
//     points:0
// }

// console.log(`Riya lives in city ${user.city ?? "currently not available"} and her age is ${user.age ?? "not available"} and her points are ${user.points}`);


// Optional Chaining (?.) - Check krte hai data mein wo present hai ya n ahi aur agar nahi hai toh error na show kare uske jgh dusre data dede
