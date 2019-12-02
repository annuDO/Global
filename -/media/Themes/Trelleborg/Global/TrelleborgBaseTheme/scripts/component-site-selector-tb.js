$xa(document).ready(function () {
  $xa(document).on("click", ".tb-siteselector-close-btn", function (e) {
    e.preventDefault();
    var thisObj = $xa(this);
    thisObj.parents(".overlay").hide().removeClass("open").removeAttr("style");
  });
  $xa(document).on("click", "#tb-siteselector a", function (e) {
    e.preventDefault();
    var thisOffset = $xa(this).offset();
    var overlayObj = $xa("#tb-siteselector-overlay");

    if (overlayObj.hasClass("open")) {
      overlayObj.hide().removeClass("open").removeAttr("style");
    } else {
      overlayObj.show().addClass("open").css({
        "top": thisOffset.top + 40
      });
    }
  });
  $xa(".tb-siteselector-menu-item a").on("mouseover click", function () {
    if ($xa(window).width() > 1023) {
      var thisObj = $xa(this),
          title = thisObj.find(".tb-siteselector-menu-title").text();
      var overViewHtml = "<div class=\"row tb-siteselector-overview-row\">\n                                <div class=\"col-lg-6 tb-siteselector-section\">\n                                <a href=".concat(thisObj.attr("href"), " class=\"tb-siteselector-overview-title\">").concat(title, "</a>\n                                <div class=\"tb-siteselector-discription\">\n                                ").concat(thisObj.find(".tb-siteselector-full-description").text(), "\n                                </div>\n                                </div>\n                                <div class=\"col-lg-6 tb-siteselector-img\">\n                                    <img src=\"").concat(thisObj.find(".tb-siteselector-image").text(), "\" alt=").concat(title, ">\n                                </div>\n                                </div> ");
      $xa("#siteselector-overview").html(overViewHtml).show();
    }
  });
});