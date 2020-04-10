function calc() {
	var a = parseInt(document.querySelector("#value1").value);
	var b = parseInt(document.querySelector("#value2").value);
	var oper = document.querySelector("#operator").value;
	var calculate;



if (oper == "add") {
	calculate = a + b;
} else if (oper == "min") {
	calculate = a - b;
}  else if (oper == "div") {
	calculate = a / b;
}  else if (oper == "mul") {
	calculate = a * b;
} 

	document.querySelector("#result").innerHTML = calculate;
}