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
	console.log("result: "+ result);
	screen.text(result);
	curr = '';
}
//clear button function
const clear = () => {
	result = 0;
	console.log("clear result: "+ result);
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
	console.log(value);
}
//operator button function
//this checks the current value not the operator
function operatorClick(){
	let currOperator = $(this).text();
		value += currOperator;
		screen.text(currOperator);
		curr = '';
}
//operator key press function
//Checks num not operator
const operatorKeyPress = (key) => {
		console.log('Key: ' + key);
		let currOperator = key;
		value+=currOperator;
		screen.text(currOperator);
		curr = '';
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
$(document).keypress(e => {
	const validKeys = ['1','2','3','4','5','6','7','8','9','0'];
	const enterKey = 'Enter';
	const deleteKey = 'Backspace';
	let keyVal = e.key;
	console.log(keyVal);
	e.preventDefault();
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
