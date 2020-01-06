"use strict";
window.addEventListener("load", function() {
  let imageHTML = document.getElementsByClassName("img_album");
  let images = Array.prototype.slice.call(imageHTML);
  console.log(images);
  for (var i = 0; i < images.length; i++) {
    console.log(images[i]);
    const image = images[i];
    image.addEventListener("click", function() {
      let textRowHTML = document.getElementsByClassName("textRow");
      let textRow = Array.prototype.slice.call(textRowHTML);
      for (var j = 0; j < textRow.length; j++) {
        textRow[j].style.display = "none";
        if (textRow[j].style.display != "none") {
          textRow[j].setAttribute("aria-expanded", "true");
        } else {
          textRow[j].setAttribute("aria-expanded", "false");
        }
      }
    });
  }
});
