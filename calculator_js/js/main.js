function solution() {
	let a = Number(document.getElementById('firstNumber').value.replace(/,/,'.'));

	let b = Number(document.getElementById('secondNumber').value.replace(/,/,'.')); 

	let pr = Number(document.getElementById('percent').value.replace(/,/,'.')); 

	let result = (b * 100) / a;
	
	if (b == ''){
		result = (a * pr) / 100;
	}

	document.getElementById('result').innerHTML = result;
}


