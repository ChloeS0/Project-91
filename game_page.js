player1=localStorage.getItem("Player1");
player2=localStorage.getItem("Player2");

score1=0;
score2=0;

document.getElementById("player1_name").innerHTML=player1;
document.getElementById("player2_name").innerHTML=player2;

document.getElementById("player1_score").innerHTML=" : " + score1;
document.getElementById("player2_score").innerHTML=" : " + score2;

function send()
{
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2);
    question_number="<h4>" + number1 + " x " + number2+ "</h4>"
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br> <br><button class='btn btn-info' onclick='check()'>Check</button>"
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;

}