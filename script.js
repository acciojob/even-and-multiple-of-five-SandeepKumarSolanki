function checkNumber(num) {
  //your code here
	num = +num;
	if(num > 0){
		if(num%2 === 0 && num%5 === 0){
			return true;
		}
	}else{
		return false;
	}
	return false;
}

const num = parseInt(prompt("Enter a number."));
alert(checkNumber(num));
