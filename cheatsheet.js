/*
Create a "cheat sheet" JavaScript file that contains working examples with comments of:

Variables

Different data types

Arrays

Logic

Functions

Debugging (alerts, comments, the console)

Testing
*/

//Variables + Data Types
//You can have strings, numbers, arrays, and objects
//Let's declare a couple of different variables below.
//We will use them in our demo-functions later.

var str1 = "this is a string"
var str2 = "this is a different string"

var num1 = 10
var num2 = 22

//Arrays can store various data types (numbers, strings, arrays)
var arr1 = [1,2,3,4,5]
var arr2 = ["one", "two", "three", "four", "five"]

//Objects can be used to store a collection of properties
var me = {
	fname: "Alex",
	lname: "Min",
	birthday: "July 25, 1995",
	school: "Swarthmore College",
	major: "Economics/Computer Science Double"
}

console.log(me) //displays 'me' object in console


//We can also use Javascript's logic operators
//Below is an example using string comparisons
if (str1==str2) {
	console.log("variables str1 and str2 are equal")
}
else if (str1 != str2) {
	console.log(str1+" and "+str2+" are equal strings")
}

//They also work with numbers
if (num1 > num2) {
	console.log(num1+" is greater than "+num2)
}
else if (num1 < num2) {
	console.log(num1+" is less than "+num2)
}
else {
	console.log(num1+ " and "+num2+" are equal")
}

//Functions take in inputs and perform calculations as instructed
//The function below will demonstrate for-loops and while-loops
function loop_demo(loopNum) {
	console.log("starting for-loop demo")
	for(var i=0; i < loopNum; i++) {
		console.log("for-loop iteration: "+i+". Trying to get to "+(loopNum-1))
	}
	console.log("for-loop done.")

	var i=0 //reset i counter
	console.log("starting while-loop demo")
	while (i != (loopNum)) {
		console.log("i is: "+i+". Will run until i != (loopNum) is false")
		i++
	}
	console.log("while-loop done")
}
//This is how you involve a function in Javascript.
loop_demo(num1)


//Debugging makes sure that the code is executable and runs as expected.
//It is makes up the first part of the testing process.
//In the function above, the console.log() statements inside the for-loop and
//while loop is a method of debugging/testing.  It helps us see what happens
//at each iteration of the loops so that we know exactly what calculations
//are being performed.

alert("THIS IS A TEST OF alert()")

