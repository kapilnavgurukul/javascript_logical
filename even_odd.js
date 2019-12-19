var input = require("readline-sync")
var a= input.question("give a input")
var number=parseInt(a)
if (number%2==0) {
	console.log("even number")
} else {
	console.log("odd number")
}