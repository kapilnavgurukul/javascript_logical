var a=require("readline-sync")
var user=a.question("give a input")

var list=[]
while (true){
	var a=0
	sum=0
	console.log(user)
	while (a<user.length){
		var b=user[a]**2
		sum+=b
		a++
	}if (sum==1){
		console.log("this is a happy number")
		break
	}if (list.includes(sum)){
		console.log("it is not a happy number")
		break
	}
	list.push(sum)
	var user=String(sum);
}

// while (user<11){
// 	list.push(user)
// 	user++
// }console.log(list)