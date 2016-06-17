// Create a script with two variables assigned to two numbers. Add them together 
// and output the result to the console. Now do the same with two strings.

// Create a multidimensional array related to a subject that interests you. 
// Output two of the items in sub-arrays to the console.

// Write a script that checks if a variable is less than 10. If it is, alert the user that 
// their variable is less than 10. If it is not, using the console, let the user know that what the variable was and that it was greater than 10.

// Try running the script and then changing the variable's value to see how this affects 
// the program's output.

// Write a similar program to check if a string stored in a variable is the same as another string.

// Declare a function that takes a name as an argument and tells the user what name they've entered. 
// Try running it after it has been declared.

// Declare a function that takes no arguments but prints something to the console. Try running it 
// after it has been declared.

//Script 1
console.log("script1")
var s1a = 20
var s1b = 40
var s1c = s1a+s1b
console.log("output for script1 is: "+s1c)

//Script2
console.log("script2")
var mdarray = [["Golden Retrievers", "Beagles", "German Shephards"],["Bryson Tiller", "Tory Lanez", "Drake"]]

console.log("I like "+mdarray[0][0]+" and I'm sure "+mdarray[1][2]+" does too.")

//Script3
console.log("script3")
var s3 = 11
if (s3 < 10) {
	alert("The variable is less than 10")
}
else {
	alert("The variable is equal to "+s3+" and it is greater than 10")
}

//Script4
function func(name) {
	console.log("The name inputted into function is: "+name)
}
func("Alex")