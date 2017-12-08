(function() {
  var wallopEl = document.querySelector(".Wallop");
  var slider = new Wallop(wallopEl);
  var autoPlayMs = 3000;
  var nextTimeout;
  var loadNext = function() {
    var nextIndex = (slider.currentItemIndex + 1) % slider.allItemsArray.length;
    slider.goTo(nextIndex);
  };
  nextTimeout = setTimeout(function() {
    loadNext();
  }, autoPlayMs);
  slider.on("change", function() {
    clearTimeout(nextTimeout);
    nextTimeout = setTimeout(function() {
      loadNext();
    }, autoPlayMs);
  });
})();
