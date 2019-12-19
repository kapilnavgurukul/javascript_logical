var input=require("readline-sync")
var a=input.question("give input")
var num=parseInt(a)

// // for many number
// for (var i=0; i<=num; i++) {
// 	flag=true
// 	for (a=2; a<i; a++){
// 		if (i%a==0){
// 			flag=false
// 			break
// 		}
// 	}if (flag){
// 		console.log(i)
// 	}
// }


// for a number
flag=true
for (var i=2; i<num; i++){
	if (num%i==0){
		flag=false
		break
	}
} 
if (flag){
	console.log("It is a prime number")
}else {
	console.log("It is not a prime number")
}