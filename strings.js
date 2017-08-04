console.log("strings.js");


function reversal(testString) {
	// console.log("reversal triggered; input", inputArray);


	letterArray = testString.split("");
	reversedArray = letterArray.reverse();
	reversedString = reversedArray.join("");

	document.getElementById("reversePrint").innerHTML = `${reversedString}`;

	console.log("reversedString", reversedString);

	return reversedString;
}

function alphabits(testString) {

	letterArray = testString.split("");
	alphaArray = letterArray.sort();
	alphaString = alphaArray.join("");

	console.log("alphaArray", alphaArray);
	console.log("alphaString", alphaString);

	document.getElementById("alphaPrint").innerHTML = `${alphaString}`;

}

function palindrome(testString) {

	let reversedString = reversal(testString);

	console.log("testString", testString);
	console.log("reversedString", reversedString);

	if (reversedString.toLowerCase() === testString.toLowerCase()) {
		document.getElementById("palindromePrint").innerHTML = `Your String is a Palindrome!`;
	} else {
		document.getElementById("palindromePrint").innerHTML = `Your String is NOT a Palindrome.`;
	}

	// console.log("palindrome triggered; input", inputArray);

	// document.getElementById("palindromePrint").innerHTML = `${#}`;

}

var testString = "";

document.getElementById("goButton").addEventListener("submit", function () {

	testString = document.getElementById("textInput").value;

	console.log("testString", testString);

	reversal(testString);
	alphabits(testString);
	palindrome(testString);

});