// //Har chiz js mein object se hi bani hui hai
// // Array mein index/positions ke through element ko fetch krte hai object mein direct uski property se element ko fetch kr skte hai

// let obj={
//     "name":"Vaibhavi",
//     "age":21,
//     "city":"Raipur",
// };
// console.log(obj);
// console.log(obj.age);
// console.log(obj["age"]);//bracket notation

// // to add a property
// obj.email="test@gmail.com";
// console.log(obj);
// //through bracket notation
// obj["address"]="Shankar nagar";
// console.log(obj);

// //to delete a property
// delete obj.age;
// console.log(obj);

// //brazcket notation kyun useful rehta hai
// let property ="name";
// console.log(obj[property]);

// //to update a property
// obj.name ="Vaibhavi Nirmalkar";
// console.log(obj);

// let user={
//     name:"vaibhavi",
//     contact:5687665454,
//     emali:"test@gmail.com",
//     skills:["javascript","html","css"],
//     address:{
//         house:40,
//         city:"raipur",
//         street:"shankar nagar",

//     }
// };
// console.log(user);


// let product = {
//     name: "Laptop",
//     price: 50000,
//     brand: "Dell"
// };
// console.log(product);

// Object Methods

// object.keys - returns an array of keys
//console.log(object.keys(user));

// object.values - returns an array of values
//console.log(object.values(user));

//object.entries - returns an array of all the entries in the form of key value pair 
//console.log(object.entries(user));

// let students = [
//     { name: "Rahul", marks: 85 },
//     { name: "Priya", marks: 92 },
//     { name: "Aman", marks: 76 },
//     { name: "Neha", marks: 65 }
// ];

// for(let i=0;i<students.length;i++){
//     console.log(`${i+1}. ${students[i].name} , ${students[i].marks}`);
// }

// let largest=0;
// for(let i=0;i<students.length;i++){
//    if(largest<students[i].marks){
//     largest=students[i].marks
//    }
// }
// console.log(largest);

// let smallest=students[0].marks;
// for(let i=0;i<students.length;i++){
//    if(smallest>students[i].marks){
//     smallest=students[i].marks
//    }
// }
// console.log(smallest);

// let sum=0;
// for(let i=0;i<students.length;i++){
//     sum=sum+students[i].marks;
// }
// let avg=sum/students.length
// console.log(`Average of marks ${avg}`);

// let pass=0;
// for(let i=0;i<students.length;i++){
//     if(students[i].marks>40){
//         pass= pass+1;
//     }
// }
// console.log(`Total students passed ${pass}`);

// let score=0;
// for(let i=0;i<students.length;i++){
//     if(students[i].marks>80){
//         score++;
//     }
// }
// console.log(`Total students scored above 80 ${score}`);

// let highest=0;
// let highestStudent="";
// for(let i=0;i<students.length;i++){
//    if(highest<students[i].marks){
//     highest=students[i].marks
//     highestStudent=students[i].name
//    }
// }
// console.log(`${highestStudent} , ${highest}`);

// let studentSearch="Neha";
// for(let i=0;i<students.length;i++){
//     if(students[i].name===studentSearch){
//         console.log("Students Found");
//     }
//     else{
//         console.log("Student Not Found");
//     }
// }


