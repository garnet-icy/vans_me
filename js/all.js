cookie = getCookie("userId");
if (cookie) {
  $("#c123").html("欢迎您：" + `<span>` + cookie + `</span>`);
  $("#c123").css("color", "black");
  $("#c123").next("a").css("display", "none");
  $.get("../php/getGoodsCar.php", { vipName: cookie },
    function (data) {
      var date = JSON.parse(data);
      $("#shopSpan").html(date.length);
    }
  );
}

$(".about").mouseover(function () {
  $(".about_kuang").css("display", "block");

});
$(".man").mouseover(function () {
  $(".man_kuang").css("display", "block");
});
$(".woman").mouseover(function () {
  $(".woman_kuang").css("display", "block");
});
$(".more").mouseover(function () {
  $(".more_kuang").css("display", "block");
});

$(".about").mouseout(function () {
  $(".about_kuang").css("display", "none");
});
$(".man").mouseout(function () {
  $(".man_kuang").css("display", "none");
});
$(".woman").mouseout(function () {
  $(".woman_kuang").css("display", "none");
});
$(".more").mouseout(function () {
  $(".more_kuang").css("display", "none");
});

$(".about_kuang").mouseover(function () {
  $(".about_kuang").css("display", "block");
});
$(".man_kuang").mouseover(function () {
  $(".man_kuang").css("display", "block");
});
$(".woman_kuang").mouseover(function () {
  $(".woman_kuang").css("display", "block");
});
$(".more_kuang").mouseover(function () {
  $(".more_kuang").css("display", "block");
});

$(".about_kuang").mouseout(function () {
  $(".about_kuang").css("display", "none");
});
$(".man_kuang").mouseout(function () {
  $(".man_kuang").css("display", "none");
});
$(".woman_kuang").mouseout(function () {
  $(".woman_kuang").css("display", "none");
});
$(".more_kuang").mouseout(function () {
  $(".more_kuang").css("display", "none");
});