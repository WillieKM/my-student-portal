(function () {
  var btn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  var overlay = document.getElementById('overlay');

  function toggle(open) {
    menu.classList.toggle('open', open);
    btn.classList.toggle('active', open);
    overlay.classList.toggle('active', open);
  }

  if (btn) {
    btn.addEventListener('click', function () { toggle(!menu.classList.contains('open')); });
    overlay.addEventListener('click', function () { toggle(false); });
  }
})();
