// let numbers=[1,2,3,4,5]//Array of numbers
// let stringArr=["Sidhu","Kiran","Vaibhavi","Sonam"]
// console.log(numbers,typeof numbers);//object aayega ye chiz smjh humko prototype mein aayega ki kyu object aaya
// console.log(typeof stringArr);

// Arrays Methods
// push

// let numbers=[1,2,3,4,5] // placing/position 0 se chalu hoti hai
// console.log(numbers[3]);
// //arr[index]


// .length
// let randomArr=[2,4,5,2,5,7,8,9];
// randomArr.length();
// console.log(randomArr);
// .push
// numbers.push(85);
// console.log(numbers);//adds the element at the last position in existing array



//-------------------------------------------------------------------------------------
//ASSIGNMENT
//1
// let FruitArr=["Apple", "Banana", "Mango" , "Orange"];
// console.log(FruitArr);
 
//2
// let FruitArr=["Apple", "Banana", "Mango" , "Orange"];
// console.log(FruitArr.splice(2,1));
// console.log(FruitArr);


//3
// let FruitArr=["Apple", "Banana", "Mango"];
// FruitArr[1]="Grapes";
// console.log(FruitArr);

//4
// let FruitArr=["Apple", "Banana", "Mango"];
// FruitArr.push("Orange");
// console.log(FruitArr);

//5
// let FruitArr=["Apple", "Banana", "Mango"];
// FruitArr.push("Orange","Grapes","Kiwi");
// console.log(FruitArr);

//6
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.pop();
// console.log(fruits);

//7
// let students = ["Rahul", "Priya", "Aman", "Riya"];
// students.shift("Rahul");
// console.log(students);

//8
// let students = ["Rahul", "Priya", "Aman"];
// students.unshift("Karan");
// console.log(students);

//9
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.includes("Mango"));
// console.log(fruits);

//10
// let students = ["Rahul", "Aman", "Priya", "Riya"];
// console.log(students.indexOf("Aman"));


//11
// let colors = ["Red", "Blue", "Green", "Yellow"];
// console.log(colors[0]);
// console.log(colors[3]);

//12
// let numbers = [10, 20, 30];
// numbers.push(40,50);
// numbers.pop();
// numbers.unshift(5)
// console.log(numbers);

//13
// let students = ["A", "B", "C"];
// students.push("D");
// students.shift();
// students.unshift("E");
// console.log(students);


//14
// let cart = ["Shoes", "Shirt", "Jeans"];
// cart.push("Watch");
// cart.pop();
// cart.unshift("Cap");
// console.log(cart.includes("Jeans"));
// console.log(cart);

//15
// let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// console.log(products.includes("Mouse"));
// console.log(products.includes("Printer"));

//16
// let numbers = [10, 20, 30, 40, 50];
// numbers.shift();
// numbers.pop();
// console.log(numbers);

//17
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// console.log(fruits.slice(0,3));

//18
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.slice(-2));

//19
// let arr = ["A", "B", "C", "D", "E"];
// let result = arr.slice(1, 4);
// console.log(result);
// console.log(arr);

//20
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits.splice(2,1));
// console.log(fruits);

//21
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits.splice(1,2));
// console.log(fruits);


//22
// let fruits=["Apple", "Banana", "Orange"];
// fruits.splice(1,0,"Mango");//to add an item
// console.log(fruits);

//23
// let fruits=["Apple", "Banana", "Orange"];
// fruits[1]="Grapes";
// console.log(fruits);

//24
// let arr = ["A", "B", "C", "D"];
// let removed = arr.splice(1, 2);
// console.log(arr);
// console.log(removed);

//25
// let frontend = ["HTML", "CSS"];
// let backend = ["Node", "MongoDB"];
// let newBatch=frontend.concat(backend);
// console.log(newBatch);

//26
// let a = [1, 2];
// let b = [3, 4];
// let c = [5, 6];
// let result=a.concat(b,c);
// console.log(result);


//27
// let skills = ["HTML", "CSS", "JavaScript", "React"];
// console.log(skills.join("|"));

//28
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.join());

//29
// let numbers = [1, 2, [3, 4], 5];
// console.log(numbers.flat(Infinity));

//30
// let arr = [1, [2, 3], [4, 5]];
// console.log(arr.flat(Infinity));

//31
// let arr = [1, [2, [3, 4]], 5];
// console.log(arr.flat());
// console.log(arr.flat(2));

//32
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reverse());

//33
// let students = ["Rahul", "Priya", "Aman", "Riya"];
// console.log(students.reverse());


//34
// let arr = ["A", "B", "C"];
// let result = arr.reverse();
// console.log(result);
// console.log(arr);
//both the output are same because reverse changes the original array


// 35
// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray("Hello"));
// console.log(Array.isArray({}));
// console.log(Array.isArray(100));

//36
// let data = [10, 20, 30];
// console.log(typeof data); //object kyu aaya number kyu nhi
// console.log(Array.isArray(data));

//37
// let values = [[1, 2], "Hello", 100, true, {name: "Rahul"}];
// console.log(Array.isArray([1, 2]));
// console.log(Array.isArray("Hello"));
// console.log(Array.isArray(100));
// console.log(Array.isArray(true));
// console.log(Array.isArray({name:"Rahul"}));

// for(let i = 0 ; i <= values.length; i++){
//     console.log(`element at position ${i} is ${Array.isArray(values[i])}`);
// }

//38
// let word = "HELLO";
// console.log(Array.from(word));

//39
// let language = "JavaScript";
// console.log(Array.from(language));

//40
// let value = "12345";
// let result = Array.from(value);
// console.log(result);
// console.log(Array.isArray(result));

//41
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.push("Orange");
// fruits.unshift("Grapes");
// fruits.pop();
// console.log(fruits);


//42
// let arr = [10, 20, 30, 40, 50];
// arr.splice(1, 2);
// arr.push(60);
// arr.unshift(5);
// console.log(arr);

//43
// let arr = ["A", "B", "C", "D"];
// let newArr = arr.slice(1, 3);
// newArr.push("E");
// console.log(arr);
// console.log(newArr);

//44
// let a = [1, 2];
// let b = [3, 4];
// let result = a.concat(b);
// result.reverse();
// console.log(result);
// console.log(a);
// console.log(b);

//45
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.slice(0, 2).join(" - "));

//46
// let cart = ["Laptop", "Mouse", "Keyboard"];
// cart.push("Monitor");
// console.log(cart.splice(1,1));
// cart.unshift("Webcam");
// console.log(cart.includes("Keyboard"));
// console.log(cart.indexOf("Laptop"));
// console.log(cart);

//47
// let students = ["Rahul", "Priya", "Aman", "Riya"];
// students.push("Karan");
// students.unshift("Neha");
// students.pop();
// students[3]="Arjun";
// console.log(students.includes("Priya"));
// console.log(students.indexOf("Riya"));
// console.log(students);

//48
// let frontend = ["HTML", "CSS", "JavaScript"];
// let backend = ["Node", "Express"];
// let skillsCollection=frontend.concat(backend);
// skillsCollection.push("MongoDB");
// skillsCollection.reverse();
// console.log(skillsCollection.join("->"));

//49
// let categories = [["Shirts", "Jeans"], ["Shoes", "Sandals"], ["Bags","Wallets"]];
// let newCat=categories.flat(Infinity);
// console.log(newCat);
// console.log(newCat.includes("Shoes"));
// console.log(newCat.indexOf("Wallets"));
// console.log(newCat.join(","));

//50
// let products = ["Laptop", "Mouse", "Keyboard"];
// console.log(products.splice(1,1));
// products.push("Monitor");
// products.push("Webcam");
// console.log(products.includes("Laptop"));
// console.log(products.indexOf("Keyboard"));
// console.log(products);

//51
// let arr = ["A", "B", "C", "D"];
// arr.push("E");//["A", "B", "C", "D","E"];
// let removed = arr.splice(1, 2);//["B","C"]
// arr.unshift("X");//["X",A","D","E"];
// let result = arr.slice(1, 4);//["A",d,e]
// result.reverse();//xade edax
// console.log(arr);//Xade
// console.log(removed);//BC
// console.log(result);//eda
// console.log(result.join("-"));



//-----------------------------------------------------------------------------------------------------------------------------------------

// Looping in array

// let numbers = [11,24,35,42,57,68];
// for(i=0;i<=numbers.length;i++){
//     if(numbers[i]%2===0){
//     console.log(`${numbers[i]} is even`);
//     }
// }


// Find the average of array

// let numbers=[10,20,30,40,50];
// let sum=0;
// for(i=0;i<numbers.length;i++){
//     sum=sum+numbers[i];
// }
// let avg=sum/numbers.length;
// console.log(avg);


// Find the greater

// let numbers=[10,20,30,40,50];
// let largest=0;
// for(i=0;i<numbers.length;i++){
//     if(largest<numbers[i]){
//         largest=numbers[i];
//     }
// }
// console.log(`${largest} is greater`);


// let letter=["J","A","V","A","S","C","R","I","P","T"];
// for(i=0;i<letter.length;i++){
//     let row="";
//     for(j=0;j<=i;j++) {
//     row=row+letter[j];
//     }
//     console.log(row);
// }

