var answers = 
["We know what we are, but know not what we may be", 
"Our doubts are traitors and make us lose the good we oft might win by fearing to attempt", 
"Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.", 
"Sweet are the uses of adversity which, like the toad, ugly and venomous, wears yet a precious jewel in his head",
"Uneasy lies the head that wears the crown.", 
"Nothing can come of nothing", 
"How far that little candle throws its beams! So shines a good deed in a naughty world", 
"Talking isn’t doing. It is a kind of good deed to say well; and yet words are not deeds", 
"Such as we are made of, such we be",
"To be, or not to be: that is the question",
"All that glisters is not gold", 
"Words are easy, like the wind; faithful friends are hard to find.",];

window.onload = function() {
var eight = document.getElementById("eight").innerHTML = "Ask me Anything";
var answer = document.getElementById("answer");
var eightball = document.getElementById("eight-ball");
var question = document.getElementById("question");

eightball.addEventListener("click", function() {
if (question.value.length < 1) {
alert('Enter A Question For An Answer!').style.color = "red";x
} else{
eight.innerText = "";
var num = Math.floor(Math.random() * Math.floor(answers.length));
answer.innerText = answers[num];
}
});
};

function ninjaWebsite(){
 document.getElementById("ninjaFiles").url ("http://127.0.0.1:5501/Ninja.html");
}