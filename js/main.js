const navbarToggle = document.querySelector(".navbar-toggler");
const burguer1 = document.querySelector(".burguer1");
const burguer2 = document.querySelector(".burguer2");
const burguer3 = document.querySelector(".burguer3");
const sidenav = document.querySelector(".sidenav");

// navbar scroll animation
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
  // arrow to top
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});

// sidenav
sidenav.addEventListener("show.bs.offcanvas", function () {
  document.querySelector("body").classList.add("noPadding");
  burguer1.classList.add("animate");
  burguer2.classList.add("animate");
  burguer3.classList.add("animate");
});
sidenav.addEventListener("hide.bs.offcanvas", function () {
  burguer1.classList.remove("animate");
  burguer2.classList.remove("animate");
  burguer3.classList.remove("animate");
});
