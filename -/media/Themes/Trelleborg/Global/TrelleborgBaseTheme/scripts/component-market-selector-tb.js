$xa(document).ready(function () {
  $xa(document).on("click", ".tb-marketselector-close-btn", function (e) {
    e.preventDefault();
    var thisObj = $xa(this);
    thisObj.parents(".overlay").hide().removeClass("open").removeAttr("style");
  });
  $xa(document).on("click", "#tb-marketselector a", function (e) {
    e.preventDefault();
    var thisOffset = $xa(this).offset();
    var overlayObj = $xa("#tb-marketselector-overlay");

    if (overlayObj.hasClass("open")) {
      overlayObj.hide().removeClass("open").removeAttr("style");
    } else {
      overlayObj.show().addClass("open").css({"top": thisOffset.top + 40 });
    }
  });
});