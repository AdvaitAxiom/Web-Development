console.log("Tutorial on loops");
//loops-->
//for loop
//for in loop
//for of loop
//while loop
//do while loop
//forEach loop

let a =1;
for(let index=0;index<10;index++){
    console.log(a+index);
}
console.log("--------------------------------");
let obj = {
    name: "Alapan",
    role: "Programmer",
    company: "Google"
}
//FOR IN LOOP
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
        
//     }
// }
//FOR IN LOOP
for(let key in obj){
    // const element = obj[key];
    console.log(key, obj[key]);
}
console.log("--------------------------------");
//FOR OF LOOP(array)
for (const  element of "Alapan") {
    console.log(element);
}
console.log("--------------------------------");
//WHILE LOOP
let i = 5;
while(i<10){
    // console.log();
    console.log(i);
    i++;
}
console.log("--------------------------------");

//DO WHILE LOOP
let j = 0;
do {
    console.log(j);
    j++;
} while (j<6);
