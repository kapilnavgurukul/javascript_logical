// sum of the both numbers  is 15 and sum of squrs is 113 find that numbers

var a=0,b=15;
while (a<=15){
	if (a**2 + b**2==113){
		console.log(a,b);
		break
	}else{
		a+=1;
		b-=1
	}
}
