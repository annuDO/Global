$xa(document).ready(function () {
  $xa(".tb-downlaodlist-container").on("click", ".tb-download-link", function (event) {
    event.preventDefault();
    var thisObj = $xa(this);
    var selectVal = thisObj.parents(".tb-downlaodlist-section").find(".tb-downlaodlist-select").val();
    window.open(selectVal, "_self");
  });
});