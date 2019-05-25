function calculateTip(){

	//Declares
	var amount = document.getElementById("amount").value;
	var percent = document.getElementsByName("percent");
	var people = document.getElementById("people").value;
	//Loop for radio
	for (var i = 0; i < percent.length; i++){
		if(percent[i].checked){
			break;
		}
	}
	var percentTip = Number(percent[i].value)

	//Validate

	if (people === ""){
		people = 1;
	}

	//Logic
	var tip = ((amount * percentTip) / people).toFixed(2);

	

	document.getElementById("total").innerHTML = "$" + tip + " each";
	
}






//Calculate Button
document.getElementById("calculate").onclick = 
	function(){
		calculateTip();
		document.getElementById("total").style.display = "block";
	};
//Reset Button
function reset(){
document.getElementById("form").reset();
	document.getElementById("total").innerHTML = "0";
	document.getElementById("total").style.display = "none";
	}
