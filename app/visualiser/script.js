var a = 1

onwheel = (event) => {
	console.log(WheelEvent.deltaY)
}

function duplicate(n) {
	n = n.slice(-1);
	a = a + 1;
	clone = document.getElementById('container'+n).cloneNode(true);
	newContainer = 'container' + a.toString()
	clone.id = newContainer;
	document.getElementById("god").appendChild(clone);
	renameChild(document.getElementById(newContainer),a.toString())
	if (active.get(parseInt(n)) == "yes") {
		active.set(a, "yes"); 
	} else {
		active.set(a, "no");
	}
}

function empty(n) {
	n = n.slice(-1);
	a = a + 1;
	clone = document.getElementById('container'+n).cloneNode(true);
	newContainer = 'container' + a.toString()
	clone.id = newContainer;
	document.getElementById("god").appendChild(clone);
	renameChild(document.getElementById(newContainer),a.toString())
	clearWithoutRemove(a.toString())
	active.set(a, "no");
}

function renameChild(x,y) {
	var children = x.children;
	for (var i = 0; i < children.length; i++) {
	  var child = children[i];
		if (child.id != "") {
			child.id = child.id.substr(0,child.id.length-1);
			child.id = child.id + y;
		}
		renameChild(child,y)
	}
}

function renameChildInitial(x,y) {
	var children = x.children;
	for (var i = 0; i < children.length; i++) {
	  var child = children[i];
		if (child.id != "") {
			child.id = child.id + y;
		}
		renameChildInitial(child,y)
	}
}

renameChildInitial(container1,a.toString())


function check(x) {
	document.getElementById(x).checked = true;
}

function uncheck(x,n) {
	n = n.slice(-1).toString();
	document.getElementById(x+n).checked = false;
	total(n);
}

function funcheck(x) {
	document.getElementById(x).checked = false;
}

function isChecked(x) {
	return document.getElementById(x).checked;
}

function total(n) {
	drawType(n)
	updateTether(n)
	determineReflex(n)
}

const active = new Map();
active.set(1, "no"); 

function makeActive(n) {
	n = parseInt(n);
	active.set(n, "yes"); 
}

const toType = new Map();
toType.set(0, "others"); 
toType.set(1, "self");
toType.set(2, "news"); 
toType.set(3, "known"); 

const toAntiType = new Map();
toAntiType.set(0, "self"); 
toAntiType.set(1, "others");
toAntiType.set(2, "known"); 
toAntiType.set(3, "news"); 

const locations = new Map();
locations.set(0, "confer"); 
locations.set(1, "seek");
locations.set(2, "revise"); 
locations.set(3, "direct");

function drawType(n) {
	var osnk = [0,0,0,0];
	var colet = ["","","",""]
	eval = "";
	iden = "";
	active.set(parseInt(n), "no");
	document.getElementById("crossTethers"+n).style.opacity = "0";
	document.getElementById("othersMainLetter"+n).innerHTML = "D";
	document.getElementById("selfMainLetter"+n).innerHTML = "D";
	document.getElementById("newsMainLetter"+n).innerHTML = "O";
	document.getElementById("knownMainLetter"+n).innerHTML = "O";
	document.getElementById("othersLeftLetter"+n).innerHTML = "?";
	document.getElementById("selfLeftLetter"+n).innerHTML = "?";
	document.getElementById("knownLeftLetter"+n).innerHTML = "?";
	document.getElementById("newsLeftLetter"+n).innerHTML = "?";

	document.getElementById("othersArrow"+n).style.top = "-45px";
	document.getElementById("newsArrow"+n).style.left = "355px";
	document.getElementById("selfArrow"+n).style.top = "355px";
	document.getElementById("knownArrow"+n).style.left = "-45px";
	
	if (isChecked("reasonModule"+n)) {
		eval = "r";
		makeActive(n);
	} else if (isChecked("valueModule"+n)) {
		eval = "v";
		makeActive(n);
	}
	
	if (isChecked("concreteModule"+n)) {
		iden = "c";
		makeActive(n);
	} else if (isChecked("abstractModule"+n)) {
		iden = "a";
		makeActive(n);
	}

	if (isChecked("evaluatorModule"+n)) {
		osnk[0] += 3;
		osnk[1] += 3;
		document.getElementById("crossTethers"+n).style.opacity = "1";
		document.getElementById("crossTethers"+n).style.rotate = "90deg";
		makeActive(n);
	} else if (isChecked("identifierModule"+n)) {
		osnk[2] += 3;
		osnk[3] += 3;
		document.getElementById("crossTethers"+n).style.opacity = "1";
		document.getElementById("crossTethers"+n).style.rotate = "0deg";
		makeActive(n);
	}
	
	if (isChecked("othersModule"+n)) {
		osnk[0] += 1;
		osnk[1] -= 1;
		colet[0] = eval;
		makeActive(n);
	} else if (isChecked("selfModule"+n)) {
		osnk[1] += 1;
		osnk[0] -= 1;
		colet[1] = eval;
		makeActive(n);
	}

	if (isChecked("newsModule"+n)) {
		osnk[2] += 1;
		osnk[3] -= 1;
		colet[2] = iden;
		makeActive(n);
	} else if (isChecked("knownModule"+n)) {
		osnk[3] += 1;
		osnk[2] -= 1;
		colet[3] = iden;
		makeActive(n);
	}

	for (let i = 0; i < 4; i++) {
		switch (true) {
			case osnk[i] == 4 : // Major Hook
				document.getElementById(toType.get(i)+n).style.scale = "1.31481";
				document.getElementById(toType.get(i)+n).style.boxShadow = "0px 0px 0px 17.11274px #000000";
				arrowArt(toType.get(i),n)
				break;
			case osnk[i] == 3 : // Intermediate Maj Hook
				document.getElementById(toType.get(i)+n).style.scale = "1.185185185";
				document.getElementById(toType.get(i)+n).style.boxShadow = "0px 0px 0px 12.65625px #000000";
				break;
			case osnk[i] == 2 : // Major Void
				document.getElementById(toType.get(i)+n).style.scale = "0.62963";
				document.getElementById(toType.get(i)+n).style.boxShadow = "0px 0px 0px 23.8235px #000000";
				break;
			case osnk[i] == 1 : // Minor Hook
				document.getElementById(toType.get(i)+n).style.scale = "0.94444";
				document.getElementById(toType.get(i)+n).style.boxShadow = "0px 0px 0px 23.8235px #000000";
				document.getElementById(toType.get(i)+"LeftLetter"+n).style.scale = "1.058828";
				document.getElementById(toType.get(i)+"MainLetter"+n).style.scale = "1.058828";
				document.getElementById(toType.get(i)+"RightLetter"+n).style.scale = "1.058828";
				break;
			case osnk[i] <= 0 : // Minor Void
				document.getElementById(toType.get(i)+n).style.scale = "1";
				document.getElementById(toType.get(i)+n).style.boxShadow = "0px 0px 0px 15px #000000";
				document.getElementById(toType.get(i)+"LeftLetter"+n).style.scale = "1";
				document.getElementById(toType.get(i)+"MainLetter"+n).style.scale = "1";
				document.getElementById(toType.get(i)+"RightLetter"+n).style.scale = "1";
				break;
		}
	}
	
	for (let i = 0; i < 4; i++) {
		switch (colet[i]) {
			case "r" :
				document.getElementById(toType.get(i)+n).style.backgroundColor = "#7078bf";
				document.getElementById(toType.get(i) + "MainLetter"+n).innerHTML = "R";
				document.getElementById(toAntiType.get(i) + "MainLetter"+n).innerHTML = "V";
				break;
			case "v" :
				document.getElementById(toType.get(i)+n).style.backgroundColor = "#e07a5f";
				document.getElementById(toType.get(i) + "MainLetter"+n).innerHTML = "V";
				document.getElementById(toAntiType.get(i) + "MainLetter"+n).innerHTML = "R";
				break;
			case "c" :
				document.getElementById(toType.get(i)+n).style.backgroundColor = "#81b29a";
				document.getElementById(toType.get(i) + "MainLetter"+n).innerHTML = "C";
				document.getElementById(toAntiType.get(i) + "MainLetter"+n).innerHTML = "A";
				break;
			case "a" :
				document.getElementById(toType.get(i)+n).style.backgroundColor = "#f2cc8f";
				document.getElementById(toType.get(i) + "MainLetter"+n).innerHTML = "A";
				document.getElementById(toAntiType.get(i) + "MainLetter"+n).innerHTML = "C";
				break;
			default :
				document.getElementById(toType.get(i)+n).style.backgroundColor = "#D0D0D0";
				break;
		}
	}

	if (isChecked("solidOthersModule"+n)) {
		document.getElementById("othersLeftLetter"+n).innerHTML = "S";
		document.getElementById("selfLeftLetter"+n).innerHTML = "F";
		makeActive(n);
	} else if (isChecked("solidSelfModule"+n)) {
		document.getElementById("othersLeftLetter"+n).innerHTML = "F";
		document.getElementById("selfLeftLetter"+n).innerHTML = "S";
		makeActive(n);
	}
	
	if (isChecked("solidNewsModule"+n)) {
		document.getElementById("newsLeftLetter"+n).innerHTML = "S";
		document.getElementById("knownLeftLetter"+n).innerHTML = "F";
		makeActive(n);
	} else if (isChecked("solidKnownModule"+n)) {
		document.getElementById("knownLeftLetter"+n).innerHTML = "S";
		document.getElementById("newsLeftLetter"+n).innerHTML = "F";
		makeActive(n);
	}
}

function updateTether(n) {
	document.getElementById("savageTethers"+n).style.opacity = "0";
	document.getElementById("savageTethers"+n).style.transition = "0.3s";

	if (document.getElementById("solidOthersModule"+n).checked == true && document.getElementById("solidNewsModule"+n).checked == true) {
		document.getElementById("savageTethers"+n).style.rotate = "90deg";
		document.getElementById("savageTethers"+n).style.opacity = "1";
	}
	if (document.getElementById("solidNewsModule"+n).checked == true && document.getElementById("solidSelfModule"+n).checked == true) {
		document.getElementById("savageTethers"+n).style.rotate = "180deg";
		document.getElementById("savageTethers"+n).style.opacity = "1";
	} 
	if (document.getElementById("solidSelfModule"+n).checked == true && document.getElementById("solidKnownModule"+n).checked == true) {
		if (document.getElementById("savageTethers"+n).style.rotate == "0deg") {
			document.getElementById("savageTethers"+n).style.rotate = "-90deg";
			setTimeout( function() { 
				document.getElementById("savageTethers"+n).style.transition = "0s"; 
				document.getElementById("savageTethers"+n).style.rotate = "270deg"; 
			}, 301);
		} else {
			document.getElementById("savageTethers"+n).style.rotate = "270deg";
		}
		document.getElementById("savageTethers"+n).style.opacity = "1";
	}
	if (document.getElementById("solidKnownModule"+n).checked == true && document.getElementById("solidOthersModule"+n).checked == true) {
		if (document.getElementById("savageTethers"+n).style.rotate == "270deg") {
			document.getElementById("savageTethers"+n).style.rotate = "360deg";
			setTimeout( function() { 
				document.getElementById("savageTethers"+n).style.transition = "0s"; 
				document.getElementById("savageTethers"+n).style.rotate = "0deg"; 
			}, 301);
		} else {
			document.getElementById("savageTethers"+n).style.rotate = "0deg";
		}
		document.getElementById("savageTethers"+n).style.opacity = "1";
	}
}

function determineReflex(n) {
	csrd = [0,0,0,0]
	
	if (document.getElementById("othersModule"+n).checked == true && document.getElementById("newsModule"+n).checked == true) {
		csrd[0] += 4; // Confer
	} else if (document.getElementById("newsModule"+n).checked == true && document.getElementById("selfModule"+n).checked == true) {
		csrd[1] += 4; // Seek
	} else if (document.getElementById("selfModule"+n).checked == true && document.getElementById("knownModule"+n).checked == true) {
		csrd[2] += 4; // Revise
	} else if (document.getElementById("knownModule"+n).checked == true && document.getElementById("othersModule"+n).checked == true) {
		csrd[3] += 4; // Direct
	}

	if (document.getElementById("developerModule"+n).checked == true) {
		csrd[2] += 1; // Revise
		csrd[0] += 1; // Confer
	} else if (document.getElementById("navigatorModule"+n).checked == true) {
		csrd[1] += 1; // Seek
		csrd[3] += 1; // Direct
	}

	if (document.getElementById("extremeModule"+n).checked == true) {
		if (document.getElementById("selfModule"+n).checked == true) {
			csrd[2] += 2; // Revise
			csrd[1] += 2; // Seek
		} else if (document.getElementById("othersModule"+n).checked == true) {
			csrd[0] += 2; // Confer
			csrd[3] += 2; // Direct
		}
	} else if (document.getElementById("intermediateModule"+n).checked == true) {
		if (document.getElementById("knownModule"+n).checked == true) {
			csrd[2] += 2; // Revise
			csrd[3] += 2; // Direct
		} else if (document.getElementById("newsModule"+n).checked == true) {
			csrd[0] += 2; // Confer
			csrd[1] += 2; // Seek
		}
	}

	drawReflex(n);
}

const transfer = new Map();
transfer.set(0, 0);
transfer.set(1, 1);
transfer.set(2, 2);
transfer.set(3, 2);
transfer.set(4, 3);
transfer.set(5, 3);
transfer.set(6, 3);
transfer.set(7, 3);

function drawReflex(n) {
	type2 = ["","",""];
	mirror = [...csrd];
	for (let i = 0; i < 4; i++) {
  	mirror[i] = transfer.get(mirror[i]);
	} // Simplify set

	for (let i = 0; i < 4; i++) {
		if (mirror[i] == 0) {
			document.getElementById(locations.get(i)+n).style.boxShadow = "0px 0px 0px 15px #fff";
		}
		if (mirror[i] == 1) {
			document.getElementById(locations.get(i)+n).style.boxShadow = "0px 0px 0px 22.5px #fff, 0px 0px 0px 37.5px #000";
			type2[2] = locations.get(i)[0];
		}
		if (mirror[i] == 2) {
			document.getElementById(locations.get(i)+n).style.boxShadow = "0px 0px 0px 15px #fff, 0px 0px 0px 45px #000";
			type2[1] = locations.get(i)[0];
		}
		if (mirror[i] == 3) {
			document.getElementById(locations.get(i)+n).style.boxShadow = "0px 0px 0px 7.5px #fff, 0px 0px 0px 52.5px #000";
			type2[0] = locations.get(i)[0];
		}
	} // Draw reflex single lines

	
	
	for (let i = 0; i < 4; i++) {
		if (mirror[mod((i-1),4)] != 0 && mirror[(i+1)%4] != 0 && mirror[i] != 0) {
			document.getElementById(locations.get(i)+n).style.boxShadow = "0px 0px 0px 7.5px #fff, 0px 0px 0px 22.5px #000, 0px 0px 0px 37.5px #fff, 0px 0px 0px 52.5px #000";
			if (mirror[i] == 3) {
				document.getElementById(locations.get(i)+n).style.boxShadow = "0px 0px 0px 20px #000, 0px 0px 0px 40px #fff, 0px 0px 0px 60px #000";
			}
		}
	} // Draw reflex double lines
}

function arrowArt(majorHook,n) {
	p = document.getElementById(majorHook + "Arrow"+n);
	
	switch (majorHook) {
		case "others" :
			p.style.top = "-175px";
			break;
		case "news" :
			p.style.left = "485px";
			break;
		case "self" :
			p.style.top = "485px";
			break;
		case "known" :
			p.style.left = "-175px";
			break;
	}
}

function textRead(n) {
	n = n.slice(-1).toString();
	bycode = document.getElementById("textType1"+n).value;
	bycodeP2 = document.getElementById("textType2"+n).value;

	// Evaluator or Identifier
	if (bycode[0] == "V" || bycode[0] == "R") {
		funcheck("identifierModule"+n);
		check("evaluatorModule"+n);
	} else if (bycode[0] == "A" || bycode[0] == "C") {
		check("identifierModule"+n);
		funcheck("evaluatorModule"+n);
	} else {
		funcheck("identifierModule"+n);
		funcheck("evaluatorModule"+n);
	}

	// Reason or Value
	if (bycode[0] == "V" || bycode[1] == "v") {
		funcheck("reasonModule"+n);
		check("valueModule"+n);
	} else if (bycode[0] == "R" || bycode[1] == "r") {
		check("reasonModule"+n);
		funcheck("valueModule"+n);
	} else {
		funcheck("reasonModule"+n);
		funcheck("valueModule"+n);
	}

	// Concrete or Abstract
	if (bycode[0] == "C" || bycode[1] == "c") {
		check("concreteModule"+n);
		funcheck("abstractModule"+n);
	} else if (bycode[0] == "A" || bycode[1] == "a") {
		funcheck("concreteModule"+n);
		check("abstractModule"+n);
	} else {
		funcheck("concreteModule"+n);
		funcheck("abstractModule"+n);
	}

	// Reflex
	if (bycodeP2[0] == "d" || bycodeP2[0] == "D") { // Direct
		check("knownModule"+n);
		funcheck("newsModule"+n);

		check("othersModule"+n);
		funcheck("selfModule"+n);
	} else if (bycodeP2[0] == "c" || bycodeP2[0] == "C") { // Confer
		check("newsModule"+n);
		funcheck("knownModule"+n);

		check("othersModule"+n);
		funcheck("selfModule"+n);
	} else if (bycodeP2[0] == "s" || bycodeP2[0] == "S") { // Seek
		check("newsModule"+n);
		funcheck("knownModule"+n);

		check("selfModule"+n);
		funcheck("othersModule"+n);
	} else if (bycodeP2[0] == "r" || bycodeP2[0] == "R") { // Revise

		check("knownModule"+n);
		funcheck("newsModule"+n);

		check("selfModule"+n);
		funcheck("othersModule"+n);
	} else {
		funcheck("knownModule"+n);
		funcheck("newsModule"+n);
		funcheck("selfModule"+n);
		funcheck("othersModule"+n);
	}

	// Extreme or Intermediate
	scCombo = ["s","S","c","C"];
	rdCombo = ["r","R","d","D"];
	cdCombo = ["c","C","d","D"];
	srCombo = ["s","S","r","R"];
	if (scCombo.includes(bycodeP2[0]) && scCombo.includes(bycodeP2[1])) {
		check("intermediateModule"+n);
		funcheck("extremeModule"+n);
	} else if (rdCombo.includes(bycodeP2[0]) && rdCombo.includes(bycodeP2[1])) {
		check("intermediateModule"+n);
		funcheck("extremeModule"+n);
	} else if (cdCombo.includes(bycodeP2[0]) && cdCombo.includes(bycodeP2[1])) {
		funcheck("intermediateModule"+n);
		check("extremeModule"+n);
	} else if (srCombo.includes(bycodeP2[0]) && srCombo.includes(bycodeP2[1])) {
		funcheck("intermediateModule"+n);
		check("extremeModule"+n);
	} else {
		funcheck("intermediateModule"+n);
		funcheck("extremeModule"+n);
	}

	// Developer or Navigator
	devOrNav = bycodeP2.split("");
	rTrue = devOrNav.includes("r") || devOrNav.includes("R")
	cTrue = devOrNav.includes("c") || devOrNav.includes("C")
	sTrue = devOrNav.includes("s") || devOrNav.includes("S")
	dTrue = devOrNav.includes("d") || devOrNav.includes("D")
	if (rTrue && cTrue) {
		check("developerModule"+n);
		funcheck("navigatorModule"+n);
	} else if (sTrue && dTrue) {
		funcheck("developerModule"+n);
		check("navigatorModule"+n);
	} else {
		funcheck("developerModule"+n);
		funcheck("navigatorModule"+n);
	}

	// Solids
	const capital = (str) => str.split('').filter(a => a.match(/[A-Z]/)).join('')
	len = devOrNav.length
	result = "";

	if (capital(bycodeP2) == "" && len == 3) {
		pool = ["D","C","S","R"];
		remove = bycodeP2.toUpperCase().split("");
		const filtered = pool.filter(letter => !remove.includes(letter));
		result = filtered[0]
	}

	if (capital(bycodeP2) == "D" || result == "D") {
		check("solidOthersModule"+n);
		funcheck("solidSelfModule"+n);
		check("solidKnownModule"+n);
		funcheck("solidNewsModule"+n);
	} else if (capital(bycodeP2) == "C" || result == "C") {
		check("solidOthersModule"+n);
		funcheck("solidSelfModule"+n);
		check("solidNewsModule"+n);
		funcheck("solidKnownModule"+n);
	} else if (capital(bycodeP2) == "S" || result == "S") {
		check("solidSelfModule"+n);
		funcheck("solidOthersModule"+n);
		check("solidNewsModule"+n);
		funcheck("solidKnownModule"+n);
	} else if (capital(bycodeP2) == "R" || result == "R") {
		check("solidSelfModule"+n);
		funcheck("solidOthersModule"+n);
		check("solidKnownModule"+n);
		funcheck("solidNewsModule"+n);
	}
	
	if (bycodeP2 == "") {
		funcheck("solidSelfModule"+n);
		funcheck("solidOthersModule"+n);
		funcheck("solidKnownModule"+n);
		funcheck("solidNewsModule"+n);
	}

	total(n);
}

function textWrite(n) {
	n = n.slice(-1).toString();
	RorV = "";
	CorA = "";
	type1 = "";
	capitalLetter = "";

	// Reason or Value
	if (document.getElementById("reasonModule"+n).checked == true) {
		RorV = "r";
	} else if (document.getElementById("valueModule"+n).checked == true) {
		RorV = "v";
	} else {
		RorV = "";
	}

	// Concrete or Abstract
	if (document.getElementById("concreteModule"+n).checked == true) {
		CorA = "c";
	} else if (document.getElementById("abstractModule"+n).checked == true) {
		CorA = "a";
	} else {
		CorA = "";
	}

	// Evaluator or Identifier
	if (document.getElementById("evaluatorModule"+n).checked == true) {
		type1 = RorV.toUpperCase() + CorA
	} else if (document.getElementById("identifierModule"+n).checked == true) {
		type1 = CorA.toUpperCase() + RorV
	} else {
		type1 = "";
	}

	if (isChecked("solidOthersModule"+n) && isChecked("solidKnownModule"+n)) {
		capitalLetter = "d";
	}
	if (isChecked("solidOthersModule"+n) && isChecked("solidNewsModule"+n)) {
		capitalLetter = "c";
	}
	if (isChecked("solidSelfModule"+n) && isChecked("solidKnownModule"+n)) {
		capitalLetter = "r";
	}
	if (isChecked("solidSelfModule"+n) && isChecked("solidNewsModule"+n)) {
		capitalLetter = "s";
	}
	
	document.getElementById("textType1"+n).value = type1;

	for (let i = 0; i < 3; i++) {
			if (type2[i] == capitalLetter) {
				type2[i] = type2[i].toUpperCase()
			}
	}
	
	try {
		type2 = type2.join("");
		document.getElementById("textType2"+n).value = type2;
	} catch {
		document.getElementById("textType2"+n).value = "";
	}

	convertToOps(n);
}

function clearAll(n) {
	n = n.slice(-1).toString();
	if (document.getElementById("textType1"+n).value == "" && document.getElementById("textType2"+n).value == "" && n != "1" && active.get(parseInt(n)) == "no") {
		document.getElementById("container"+n).remove();
		active.delete(parseInt(n));
	} else {
		clearWithoutRemove(n);
	}
}

function clearWithoutRemove(n) {
	document.getElementById("textType1"+n).value = "";
	document.getElementById("textType2"+n).value = "";
	active.set(parseInt(n), "no");
	textRead(n);
	convertToOps(n);
}

const convert = new Map();
convert.set("s", "C");
convert.set("S", "C");
convert.set("d", "B");
convert.set("D", "B");
convert.set("r", "S");
convert.set("R", "S");
convert.set("c", "P");
convert.set("C", "P");
convert.set(undefined, "X");

const revert = new Map();
revert.set("B", "d");
revert.set("P", "c");
revert.set("C", "s");
revert.set("S", "r");
revert.set(undefined, "");
revert.set(NaN, "");
revert.set("X", "");

function convertToOps(n) {
	n = n.slice(-1).toString();
	
	// Resets
	opsType = ["X","X"," ","X","x","/","X","x"," ","X","X","/","X","(","X",")"]
	bycode = document.getElementById("textType1"+n).value;
	bycodeP2 = document.getElementById("textType2"+n).value;
	indexOfEv = null;
	indexOfId = null;
	solidDirect = false;
	solidConfer = false;
	solidSeek = false;
	solidRevise = false;

	// Converts First Two Letters
	switch (bycode[0]) {
		case "R" :
			opsType[3] = "T";
			indexOfEv = 4;
			indexOfId = 7;
			break;
		case "V" :
			opsType[3] = "F";
			indexOfEv = 4;
			indexOfId = 7;
			break;
		case "C" :
			opsType[3] = "S";
			indexOfId = 4;
			indexOfEv = 7;
			break;
		case "A" :
			opsType[3] = "N";
			indexOfId = 4;
			indexOfEv = 7;
			break;
	}

	switch (bycode[1]) {
		case "r" :
			opsType[6] = "T";
			indexOfEv = 7;
			indexOfId = 4;
			break;
		case "v" :
			opsType[6] = "F";
			indexOfEv = 7;
			indexOfId = 4;
			break;
		case "c" :
			opsType[6] = "S";
			indexOfId = 7;
			indexOfEv = 4;
			break;
		case "a" :
			opsType[6] = "N";
			indexOfId = 7;
			indexOfEv = 4;
			break;
	}

	// Converts Reflexes to Animals
	opsType[9] = convert.get(bycodeP2[0])
	opsType[10] = convert.get(bycodeP2[1])
	opsType[12] = convert.get(bycodeP2[2])

	len = bycodeP2.length
	result = "";
	resultIfEmpty = "";
	const capital = (str) => str.split('').filter(a => a.match(/[A-Z]/)).join('');

	// Determines which function is extraverted/introverted
	switch (opsType[9]) {
		case "S" :
			opsType[indexOfId] = "i";
			opsType[indexOfEv] = "i";
			break;
		case "P" :
			opsType[indexOfId] = "e";
			opsType[indexOfEv] = "e";
			break;
		case "C" :
			opsType[indexOfId] = "e";
			opsType[indexOfEv] = "i";
			break;
		case "B" :
			opsType[indexOfId] = "i";
			opsType[indexOfEv] = "e";
			break;
	}

	if (len == 3) {
		pool = ["D","C","S","R"];
		remove = bycodeP2.toUpperCase().split("");
		const filtered = pool.filter(letter => !remove.includes(letter));
		result = filtered[0]
		opsType[14] = convert.get(result.toLowerCase())

		if (capital(bycodeP2) == "") {
			resultIfEmpty = filtered[0] // If there are no capital letters, then the missing reflex must be capital
		}
	}

	// Determines Second Sexuality
	if (capital(bycodeP2) == "D" || resultIfEmpty == "D") {
		opsType[1] = "M";
		solidDirect = true;
	} else if (capital(bycodeP2) == "C" || resultIfEmpty == "C") {
		opsType[1] = "M";
		solidConfer = true;
	} else if (capital(bycodeP2) == "S" || resultIfEmpty == "S") {
		opsType[1] = "F";
		solidSeek = true;
	} else if (capital(bycodeP2) == "R" || resultIfEmpty == "R") {
		opsType[1] = "F";
		solidRevise = true;
	}

	// Determines First Sexuality
	if (opsType.join("").includes("Ne") && (solidRevise === true || solidDirect === true)) {
		opsType[0] = "M";
	}
	if (opsType.join("").includes("Ni") && (solidSeek === true || solidConfer === true)) {
		opsType[0] = "M";
	}
	if (opsType.join("").includes("Se") && (solidSeek === true || solidConfer === true)) {
		opsType[0] = "M";
	}
	if (opsType.join("").includes("Si") && (solidRevise === true || solidDirect === true)) {
		opsType[0] = "M";
	}

	if (opsType.join("").includes("Ne") && (solidSeek === true || solidConfer === true)) {
		opsType[0] = "F";
	}
	if (opsType.join("").includes("Ni") && (solidRevise === true || solidDirect === true)) {
		opsType[0] = "F";
	}
	if (opsType.join("").includes("Se") && (solidRevise === true || solidDirect === true)) {
		opsType[0] = "F";
	}
	if (opsType.join("").includes("Si") && (solidSeek === true || solidConfer === true)) {
		opsType[0] = "F";
	}

	
	document.getElementById("opsText"+n).value = opsType.join("");
	if (opsType.join("") == "XX Xx/Xx XX/X(X)") {
		document.getElementById("opsText"+n).value = "";
	}
}

function convertFromOps(n) {
	n = n.slice(-1).toString();
	opsType = document.getElementById("opsText"+n).value;
	opsType = opsType.split("");
	primary = "";
	secondary = "";
	letterOne = "";
	letterTwo = "";
	letterThree = "";
	letterFour = "";
	sway = "";
	solidDirect = 0;
	solidConfer = 0;
	solidSeek = 0;
	solidRevise = 0;

	// T or F Primary
	switch (opsType[3]) {
		case "T":
			primary = "R";
			sway = "eval";
			break;
		case "F":
			primary = "V";
			sway = "eval";
			break;
	}

	// S or N Primary
	switch (opsType[3]) {
		case "S":
			primary = "C";
			sway = "iden";
			break;
		case "N":
			primary = "A";
			sway = "iden";
			break;
	}

	// T or F Secondary
	switch (opsType[6]) {
		case "T":
			secondary = "r";
			break;
		case "F":
			secondary = "v";
			break;
	}

	// S or N Secondary
	switch (opsType[6]) {
		case "S":
			secondary = "c";
			break;
		case "N":
			secondary = "a";
			break;
	}

	letterOne = revert.get(opsType[9])
	letterTwo = revert.get(opsType[10])
	letterThree = revert.get(opsType[12])
	letterFour = revert.get(opsType[14])

	if (opsType[4] == "i" && opsType[7] == "i") {
		letterOne = "r";
	}
	if (opsType[4] == "e" && opsType[7] == "e") {
		letterOne = "c";
	}
	if (opsType[4] == "i" && opsType[7] == "e" && sway == "eval") {
		letterOne = "s";
	}
	if (opsType[4] == "i" && opsType[7] == "e" && sway == "iden") {
		letterOne = "d";
	}
	if (opsType[4] == "e" && opsType[7] == "i" && sway == "eval") {
		letterOne = "d";
	}
	if (opsType[4] == "e" && opsType[7] == "i" && sway == "iden") {
		letterOne = "s";
	}

	if (opsType[0] == "M" && opsType.join("").includes("Ne")) {
		solidRevise += 1;
		solidDirect += 1;
	}
	if (opsType[0] == "M" && opsType.join("").includes("Ni")) {
		solidSeek += 1;
		solidConfer += 1;
	}
	if (opsType[0] == "M" && opsType.join("").includes("Se")) {
		solidSeek += 1;
		solidConfer += 1;
	}
	if (opsType[0] == "M" && opsType.join("").includes("Si")) {
		solidRevise += 1; 
		solidDirect += 1;
	}

	if (opsType[0] == "F" && opsType.join("").includes("Ne")) {
		solidSeek += 1;
		solidConfer += 1;
	}
	if (opsType[0] == "F" && opsType.join("").includes("Ni")) {
		solidRevise += 1;
		solidDirect += 1;
	}
	if (opsType[0] == "F" && opsType.join("").includes("Se")) {
		solidRevise += 1;
		solidDirect += 1;
	}
	if (opsType[0] == "F" && opsType.join("").includes("Si")) {
		solidSeek += 1;
		solidConfer += 1;
	}

	switch (opsType[1]) {
		case "M" :
			solidDirect += 1;
			solidConfer += 1;
			break;
		case "F" :
			solidSeek += 1;
			solidRevise += 1;
			break;
	}

	letters = [letterOne, letterTwo, letterThree]
	for (let i = 0; i < 3; i++) {
  	if (letters[i] == "d" && solidDirect == 2) {
			letters[i] = letters[i].toUpperCase()
		}
		if (letters[i] == "c" && solidConfer == 2) {
			letters[i] = letters[i].toUpperCase()
		}
		if (letters[i] == "s" && solidSeek == 2) {
			letters[i] = letters[i].toUpperCase()
		}
		if (letters[i] == "r" && solidRevise == 2) {
			letters[i] = letters[i].toUpperCase()
		}
	}

	type1 = primary + secondary;
	type2 = letters[0] + letters[1] + letters[2];
	document.getElementById("textType1"+n).value = type1;
	document.getElementById("textType2"+n).value = type2;
	textRead(n);
}

function copy(n) {
	n = n.slice(-1).toString();
  copyText1 = document.getElementById("textType1"+n).value;
	copyText2 = document.getElementById("textType2"+n).value;
	copyText = copyText1 + ":" + copyText2;
  navigator.clipboard.writeText(copyText);
}

var mod = function (n, m) {
    var remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
};