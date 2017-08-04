// console.log("strings.js");


function reversal(testString) {

	letterArray = testString.split("");
	reversedArray = letterArray.reverse();
	reversedString = reversedArray.join("");

	document.getElementById("reversePrint").innerHTML = `${reversedString}`;

	return reversedString;
}


function alphabits(testString) {

	letterArray = testString.split("");
	alphaArray = letterArray.sort();
	alphaString = alphaArray.join("");

	document.getElementById("alphaPrint").innerHTML = `${alphaString}`;
}


function palindrome(testString) {

	let reversedString = reversal(testString);

	if (reversedString.toLowerCase().replace(/ /g, "") === testString.toLowerCase().replace(/ /g, "")) {
		document.getElementById("palindromePrint").innerHTML = `Your String is a Palindrome!`;
	} else {
		document.getElementById("palindromePrint").innerHTML = `Your String is NOT a Palindrome.`;
	}
}


var testString = "";

document.getElementById("goButton").addEventListener("click", function (event) {

	testString = document.getElementById("textInput").value;

	let filterExp = new RegExp("[^A-Za-z]+");
	let filterString = testString.replace(/ /g, "");
	let filterResult = filterExp.test(filterString);

	if (filterResult === true) {

		alert("Please enter only letters and spaces!");

		document.getElementById("textInput").value = "";

	} else if (filterResult === false) {

		reversal(testString);
		alphabits(testString);
		palindrome(testString);

		document.getElementById("textInput").value = "";
	}

	event.preventDefault(); 

});