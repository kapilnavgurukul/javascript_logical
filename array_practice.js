var a=require("readline-sync")
user=a.question("give input")

if (user%4==0){
	if (user%100==0){
		if (user%400==0){
			console.log("leap")
		}else {
			console.log("not leap")
		}
	}else {
		console.log("leap")
	}
}else{
	console.log("not leap")
}