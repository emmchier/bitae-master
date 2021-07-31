$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $("#scroll").fadeIn();
      $(".navbar").addClass("changeState");
    } else {
      $("#scroll").fadeOut();
      $(".navbar").removeClass("changeState");
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
