var myNumber = Math.floor(Math.random() * 100) + 1;
var gameDone = false;
var numbersDiv = document.getElementById('numbers');
var myAnswer = document.getElementById('answer');

for(var i = 1; i <= 100; i++) {
	var button = document.createElement("button");
	button.className = "button";
	button.innerHTML = i;
	numbersDiv.appendChild(button);
	
	if (i % 10 === 0) {
		numbersDiv.appendChild(document.createElement('br'));
	}
}

Array.from(document.getElementsByTagName('button')).forEach(function(element) {
	element.addEventListener('click', function () {
		if (!gameDone) {
			var userGuess = element.innerHTML;

			if(userGuess == myNumber) {
				element.className = "correct";
				myAnswer.innerHTML = 'Yes! You guessed my number! Congratulations!';
				gameDone = true;
			} else if (userGuess > myNumber) {
				element.className = "wrong";
				myAnswer.innerHTML = 'No, my number is little bit lower.';
			} else if (userGuess < myNumber) {
				element.className = "wrong";
				myAnswer.innerHTML = 'No, my number is little bit higher.';
			}
		}
	});
});
