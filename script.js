const div1 = document.getElementById("div1");
const div12 = document.getElementById("div12");

$(window).scroll(function () {
  if ($(div1).scrollTop() > 800) {
    console.log(
      "Vous avez défilé jusqu'à plus de 800px! (" +
        $(div1).scrollTop(div12) +
        "px)"
    );
  }
});
