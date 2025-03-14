console.log("Variables, DataTypes and objects")

//Data types in JS

//1.Primitive
    //Null Number String Symbol Undefined Boolean BigInt

//2.Object (User Defined)
var a =5;   //var-->scope global
var b = 6;
var c = "Alapan";

console.log(a+b);
console.log(a+b+8);
console.log(a+b+c);
console.log(typeof a, typeof b, typeof c);

{
    let a = 55;     //let & const-->scope block
    console.log(a); //print 55 because it is in the block if there is no value in block then it will search for global
}
console.log(a); //this will print 5 not 55 because 55 was a block element and out of the block always global will be taken

// const a1 = 6;
// a1 = a1+1;  //not allwoerd (a1 constant)

//JS Linter--> JS Linter is a tool in vs code that analyzes JavaScript code to detect potential errors, enforce coding standards, and improve code quality.
    // eg: if  let c =10; then we cant again write const c
let x = "Happy";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;   //typeof null is object

// Historical Bug in JavaScript

// The original implementation of typeof in JavaScript stored type-tagged format where the first 3 bits of the type tag represented the type of the value.
//Objects had a type-tag of 000
// The value null was internally represented as 0x00 (all zero bits), which was mistakenly categorized as an "object" due to type-tagging scheme.
// This bug was never fixed for backward compatibility reasons.
// null is a primitive, NOT an object

// Despite typeof null returning "object", null is not an object.
// It's a primitive value that represents the absence of any value.

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y ,typeof z,typeof p ,typeof q,typeof r);

//OBJECT-->Key value pair
let o = {
    "name": "Alapan",   //value can be primitive data, object or function
    "Job code": 5600,
    "is_reliable": true
}
console.log(o);
o.salary = "1000 cr"    //add data to object as salary is not in object
console.log(o);
o.salary = "5000 cr"    //update data to object as salary is already in object
console.log(o);