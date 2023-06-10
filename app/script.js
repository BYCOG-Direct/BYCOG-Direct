passive = true;

window.onmousemove = e => {
	if (passive === true) {
		// Get Mouse Y
		var posY = e.clientY;
	
		// Get Screen Height
		screenHeight = window.innerHeight;
	
		// Get Mouse position as a percentage of the Screen Height
		percentage = (posY/screenHeight) * 100;
	
		// Calulcate Box Height from said Percentage
		boxOneHeight = (0.004 * percentage * percentage) - (0.65 * percentage) + 50;
		boxTwoHeight = (-0.006 * percentage * percentage) + (0.6 * percentage) + 30;
		boxThreeHeight = (0.005 * percentage * percentage) - (0.15 * percentage) + 25;
	
		// Convert heights to strings and percentages for CSS
		boxOneHeight = boxOneHeight.toString() + "%";
		boxTwoHeight = boxTwoHeight.toString() + "%";
		boxThreeHeight = boxThreeHeight.toString() + "%";
	
		// Set Heights
		document.getElementById("box1").style.height = boxOneHeight;
		document.getElementById("box2").style.height = boxTwoHeight;
		document.getElementById("box3").style.height = boxThreeHeight;
	}
}

function linkAnimation(b) {
	passive = false;
	screenHeight = window.innerHeight;
	b = parseInt(b.slice(-1));
	
	a = remap.get(b-1);
	c = remap.get(b+1);
	b = remap.get(b);

	document.getElementById("box"+a).style.transition = "1s";
	document.getElementById("box"+b).style.transition = "1s";
	document.getElementById("box"+c).style.transition = "1s";

	document.getElementById("box"+a).style.height = "0%";
	document.getElementById("box"+b).style.height = screenHeight.toString() + "px";
	document.getElementById("box"+c).style.height = "0%";

	setTimeout(() => {
		document.getElementById("box"+a).style.transition = "0.3s";
		document.getElementById("box"+c).style.transition = "0.3s";
	
		document.getElementById("box"+a).style.opacity = "0";
		document.getElementById("box"+c).style.opacity = "0";
	}, 200)
	

	setTimeout(() => {
	  document.getElementById("box"+b).style.opacity = "0";
		document.getElementById("box"+b).style.scale = "1.1";
	}, 1000)

	setTimeout(() => {
		window.location.href = "https://bycog-direct.lobobo.repl.co/essentials";
	}, 3000)
}

const remap = new Map();
remap.set(0, "3"); 
remap.set(1, "1");
remap.set(2, "2"); 
remap.set(3, "3");
remap.set(4, "1");
