function nice(name){
    console.log("Hello "+name+ " nice to meet you");
    console.log("Hello "+name+ " how are you doing?");
    console.log("Hello "+name+ " what are you doing?");
}

function add(a,b){
    return a+b;
}

console.log(nice("Alapan"));    //This will return undefined because the function is not returning anything
console.log();
console.log(add(5,6));
console.log();
nice("Alapan"); //This will not return undefined because the function is not returning anything
console.log();

//NaN = Not a Number

//ARROW FUNCTION
const func1 = (x)=>{
    console.log("I am arrow function: "+x); //We can also use + instead of ,
}
func1(45);
func1(67);
func1(89);


