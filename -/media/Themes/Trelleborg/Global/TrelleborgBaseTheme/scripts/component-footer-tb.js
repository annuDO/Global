$xa(document).ready(function () {
  $xa(".tb-footer-container ").on("click", ".tb-footer-close-btn", function (e) {
    e.preventDefault();
    $xa(this).parents("#tb-footer-social-links").addClass("d-none");
  });
  $xa(".tb-footer-container").on("click", ".tb-footer-social", function (e) {
    e.preventDefault();
    var thisObj = $xa(this),
        socialSctionObj = $xa("#tb-footer-social-links");
    var links = thisObj.find(".tb-footer-social-list");

    if (links && links.children().length > 1) {
      var noOfSiblings = thisObj.siblings().length;
      var widthOfChannel = (noOfSiblings + 1) * thisObj.outerWidth(true) - 8;

      if (thisObj.hasClass("link-open")) {
        socialSctionObj.addClass("d-none").removeAttr("style");
        thisObj.removeClass("link-open");
      } else {
        thisObj.parents(".tb-footer-social-channels").find(".tb-footer-social").removeClass("link-open");
        var title = thisObj.find(".tb-footer-social-title").text() || "";
        socialSctionObj.find(".tb-footer-links-title").html(title);
        socialSctionObj.find(".tb-footer-links-body").html(links.html());
        socialSctionObj.removeClass("d-none").css({
          "width": widthOfChannel
        });
        thisObj.addClass("link-open");
      }
    } else {
      thisObj.parents(".tb-footer-social-channels").find(".tb-footer-social").removeClass("link-open");
      socialSctionObj.addClass("d-none").removeAttr("style");
      socialSctionObj.find(".tb-footer-links-body").html(links.html());
      socialSctionObj.find(".tb-link a")[0].click();
    }
  });
});