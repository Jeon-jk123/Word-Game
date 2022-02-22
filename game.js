name_1=localStorage.getItem("player1");
name_2=localStorage.getItem("player2");

score1=0;
score2=0;
document.getElementById("name_1").innerHTML=name_1 +" : ";
document.getElementById("name_2").innerHTML=name_2 +" : ";
document.getElementById("score_1").innerHTML=score1;
document.getElementById("score_2").innerHTML=score2;
document.getElementById("question").innerHTML="Question Turn: "+name_1;
document.getElementById("answer").innerHTML="Answer Turn: "+name_2;

