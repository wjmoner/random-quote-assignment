var results = document.getElementById("results");
var all = document.getElementById("allquotes");
var buttons = document.getElementById("buttons");

var randomChannel = function () {
	var rColor;

	do {
		rColor = Math.floor(Math.random()*256);
	}
	while (rColor < 150 || rColor > 250);

	// *** THE ABOVE CODE DOES THE SAME THING 
	// *** AS THE COMMENTED CODE BELOW *** 
	// 
	// while (rColor < 150 || rColor > 250) {
	// 	// if (rColor < 150 || rColor > 250) {
	// 	// 	rColor = Math.floor(Math.random()*256);
	// 	// };
	// };
	//

	return rColor;
};

var randomColor = function () {
	var myColor = "rgb(";
	myColor = myColor + randomChannel();
	myColor = myColor + ",";
	myColor = myColor + randomChannel();
	myColor = myColor + ",";
	myColor = myColor + randomChannel();
	myColor = myColor + ")";		
	return myColor;
};

var loadQuote = function (theQuote) {

	var whichQuote = theQuote.id.substr(5, 1);

	var ourBox = document.getElementById("specificquote");
	ourBox.innerHTML = "";
	ourBox.style.backgroundColor = randomQuotes[whichQuote].boxColor; 

	var specificQuote = document.createTextNode(
		randomQuotes[whichQuote].quote + 
		" - " + 
		randomQuotes[whichQuote].author
	);

	ourBox.appendChild(specificQuote);

};

var init = function () { 

	results.innerHTML = "";
	all.innerHTML = "";
	buttons.innerHTML = "";

	var r = document.createElement("div");
	var randomSelection = Math.floor(randomQuotes.length*Math.random());
	r.className = "quoteBox";

	var p = document.createTextNode(
		"Random item index at " + 
		randomSelection + 
		": " + 
		randomQuotes[randomSelection].quote + 
		" - " + 
		randomQuotes[randomSelection].author);

	r.appendChild(p);
	r.style.backgroundColor = randomQuotes[randomSelection].boxColor;
	results.appendChild(r);


	for (i = 0; i < randomQuotes.length; i++) {

		var btnMake = document.createElement("button");
		var btnText = document.createTextNode(randomQuotes[i].author);
		var item;
		// var a = randomQuotes[i].boxColor;
		
		btnMake.appendChild(btnText);
		btnMake.id = "quote" + i;
		btnMake.addEventListener("click", function () {
			loadQuote(this);
		})
		
		buttons.appendChild(btnMake);

		item = document.createTextNode(

			i+1 +
			" [index of " + 
			i + 
			"] " +
			": " + 
			randomQuotes[i].quote + 
			" \u2014 " + 
			randomQuotes[i].author

		);

		var itemDiv = document.createElement("div");
		itemDiv.className = "quoteBox";
		itemDiv.appendChild(item);
		
		all.appendChild(itemDiv);
		itemDiv.style.backgroundColor = randomColor();

	}

};

init();

document.getElementById("reload").addEventListener("click", init);