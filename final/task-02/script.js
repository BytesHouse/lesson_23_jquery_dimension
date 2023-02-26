$(document).ready(function () {
  $("#right").click(function () {
    $("#box").css({
      left: "+=100px",
    });
  });
  $("#left").click(function () {
    $("#box").css({
      left: "-=100px",
    });
  });

  $("#down").click(function () {
    $("#box").css({
      top: "+=100px",
    });
  });
  $("#up").click(function () {
    $("#box").css({
      top: "-=100px",
    });
  });
});
