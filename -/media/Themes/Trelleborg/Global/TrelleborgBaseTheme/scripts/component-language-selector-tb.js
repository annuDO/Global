$xa(document).ready(function () {
    $xa(document).on("click", ".tb-language-selected", function () {
      var thisOffset = $xa(this).offset();
      var ovelayObj = $xa(".tb-language-overlay");

      if (!ovelayObj.hasClass("open")) {
        ovelayObj.show().addClass("open").css({
          "top": thisOffset.top + 40,
          "left": thisOffset.left
        });
      } else {
        ovelayObj.removeClass("open").hide().removeAttr("style");
      }
    });
    $xa(document).on("keydown", function (event) {
      var thisObj = $xa(".tb-language-overlay");

      if (thisObj.hasClass("open")) {
        var keyCode = event.which || event.keyCode;

        if (keyCode == 13) {
          thisObj.find(".highlight a")[0].click();
        }

        if (keyCode > 64 || keyCode < 91) {
          var langArr = thisObj.find("li"),
              key = event.key;

          if (!thisObj.find(".highlight").length) {
            languageIterator(langArr, key);
          } else {
            var highlightObj = thisObj.find(".highlight").next();
            langArr.removeClass("highlight");
            var language = highlightObj.find(".tb-language-lang").text().trim().toLowerCase();

            if (language.indexOf(key) == 0) {
              languageSelector(highlightObj);
            } else {
              languageIterator(langArr, key);
            }
          }
        }
      }
    });

    function languageIterator(langArr, key) {
      langArr.removeClass("highlight");

      for (var langInt = 0; langInt < langArr.length; langInt++) {
        var curObj = $xa(langArr[langInt]);
        var language = curObj.find(".tb-language-lang").text().trim().toLowerCase();

        if (language.indexOf(key) == 0) {
          languageSelector(curObj);
          break;
        }
      }
    }

    function languageSelector(curObj) {
      curObj.addClass("highlight");
      curObj.parents(".tb-language-dropdown-menu").scroll().animate({
        scrollTop: curObj.offset().top - 50
      }, 2000);
    }

    $xa('body').on('click', function (e) {
      var thisObj = $xa(e.target);

      if (!thisObj.hasClass("tb-language-overlay") && thisObj.attr("id") !== "tb-language-selected") {
        $xa(".tb-language-overlay").hide().removeClass("open");
        $xa(".tb-language-overlay").find("li").removeClass("highlight");
      }
    });
});