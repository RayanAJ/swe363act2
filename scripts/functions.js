/**
 * 
 */


function clear()
{
	document.getElementById("calcForm").reset();
}

function validate()
{
	var x = document.forms[0];
	
	var i, result = 0;
	
	
	// field validator
	for(i = 0; i<x.length; i=i+2)
	{
		
		var v1 = x.elements[i].value
		var v2 = x.elements[i+1].value;	// v for valid

	    try { 
	        if((v1 == "") || (v2 == ""))  throw "Cannot accept empty field";
	        if( (isNaN(v1) ) || ( isNaN(v2) ) ) throw "input should be a number";
	        if((v1 < 0) || (v2 < 0))   throw "grades cannot be negative number";

	        
	    }
	    catch(err) {
	    	alert(err);
	    	return;
	    }

	}
	compute();
}

function compute()
{
	
	var x = document.forms[0];
	
	var i, result = 0;
	
	// result summation
	for(i = 0; i<x.length; i=i+2)
	{
		result = result + (x.elements[i].value / x.elements[i+1].value);
	}
	
	
	var totalHw = (x.length / 2);
	result = (result / totalHw) * 100.0;
	
	var checkbox = document.getElementById("checked").checked
	if(checkbox == true)
		result = Math.round(result) + 5;
	else
		result = Math.round(result);
	var newDiv = document.createElement('div');
	var newContent = document.createTextNode(result);
	newDiv.appendChild(newContent);
	if(result >= 60)
	{
		newDiv.className = "pass";
	}
	else
	{
		newDiv.className = "fail";
	}
	document.body.appendChild(newDiv);
}

