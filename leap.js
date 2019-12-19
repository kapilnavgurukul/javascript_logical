var a=require("readline-sync")
user=a.question("give input")

if (user%4==0 || user%100==0){
	console.log("leap")
} else if(user) {

}
else{
	console.log("not leap")
}

