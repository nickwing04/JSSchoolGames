//starting parameters
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
document.getElementById('click_head').onclick = click_head;
document.getElementById('click_tail').onclick = click_tail;
document.getElementById('reset').onclick = click_reset;
var heads = 0;
var tails = 0;
var score = 0
var clicks = 10;
const heads_div = document.getElementById("h");
const tails_div = document.getElementById("t");
document.getElementById("score").innerHTML = score;
document.getElementById('clicks').innerHTML = clicks;
alert("Keep going till your clicks are 0. Write down your name and, score. When youre done hit reset");
//end of starting parameters

//Start of reset segment
function click_reset() {
clicks=10;  //setting the values back to where they where
heads = 0;
tails = 0;
score = 0;
alert("Reset, thanks for playing!.");   //alert saying its been reset
document.getElementById("score").innerHTML = score; //updating the new values
document.getElementById('clicks').innerHTML = clicks;
alert("Keep going till your clicks are 0. Write down your name and, score. When youre done hit reset");
}
//end of reset segment

//start of the function when you select the heads coin
function click_head() {
clicks--;
if (clicks >= 0) {
   let x = (Math.floor(Math.random() * 2) == 0); //this turns it into 2 numbers and makes it possible to be a T/F statment
      if(x){
		    score++;
    	  flip("heads");
		    document.getElementById("imgt").style.visibility = "hidden";//hides/shows the result coin
		    document.getElementById("imgh").style.visibility = "visible";
      }else{
		    score--;
        flip("tails");
		    document.getElementById("imgh").style.visibility = "hidden";//hides/shows the result coin
		    document.getElementById("imgt").style.visibility = "visible";
      }
    }
};
//end of the click head function

//start of function when you select the tails coin
function click_tail() {
clicks--;
if (clicks >= 0) {
   let x = (Math.floor(Math.random() * 2) == 0); //this turns it into 2 numbers and makes it possible to be a T/F statment
      if(x){
        score--;
    	  flip("heads");
		    document.getElementById("imgt").style.visibility = "hidden";//hides/shows the result coin
		    document.getElementById("imgh").style.visibility = "visible";
    }else{
		    score++;
        flip("tails");
		    document.getElementById("imgh").style.visibility = "hidden";//hides/shows the result coin
		    document.getElementById("imgt").style.visibility = "visible";
      }
    }
};
//end of the click tails function

//when the coin gets fiped and everything is done this sets the values on the screen/in the html
function flip(coin) {
  document.getElementById("result").innerHTML = coin;
	document.getElementById("score").innerHTML = score;
  document.getElementById('clicks').innerHTML = clicks;
};






      //---------------legal------------------//
     //        made by Nickolos Christensen  //
    //        finished 10/2/2021            //
   //      made for game design class      //
  //             have fun                 //
 //--------------------------------------//
