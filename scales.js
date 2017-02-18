const pitchA = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
var params = "";

function randomScale() {
	
	var paramString = params.replace(/\s/g, "");
	
	var modeExp = /M\((\w+)\)/;
	var modes = modeExp.exec(paramString);
	var modeStr = "";
	
	if (modes != null) {
		modeStr = modes[modes.length-1];
		paramString = paramString.replace(modeExp, "M");
	}
	
	var n = paramString.charAt(random(paramString.length));
	while (n == 'M')
		n = modeStr.charAt(random(modeStr.length));
	
	return scaleType(n);
}

function scaleType(n) {
	var toReturn = "undefined " + n;
	
	switch (n) {
	case 'I':
		toReturn = "major";
		break;
	case 'n':
		toReturn = "natural minor";
		break;
	case 'h':
		toReturn = "harmonic minor";
		break;
	case 'm':
		toReturn = "melodic minor";
		break;
		
	case '1':
		toReturn = "major 3rds";
		break;
	case '2':
		toReturn = "natural minor 3rds";
		break;
	case '3':
		toReturn = "harmonic minor 3rds";
		break;
	case '4':
		toReturn = "melodic minor 3rds";
		break;
	
	case 'W':
		toReturn = "whole-tone";
		break;
	case 'D':
		toReturn = "diminished";
		break;
	case 'A':
		toReturn = "augmented";
		break;
		
	case 'P':
		toReturn = "pentatonic";
		break;
	case 'B':
		toReturn = "blues";
		break;
	case 'R':
		toReturn = "Robbie pattern";
		break;
		
	case 'd':
		toReturn = "dorian";
		break;
	case 'p':
		toReturn = "phrygian";
		break;
	case 'l':
		toReturn = "lydian";
		break;
	case 'x':
		toReturn = "mixolydian";
		break;
	case 'a':
		toReturn = "aeolian";
		break;
	case 'o':
		toReturn = "locrian";
		break;
	}
	
	return toReturn;
}

function randomNote() {
	return pitchA[random(12)];
}

function random(max) {
	return Math.floor(Math.random() * max);
}

function nextScale() {
	if (params != "") {
		document.getElementById("note").innerHTML = randomNote();
		document.getElementById("scale").innerHTML = randomScale();
	} else {
		document.getElementById("note").innerHTML = "&nbsp;";
		document.getElementById("scale").innerHTML = "Select some scales.";
	}
}

function test() {
	console.log(randomNote() + " " + randomScale());
}

function updateParams() {
	var inputs = document.getElementsByName("scales"); 
	params = "";
	var modes = "";
	
	for (var i = 0; i < inputs.length; i++){
		if (inputs[i].checked) {
			var n = inputs[i].value;
			if (n.search(/[dplxao]/) > -1)
				modes += n;
			else
				params += inputs[i].value;
		}
	}
	
	if (modes.length > 0)
		params += "M(" + modes + ")";
	
	console.log(params);
}

function clearParams() {
	var inputs = document.getElementsByName("scales");
	for (var i = 0; i < inputs.length; i++)
		inputs[i].checked = false;
	
	params = "";
}

function setParams(newParams) {
	clearParams();
	
	newParams = newParams.replace(/\s/g, "");
	
	var inputs = document.getElementsByName("scales");
	
	for (var j = 0; j < newParams.length; j++) {		
		for (var i = 0; i < inputs.length; i++){
			if (inputs[i].value == newParams.charAt(j)) {
				inputs[i].checked = true;
				break;
			}
		}
	}
	
	updateParams();
}

function allParams() {
	var inputs = document.getElementsByName("scales");
	for (var i = 0; i < inputs.length; i++)
		inputs[i].checked = true;
	
	updateParams();
}


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "325px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

