// REVEAL INTRO PAGE
$("#page0").ready(function(displayIntroPage) {
  $("#leftBlock section h1").addClass("animated slideInRight");
  $("#rightBlock section h1").addClass("animated slideInLeft");
  $("#eyes").addClass("animated flash");
  $("#page1").hide();
  $("#page2").hide();
  $("#page3").hide();
});

//REVEAL FIRST PAGE
$("a#button").on("click", function(displayFirstPage) {
  $("#page1").show();

  // $('#big1').addClass('animated infinite bounceOutLeft');
});


$("#section").hover(function(){
    $("a").addClass("animated repeat pulse");

});


//REVEAL SECOND PAGE, SHOW FORMS
//BAR FORM
$("#sm1 a").on("click", function(showBar) {
  $("#page2").show();
  $("#bar-form").show();
  $("#networking-form").hide();
  });

//NETWORKING FORM
  $("#med3 a").on("click", function(showNetworking) {
    $("#page2").show();
    $("#bar-form").hide();
    $("#networking-form").show();
  });



//REVEAL THIRD PAGE WHEN BUTTON IS CLICKED, HIDE SCRIPT2
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



jQuery(function ($) {
    $("#query").tweets;
        avatar_size: 16; // avatar size in px
        count: 5; // how many tweets to show
        query: "#microsoft"; // search query
        loading_text: "searching twitter...";
        refresh_interval: 60; // seconds before next refresh

});
