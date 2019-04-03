window.onload= function() {
	initColorPicker();
};

function initColorPicker(){
	let colorBox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}
function setColorPickerEventListeners(element, colors, pickerElement) {
let pickerLen = pickerElement.length;
for (let i = 0; i < pickerLen; i ++) {
	pickerElement[i].addEventListener('change', () => {
		let red = colors.red.value;
		let green = colors.green.value;
		let blue = colors.blue.value;
		setelmentBGColor(element, red, green, blue);
		setDisplayValues(red, green, blue)
	});
}

function  setelmentBGColor(BGElement, red, green, blue) {
	let rgbVal = [red, green, blue].join(',');
	BGElementElement.style.backgroundColor = "rgb(" + rgbVal + ")";}

function setDisplayValues(red, green, blue) {
let redVal = document.getElementById("redVal");
let greenVal = document.getElementById("greenVal");
let blueVal = document.getElementById("blueVal");

redVal.innerText = red;
greenVal.innerText = green;
blueVal.innerText = blue;
}}

