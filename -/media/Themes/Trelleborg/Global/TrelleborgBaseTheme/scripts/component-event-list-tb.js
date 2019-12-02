$xa(document).ready(function () {
  $xa('.trelleborg-event-list ul li').each(function () {
    $xa(this).removeClass();
    $xa(this).addClass("item tb-eventlist-accordion-item");
  });
});