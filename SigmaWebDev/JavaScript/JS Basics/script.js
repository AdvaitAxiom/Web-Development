alert("External js");

console.log("Hey I am console..")
console.log("Code is running..")
console.log("Hi..")

var a = prompt("Enter your number")

var isTrue = confirm("Are you sure to leave this page?")

if(isTrue){
    console.log("Left")
}else{
    console.log("not left")
}
console.log("Your number is "+a)

document.title = "New Name" //New title will be there instead of the frist one

document.body.style.backgroundColor = "yellow"  //This can add inline css 

// Here we can run this script in terminal as other codes but few of its elements are in browser so it will not run properly. Like alert prompt confirm
