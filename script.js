document.querySelectorAll('.butterfly').forEach(function (el) {

el.addEventListener('mouseover', function () {

var randomX = Math.floor(Math.random() * (480 - 75));
var randomY = Math.floor(Math.random() * (374 - 75));

    el.style.left = randomX + 'px';
    el.style.top = randomY + 'px';
  });

});