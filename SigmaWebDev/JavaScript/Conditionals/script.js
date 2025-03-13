console.log("Conditional Tutorial")

let age = 0;
let grace = 2;
console.log(age ** grace);// exponential 5^2
//+ - * / %
//== != -= += === !== > < >= <= ?
if(age!=18){
    console.log("you can drive");
}
else if(age ==0){
    console.log("Hi");
}
else{
    console.log("you cant drive");
}

//node js -> repel (read evaluate print loop )
//open terminal--> node--> enter
//Then we can use it as a calculator--> in terminal write 1+2 --> enter--> ans 3
//"3"== 3 (true) because in js == compares values not types
//"3" === 3 (false) because in js === compares type also
//!== not equal value or not equal type

let a =50;
let b = 6;
c = a>b?(a+b):(a-b);       //ternary operator
console.log(c);

//https://chatgpt.com/share/67d2842c-4734-8002-aa6d-a8e2acd095bb