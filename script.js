var progress = 0;
var correct = 100;
var wrong = 0;
var score = 0;
var ans = 0;
var QAverage = 0;
var myAvg = 0;
var nationalAverage = 90;

function myFunction1()
{
var a = document.getElementById("text_a").value;

if (a=="Door" || a == "door")
  {
    QAverage = 80;
    ans = ans + 1;
    score = score + correct;
    document.getElementById("answer1").innerText="Correct!";
  }
else
  {
    score = score + wrong;
    document.getElementById("answer1").innerHTML="Oops! Watch the Video Tutorial to see how you can get the correct answer.";
  }
}

function myFunction2()
{
var b=document.getElementById("text_b").value;

if (b == "B" || b == "b")
  {
    QAverage = QAverage +  90;
    ans = ans + 1;
    score = score + correct;
    document.getElementById("answer2").innerText="Correct!";
  }
  else
  {
    score = score + wrong;
    document.getElementById("answer2").innerHTML="Oops! Watch the Video Tutorial to see how you can get the correct answer.";
  }
}

function myFunction3()
{
var c=document.getElementById("text_c").value;

if (c=="B" || c == "b")
  {
    QAverage = QAverage +  90;
    ans = ans + 1;
    score = score + correct;
    document.getElementById("answer3").innerText="Correct!";
  }
else
  {
    score = score + wrong;
    document.getElementById("answer3").innerHTML="Oops! Watch the Video Tutorial to see how you can get the correct answer.";
  }
}

function myFunction4()
{
var d=document.getElementById("text_d").value;

if (d=="27")
  {
    QAverage = QAverage +  70;
    ans = ans + 1;
    score = score + correct;
    document.getElementById("answer4").innerText="Correct!";
  }
else
  {
    score = score + wrong;
    document.getElementById("answer4").innerHTML="Oops! Watch the Video Tutorial to see how you can get the correct answer.";
  }
}

function myFunction5()
{
var e=document.getElementById("text_e").value;

if (e=="13")
  {
    QAverage = QAverage +  60;
    ans = ans + 1;
    score = score + correct;
    document.getElementById("answer5").innerText="Correct!";
  }
else
  {
    score = score + wrong;
    document.getElementById("answer5").innerHTML="Oops! Watch the Video Tutorial to see how you can get the correct answer.";
  }
}

// function scoreFunction(){
//   document.getElementById("score").innerHTML = "Your score is: " +  score;
// }




// if(QAverage - nationalAverage < 0){
//   result = " above National Average"
// }else if(QAverage  - nationalAverage > 0){
//   result = " below National Average"
// }


// if(QAverage/5 > 78){
//   mathPro = 2;
// }else if(QAverage/5 >= 60 || QAverage/5 < 78){
//   mathPro = 18;
// }else{
//   mathPro = " More than 20";
// }
function NatAvgFunction(){
  document.getElementById("NatAvg").innerHTML = "Your Avg is: " +  myAvg + "%";
}

function finalResult(){
  if(ans == 0){
    myAvg = 0;
    result = "91% below National Average";
  }if(ans === 1){
    myAvg = 20;
    result = "71% below National Average";
  }if(ans == 2){
    myAvg = 40;
    result = "51% below National Average";
  }if(ans == 3){
    myAvg = 60;
    result = "31% below National Average";
  }if(ans == 4){
    myAvg = 80;
    result = "11% below National Average";
  }if(ans == 5){
    myAvg = 100;
    result = "9% above National Average";
  }
  // document.getElementById("final-result").innerHTML = "You got " + ans + "/5 question(s) right. Your Average is: " + myAvg + "% compared to the national average of "+ nationalAverage +"% and you are " + result;
}
// ----------------------------------------for score page
function locations(){
  if(ans == 0){
    location.href = "scorepage0.html"
  }
  else if(ans == 1){
    location.href = "scorepage1.html"
  }
  else if(ans == 2){
    location.href = "scorepage2.html"
  }
  else if(ans == 3){
    location.href = "scorepage3.html"
  }
  else if(ans == 4){
    location.href = "scorepage4.html"
  }
  else if(ans == 5){
    location.href = "scorepage5.html"
  }
}
