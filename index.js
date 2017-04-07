var som = [];
var num = '';
var result = '';
var count = 0;
function input(i){
	document.getElementById('som').value += i;
	if (i == 'c') {
		document.getElementById('som').value = '';
		document.getElementById('ans').value = '';
		som = [];
		num = '';
		count = 0;
	}else{
		num += i;
	}
}
function operator(p) {
	som.push(num);
	document.getElementById('som').value += p;
	count++;
	som.push(p);
	num = '';
	if (count == 2) {
		answer();
		som.splice(1, 1, p);
		document.getElementById('som').value  = document.getElementById('ans').value;
		document.getElementById('som').value += p;
	}
}
function answer(){
	som.push(num);
	num = '';
	var num1 = parseFloat(som[0]);
	var num2 = parseFloat(som[2]);
	if(som[1] == '+'){
		result = num1+num2;
	}else if(som[1] == '-'){
		result = num1-num2;
	}else if (som[1] == '/'){
		result = num1/num2;
	}else if (som[1] == '*') {
		result = num1*num2;
	}if(result == 0.30000000000000004){
		result = result.toFixed(1);
	}
	som = [];
	count = 1;
	document.getElementById('ans').value = result;
	som.push(document.getElementById('ans').value);
	document.getElementById('som').value = '';

}







