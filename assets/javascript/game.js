
        words = ["HARRY POTTER", "HERMIONE GRANGER", 
		"RON WEASLEY", "LORD VOLDEMORT", "PROFESSOR ALBUS DUMBLEDOR", 
		"PROFESSOR SNAPE", "BELLATRIX LESTRANGE", "LUNA LOVEGOOD",
		"DRACO MALFOY","SIRIUS BLACK","REMUS LUPIN","RUBEUS HAGRID",
		"NEVILLE LONGBOTTOM"];

		var guessWord = words[Math.floor(Math.random()*words.length)];
			   console.log(guessWord);
	

		var answerArray = [];
		for (var i = 0; i < guessWord.length; i++) {
			answerArray[i] = " _";
		}

		var remainingLetters = 7;

		var guess = document.onkeyup = function(event) {
        userInput = event.key.toUpperCase();
      
            console.log(userInput);

            	for (var j = 0; j < guessWord.length; j++) {
            		if (guessWord[j] === guess) {
            			answerArray[j] = guess;
            			remainingLetters--;
            		}
            	
            	}
            


          var html =
          "<p>" + answerArray.join("") + "</p>" +
          "<p>" + remainingLetters-- + "<p>";

    	  document.querySelector("#game").innerHTML = html;	
  };