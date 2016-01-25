// REVEAL INTRO PAGE
$("#page0").ready(function(displayIntroPage) {
  $("#leftBlock section h1").addClass("animated slideInRight");
  $("#rightBlock section h1").addClass("animated slideInLeft");

  $(".sayHi").addClass("animated bounceIn");
  // $("#lEye, #rEye").hide(0).delay(4000).show(0);
  $("#page1").hide();
  $("#page2").hide();
  $("#page3").hide();
});

//REVEAL FIRST PAGE
$("a#button").on("click", function(displayFirstPage) {
  $("#page1").show();
});


//REVEAL SECOND PAGE, SHOW FORM
$("#sm2 a").on("click", function(showDateForm) {
  $("#page2").show();
  $("#date-form").show();
  $("#networking-form").hide();
});

//NETWORKING FORM
$("#med3 a").on("click", function(showNetworking) {
  $("#page2").show();
  $("#date-form").hide();
  $("#networking-form").show();
});

//REVEAL THIRD PAGE WHEN BUTTON IS CLICKED, HIDE SCRIPT2
$("#date-form").find("#button2").on("click", function(createScript) {
  $("#page3").show();
  $("#date-script").show();
  $("#networking-script").hide();
  $(".line1").append($(".answer1").val());
  $(".line2").append($(".answer2").val());
  $(".line3").append($(".answer3").val());
  $(".line4").append($(".answer4").val());
  $(".line5").append($(".answer5").val());
  $(".line6").append($(".answer6").val());
  $(".line7").append($(".answer7").val());
  $(".line8").append($(".answer8").val());
});

//REVEAL THIRD PAGE WHEN BUTTON IS CLICKED, HIDE SCRIPT2
$("#networking-form").find("#button2").on("click", function(createScript) {
  $("#page3").show();
  $("#networking-script").show();
  $("#date-script").hide();
  $(".line1").append($(".answera").val());
  $(".line2").append($(".answerb").val());
  $(".line3").append($(".answerc").val());
  $(".line4").append($(".answerd").val());
  $(".line5").append($(".answere").val());
  $(".line6").append($(".answerf").val());
  $(".line7").append($(".answerg").val());
  $(".line8").append($(".answerh").val());
  $(".line9").append($(".answeri").val());
});

var pageDoc = document.querySelector("#page0");
pageDoc.onmousemove = moveHandler;

function moveHandler(evt) {
animateEyes(evt.clientX,evt.clientY);
}

function animateEyes(xPos,yPos) {
	var rightEye = document.querySelector("#rEye");
	var leftEye = document.querySelector("#lEye");
	var rightEyeball = document.querySelector("#rDot").style;
	var leftEyeball = document.querySelector("#lDot").style;

	leftEyeball.left = newEyeballPos(xPos,leftEye.offsetLeft);
	leftEyeball.top = newEyeballPos(yPos,leftEye.offsetTop);

	rightEyeball.left = newEyeballPos(xPos,rightEye.offsetLeft);
	rightEyeball.top = newEyeballPos(yPos,rightEye.offsetTop);

	function newEyeballPos(currPos,eyePos) {
	return Math.min(Math.max(currPos,eyePos+3),eyePos+17) + "px";
	}
}
