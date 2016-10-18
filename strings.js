// Reference to DOM elements
var reversalBtn = document.getElementById("reversalBtn");
var alphabitsBtn = document.getElementById("alphabitsBtn");
var palindromeBtn = document.getElementById("palindromeBtn");
var inputStr = document.getElementById("inputStr");

// Add event listeners
reversalBtn.addEventListener("click", function() {
	reversal(inputStr.value);
}, false);
alphabitsBtn.addEventListener("click", function() {
	alphabits(inputStr.value);
}, false);
palindromeBtn.addEventListener("click", function() {
	palindrome(inputStr.value);
}, false);


function reversal(str) {
	// split the string into an array, reverse the order of the array, 
	// concatentate elements into a string
	var reversed = str.split("").reverse().join("");
	document.getElementById("resultingStr").innerHTML = reversed;
	console.log(reversed);
}

function alphabits(str) {
	var alphabits = str.toLowerCase().split("").sort().join("");
	document.getElementById("resultingStr").innerHTML = alphabits;
	console.log(alphabits);
}

function palindrome(str) {
	var isPalindrome = function(str) {
		return str == str.split('').reverse().join('');
	};

	if (isPalindrome(str)) {
		document.getElementById("resultingStr").innerHTML = "<h1 style='color:green\;'>Your string is a palindrome.</h1>";
	} else {
		document.getElementById("resultingStr").innerHTML = "<h1 style='color:red\;''>Your string ain't a palindrome.</h1>";
	}
	console.log(palindrome);
}





