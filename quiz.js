var growButton = document.getElementById("button");
growButton.addEventListener("click", getInput);

var growEnter = document.getElementsByClassName("input");
for (var i = 0; i < growEnter.length; i++) {
	growEnter[i].addEventListener("keyup", function(event) {
		if (event.keyCode===13) {
			getInput();
		}
	});
}

var treeSpecs = {
	character: "" ,
	height: ""
};

function getInput() {
	treeSpecs.character = document.getElementById("character").value;
	treeSpecs.height = document.getElementById("height").value;
	var char = treeSpecs.character;
	var heightInt = treeSpecs.height;

	if (char === "" || heightInt === "") {
		alert("Please enter a character and a number.");
	} else {
		tree(treeSpecs);
	}
}

function tree(treeObj) {
	var space = " ";
	var char = treeObj.character;
	var spaceMath = space.repeat(treeObj.height);
	for(var i = 1; i <= treeSpecs.height; i++) {
  //var i=1: user doesn't know about any zero-index. if i was 0, would have one line too many.
		spaceMath = spaceMath.substr(1);
		char += treeObj.character + treeObj.character;
		var charMath = char.substr(2);
		console.log(spaceMath + charMath + spaceMath);
	}
}
