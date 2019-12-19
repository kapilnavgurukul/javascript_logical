var input=require("readline-sync")
var user = input.question("enter year: ")
var year=parseInt(user)
if (year%4==0) {
	if (year%100==0){
		if (year%400==0){
			console.log("this is a leap year")
		} else {
			console.log("this is not leap year")}
	} else {
		console.log("this is a leap year")}
} else {
	console.log("this is not leap yaer")
}


