$xa(document).ready(function () {
  var endPointUrl = $xa(".tb-stock-information").attr('data-endpoint');
  var updatedUrl = window.location.protocol + "//" + document.location.hostname + endPointUrl;
  $xa.ajax({
    type: 'GET',
    crossOrigin: true,
    dataType: 'json',
    url: updatedUrl,
    success: function success(data) {
      createHtml(data);
    }
  });
});

function getFormatedDate(passedDate) {
  var returndate = "";

  if (passedDate) {
    var date = new Date(passedDate);
    returndate = " ".concat(getFullDayName(date), " ").concat(date.getDate(), " ").concat(getFullMonthName(date), ", ").concat(date.getHours(), ":").concat(date.getMinutes());
  }

  return returndate;
}

function getFullMonthName(date) {
  return date.toLocaleString(undefined, {
    month: 'long'
  });
}

function getFullDayName(date) {
  return date.toLocaleDateString(undefined, {
    weekday: 'long'
  });
}

function createHtml(data) {
  if (data && data.Instruments && data.Instruments.length) {
    var getDeltaValue = function getDeltaValue(data) {
      if (data && data.Instruments && data.Instruments.length) {
        var deltaValue = instrument.Quotes[0].DeltaPercentage;
        var classes = deltaValue >= 0 ? 'tb-green' : 'tb-red';
        stockParent.find(".tb-stock-delta").html("".concat(deltaValue >= 0 ? '+' : '', " ").concat(instrument.Quotes[0].Delta, " ").concat(instrument.TradeCurrency));
        stockParent.find(".tb-stock-delta").addClass(classes);
      }
    };

    var instrument = data.Instruments[0];
    var stockParent = $xa(".tb-stock-information");
    stockParent.find(".tb-stock-price").html("".concat(instrument.Quotes[0].Price));
    stockParent.find(".tb-stock-high-value").html(": ".concat(instrument.Quotes[0].HighPrice));
    stockParent.find(".tb-stock-low-value").html(": ".concat(instrument.Quotes[0].LowPrice));
    stockParent.find(".tb-stock-name").html(" ".concat(instrument.TickerSymbol));
    stockParent.find(".tb-stock-number").html(" ".concat(instrument.Quotes[0].Quantity));
    stockParent.find(".tb-stock-currency").html("".concat(instrument.TradeCurrency));
    stockParent.find(".tb-stock-updated-time").html("".concat(getFormatedDate(instrument.Quotes[0].QuoteTime)));
    getDeltaValue(data);
  }
}