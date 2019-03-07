const screen = $('#screen');
const enterButton = $('#enter');
const clearButton = $('#clear');
let value = "";
let result = 0;

const confirm = () => {
	result = eval(value);
	screen.text(result);
} 

const clear = () => {
	result = 0;
	value = "";
	screen.text("");
}

$(".operator").click(function(){
	value += $(this).text();
});

$(".number").click(function() {
	const curr = $(this).text();
	value += curr;
	screen.text(curr);
});
clearButton.click(clear);
enterButton.click(confirm);
