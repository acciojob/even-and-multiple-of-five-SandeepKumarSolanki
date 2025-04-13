function checkNumber(num) {
  //your code here
	num = +num;
	if(num%2 === 0 && num%5 === 0){
			return true;
	}
	
	return false;
}

const num = parseInt(prompt("Enter a number."));
alert(checkNumber(num));
