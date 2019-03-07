const screen = $('#screen');
const enterButton = $('#enter');
const clearButton = $('#clear');
const validOps = ['+', '-', '*', '/'];
let curr = "";
let value = "";
let result = 0;
//enter button function
const confirm = () => {
	console.log(value);
	result = eval(value);
	screen.text(result);
	curr = '';
}
//clear button function
const clear = () => {
	result = 0;
	value = "";
	screen.text("");
}
//number button function
function numPress(){
	let currNumber = $(this).text();
	curr+=currNumber;
	value += currNumber;
	screen.text(curr);
	console.log(value);
}
//number key function
function keyPress(key){
	let currNumber = key;
	curr+=currNumber;
	value += currNumber;
	screen.text(curr);
}
//operator button function
function operatorClick(){
	if(!validOps.includes(value.substr(value.length-1))){
		let currOperator = $(this).text();
		value += currOperator;
		screen.text(currOperator);
		curr = '';
	}
}
//operator key press function
const operatorKeyPress = (key) => {
	if(!validOps.includes(value.substr(value.length-1))){
		let currOperator = key;
		value+=currOperator;
		screen.text(currOperator);
		curr = '';
	}
}
//delete key press function
const deleteKeyPress = () => {
	value=value.slice(0,-1);
	curr=curr.slice(0,-1);
	screen.text(curr);
}
//operator click handler
$('.operator').click(operatorClick);
//number click handler
$('.number').click(numPress);
//number key press handler
$(document).keydown(function(e){
	const validKeys = ['1','2','3','4','5','6','7','8','9','0'];
	const enterKey = 'Enter';
	const deleteKey = 'Backspace';
	let keyVal = e.key;
	console.log(keyVal);
	if(validKeys.includes(keyVal)){
		keyPress(keyVal);
	}
	else if(validOps.includes(keyVal)){
		operatorKeyPress(keyVal);
	}
	else if(keyVal == enterKey){
		confirm();
	}
	else if(keyVal == deleteKey){
		deleteKeyPress();
	}
});

clearButton.click(clear);
enterButton.click(confirm);
