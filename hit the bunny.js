$(document).ready(function(){//Before game start activity
	$("#end").hide();
  $("img").hide();
$("#start").click(function(){  //game start activity
   $("#start").hide();
   $("#reset").hide();
   $("#end").show();
  var x = Math.floor((Math.random() * 5) + 1);//random value for X=(1)-(5)
     if (x==1) {
  	   $("#I1").show();//first appearences...
               }
     else if (x==2) {
  	   $("#I2").show();
               }
     else if(x==3){
  	   $("#I3").show();
               }
     else if(x==4){
  	   $("#I4").show();
               }
     else{
  	   $("#I5").show();
         }
});


$("#end").click(function(){  //game end activity...
   $(".img").hide();
   $("#start").show();
   $("#end").hide();
   $("#reset").show();
});
$("img").click(function(){ //repeats for game
  $("img").hide();    
function myFunction() {
 g = g+1
document.getElementById("scoress").innerHTML = g;
}
  x = Math.floor((Math.random() * 5) + 1);//random value for X=(1)-(5)
  if (x==1) {
    $("#I1").show();//repeat appearences...
  }
  else if (x==2) {
    $("#I2").show();
  }
  else if(x==3){
    $("#I3").show();
  }
  else if(x==4){
    $("#I4").show();
  }
  else{
    $("#I5").show();
  }

});
});
var c = 60;
var t;
var timer_is_on = 0;

function timedCount() {
if(c>0){
  document.getElementById("demo").innerHTML = c +" seconds left!";
  c = c - 1;
  t = setTimeout(timedCount, 1000);
  }
  else {
  c=60;
  document.getElementById("demo").innerHTML = "Time's up!";
  timer_is_on = 0;
  clearTimeout(t);
  $(".img").hide();
   $("#start").show();
   $("#end").hide();
   $("#reset").show();
   g=0
document.getElementById("scoress").innerHTML = g;
  }
  
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
     c = 60;
   timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
    document.getElementById("demo").innerHTML = "Game aborted!";
    $(".img").hide();
   $("#start").show();
   $("#end").hide();
   $("#reset").show();
   g=0
document.getElementById("scoress").innerHTML = g;
}