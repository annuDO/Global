$xa(document).ready(function () {
  $xa(document).on("click", ".tb-hotspot-img-wrapper", function (e) {
    var thisObj = $(this),
        parentOffset = thisObj.parent().offset();
    var relX = (e.pageX - parentOffset.left) * 100 / thisObj.width();
    var relY = (e.pageY - parentOffset.top) * 100 / thisObj.height();
    console.log("X=" + relX, "Y=" + relY);
  });
});