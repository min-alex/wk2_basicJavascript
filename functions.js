// Write 3 different functions that take input and return something 
// via the console or an alert.

function func1(in1) {
	console.log("Executing function 1")
	console.log("Input was: "+in1)
}

function func2(in2) {
	console.log("Executing function 2")
	for(var i=0; i < in2; i++) {
		console.log("Running forloop "+in2+" times. Now at iteration "+(i+1))
	}
}

function func3(in3) {
	console.log("Executing function 3")
	if (typeof(in3) == "string") {
		console.log("The input is a string")
	}
	else if(typeof(in3) == "number") {
		console.log("The input is a number")
	}
	else {
		alert("The input is neither a string or a number!")
	}
}

var obj = {
	prop1: "not a number",
	prop2: "not a string",
	prop3: "is an object"
}

func1(666)
func2(5)
func3(33)
func3("string example")
func3(obj)