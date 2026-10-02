// While Loop


// print 0 to 10
// let i = 0;

// while(i>=10){
// console.log(i);
// i++;
// }


// print 10 to 0
// let i = 10;

// while(i>=0){
// console.log(i);
// i--;
// }


// print even number from 1 to 20

// let i=0;

// while(i<=20){
// console.log(i);
// i=i+2;
// }

// print odd number from 1 to 20

// let i=0;

// while(i<=20){
// console.log(i);
// i=i+3;
// }


// print number from 1 to 100

// let i=0;

// while(i<=100){
// console.log(i);
// i++;
// }


// print multiples of 2

// let i=2;

// while(i<=20){
// console.log(i);
// i=i+2;
// }


// let i=1;

// while(i<=10){
// console.log(`2 x ${i} = ${i*2}`);
// i++;
// }


// For Loop

// for(let i=1;i<=5;i++){
//     let newLine="";
//     for(let j=1;j<=i;j++)
//     {
//         newLine+="*";
//     }
//     console.log(newLine);
// }

// for(let i=1;i<=5;i++){
//     let newLine="";
//     for(let j=1;j<=i;j++)
//     {
//         newLine+="*";
//     }
//     console.log(newLine);
// }

// for(let i=1;i<=5;i++){
//     let newLine="";
//     for(let j=4;j>=i;j--)
//     {
//         newLine+="*";
//     }
//     console.log(newLine);
// }


// for(let i=1;i<=10;i++)
// {
//     console.log(`2 x ${i} = ${i*2}`);
// }



// 1
// 22
// 333
// 4444
// 55555

// for(let i=1;i<=5;i++){
//     let row="";
//     for(let j=1;j<=i;j++){
//         row=row+i;
//     }
//     console.log(row);
// }



// 1
// 12
// 123
// 1234
// 12345

// for(let i=1;i<=5;i++){
//     let row="";
//     for(let j=1;j<=i;j++){
//         row=row+j;
//     }
//     console.log(row);
// }
        
// -----------------------------------------------

// forEach loop - generally use ni karte uska use case scenario dekhna pdta hai isliye use ni krte kyuki wo main function ko kuch return ni krta , jab naya array ka requirement nahi rhega aur array ko string m convert krna rhega toh forEach use krte hai

// ----------------------------------------------

// for.....of - values pkdta hai

// for......in - index deti hai/keys deti hai

// ---------------

// Map/Filter/Reduce
// Map - original array ko modify ni karta lekin array ko value return krta hai
// Filter - (value,index,entire array) filter krta hai chizo ko
// Reduce - koi bhi ek value leke aata hai like total or sum 

// const prices = [100,200,400,500,800];
// const newprice = prices.map((num)=>num-(10*num)/100);
// console.log(newprice);

// const names = ["Sonam","Shristi","Monica","Vaibhavi","Rahul"];
// const newname = names.map((element)=>element.toLowerCase())
// console.log(newname);

// const names = ["Sonam","Shristi","Monica","Madam","Vaibhavi","Rahul"];

// const newname = names.map((element)=>element.toLocaleLowerCase().split("").reverse().join(""));
// console.log(newname);


// const students = [{
//     name:"Raghav",
//     age:22,
//     course:"HTML"
// },
// {name:"Sachin",
//  age:21,
//  course:"CSS"
// },
// {
//     name:"Riya",
//     age:24,
//     course:"JS"
// }]
// const newstudents = students.map((students)=>students.name)
// console.log(newstudents);

// Filter

// const students = [{
//     name:"Raghav",
//     age:22,
//     course:"HTML"
// },
// {name:"Sachin",
//  age:21,
//  course:"CSS"
// },
// {
//     name:"Riya",
//     age:24,
//     course:"JS"
// },
// {   name:"Rajiv",
//     age:17,
//     course:"HTML"
// },
// {name:"Aman",
//  age:10,
//  course:"CSS"
// },
// {
//     name:"Shalini",
//     age:26,
//     course:"JS"
// }
// ]
// const newstudents = students.filter((students)=>students.age>=18)
// console.log(newstudents);

// const products = [{
//     name:"Laptop",
//     price:1000
// },
// {name:"Mobile",
//     price:1200
// },
// {
//     name:"Watch",
//     price:500
// },
// {   naname:"TV",
//     price:1500
// }
// ]
// const under500=products.filter((products)=>(products.price<=500 ))
// console.log(`Products under 500`);
// console.log(under500);

// Reduce

const orders = [
  {
    id: 101,
    customer: "Rahul",
    status: "delivered",
    items: [
      { name: "Laptop", category: "electronics", price: 60000, quantity: 1 },
      { name: "Mouse", category: "electronics", price: 1000, quantity: 2 }
    ]
  },
  {
    id: 102,
    customer: "Priya",
    status: "cancelled",
    items: [
      { name: "Keyboard", category: "electronics", price: 2000, quantity: 1 }
    ]
  },
  {
    id: 103,
    customer: "Aman",
    status: "delivered",
    items: [
      { name: "T-Shirt", category: "fashion", price: 1500, quantity: 3 },
      { name: "Jeans", category: "fashion", price: 2500, quantity: 1 }
    ]
  },
  {
    id: 104,
    customer: "Neha",
    status: "delivered",
    items: [
      { name: "Mobile", category: "electronics", price: 30000, quantity: 1 },
      { name: "Headphones", category: "electronics", price: 3000, quantity: 2 }
    ]
  }
];

// const neworders=orders.filter((orders)=>(orders.status==="delivered" ))
// console.log(neworders);
// const neworder = neworders.map((neworders)=>(neworders.id))
// console.log(neworder);

// const neworders=orders.filter((orders)=>(orders.status==="delivered" ))
// const neworder = neworders.map((neworders)=>(neworders.customer))
// console.log(neworder);

const neworders=orders.filter((orders)=>(orders.status==="delivered" ))
const neworder = neworders.reduce((acc,val)=>{
  return acc + val ;
},0);
console.log(neworder);