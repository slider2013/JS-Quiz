var score = 0;
var questions = ["Skriv hvordan et åbent script tag ser ud?",
				"Skriv det tegn som bruges til at afslutte en statement",
				"Skriv det ord som angiver hvis en boolean er korrekt",
				];

var answers = ["<script>",
				";",
				"true",
				];
var userAnswers;

var userAnswers = prompt(questions[0]);
if (userAnswers == answers[0]){
	alert("Rigtigt.");
		score++;

} else{
	alert("Forkert. Det rigtige svar var: " + answers[0]);
}

var userAnswers = prompt(questions[1]);
if (userAnswers == answers[1]){
	alert("rigtigt");
		score++;
}

else{
	alert("Forkert. Det rigtige svar var: " + answers[1]);
}

var userAnswers = prompt(questions[2]);
if (userAnswers == answers[2]){
	alert("Rigtigt");
	score++;
	
}

else{
	alert("Forkert. Det rigtige svar var: " + answers[2]);
}

var message = 'Du har ' + score;
message += ' ud af ' + questions.length;
message += ' Spørgsmål rigtigt.';
document.write('<p>' + "<br>" + "<br>" + message + '</p>');
document.write("<br>" + "<br>");