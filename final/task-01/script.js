$(document).ready(function () {
  $(".catch").mouseenter(function () {
    $(this).css({
      left: `${random(900)}px`,
      top: `${random(450)}px`,
      background: `rgb(${random(256)}, ${random(256)}, ${random(256)})`,
    });
  });
});

function random(max) {
  return Math.floor(Math.random() * max);
}
