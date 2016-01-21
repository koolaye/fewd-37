// $('#leftBlock').animate({left: 0});
//
// bar script:
// button you will click on
// input value is being appended to this
//
// bar is clicked
// page is opened to the form of bar
// everything else is hidden

// REVEAL INTRO PAGE
$("#page0").ready(function(displayIntroPage) {
  $("#page1").hide();
  $("#page2").hide();
  $("#page3").hide();
});

//REVEAL FIRST PAGE
$("#button").on("click", function(displayFirstPage) {
  $("#page1").show();
  // $('#big1').addClass('animated infinite bounceOutLeft');
});



//REVEAL SECOND PAGE, SHOW BAR FORM1, HIDE NETWORKING FORM2
$("#sm1 a").on("click", function(showBar) {
  $("#page2").show();
  $("#bar-form").show();
  $("#networking-form").hide();
  });



  //REVEAL SECOND PAGE, SHOW NETWORKING FORM2, HIDE BAR FORM1
  $("#med3 a").on("click", function(showNetworking) {
    $("#page2").show();
    $("#bar-form").hide();
    $("#networking-form").show();
  });

    // $("div.circle, a #networking-form").on("click", function(showNetworking) {
    // $("#networking-form").show();
    // $("#bar-form").hide();
    // });


//REVEAL THIRD PAGE WHEN BUTTON IS CLICKED, HIDE SCRIPT2
// $("div#bar-form, #button2").on("click", function(createScript) {

  $("#bar-form").find("#button2").on("click", function(createScript) {

  $("#page3").show();
  $("#bar-script").show();
  $("#networking-script").hide();


  $(".line1").append($(".greeting").val());
  $(".line2").append($(".sport-name").val());
  $(".line3").append($(".time-length").val());
  $(".line4").append($(".fav-sport").val());
  $(".line5").append($(".time-length2").val());
  $(".line6").append($(".event").val());
  $(".line7").append($(".event2").val());
});


//REVEAL THIRD PAGE WHEN BUTTON IS CLICKED, HIDE SCRIPT2
$("#networking-form").find("#button2").on("click", function(createScript) {
  $("#page3").show();
  $("#networking-script").show();
  $("#bar-script").hide();

  $(".line1").append($(".name").val());
  $(".line2").append($(".company-name").val());
  $(".line3").append($(".time-length").val());
  $(".line4").append($(".things-learned").val());
  $(".line5").append($(".time-length2").val());
  $(".line6").append($(".subject").val());
  $(".line7").append($(".removed").val());
});
