$xa(document).ready(function () {
  $xa(document).on("click", ".tb-sectionintro-link", function (e) {
    e.preventDefault();
    var thisObj = $xa(this),
        parentObj = thisObj.parents(".tb-sectionintro");

    if (thisObj.hasClass("show-more")) {
      parentObj.find(".tb-sectionintro-content").css({
        "height": "auto"
      });
      parentObj.find(".show-less").removeClass("d-none");
    } else {
      parentObj.find(".tb-sectionintro-content").removeAttr("style");
      parentObj.find(".show-more").removeClass("d-none");
    }

    thisObj.addClass("d-none");
  });
});