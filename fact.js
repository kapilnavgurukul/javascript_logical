// if multiflication of the factors is equal that numebr its called factorial numeber


var a=require("readline-sync");
var b=a.question("give input")
// console.log(b)
// for (var i=1; i<=b; i++){
// 	var factor=1;
// 	for (var j=1; j<=i; j++){
// 		factor*=j
// 	console.log(factor)
// 	}if (factor==b){
// 		console.log("true")
// 		break
// 	}else if (factor>b){
// 		console.log("false")
// 		break
// 	} 
// }

for (var i=1; i<=b; i++){
	var factor=1;
	for (var j=1; j<=i; j++){
		factor*=j
	}if (factor==b){
		console.log("true")
		break
	}else if (factor>b){
		console.log("false")
		break
	}
}