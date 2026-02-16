/**
 * Concrete Jungle SF — main JS
 * - Mobile nav toggle
 * - Photo gallery (list filenames below; add images to Assets/photos/)
 */

// Add photo filenames here when you add images to Assets/photos/ (e.g. '1.jpg', 'group.jpg')
window.CONCRETE_JUNGLE_PHOTOS = [
  'IMG_0008.jpeg',
  'IMG_0009.jpeg',
  'IMG_0420.jpeg',
  'IMG_0602.jpeg',
  'IMG_0608.jpeg',
  'IMG_0611.jpeg',
  'IMG_0697.heic',
  'IMG_0755.HEIC',
  'IMG_0790.HEIC',
  'IMG_0892.jpeg',
  'IMG_1337.jpeg',
  'IMG_1523.jpeg',
  'IMG_1643.HEIC',
  'IMG_1828.jpeg',
  'IMG_2104.HEIC',
  'IMG_2702.HEIC',
  'IMG_3145.HEIC',
  'IMG_3526.HEIC',
  'IMG_3906.jpeg',
  'IMG_4004.JPG',
  'IMG_4014.JPG',
  'IMG_5143.jpeg',
  'IMG_5145.jpeg',
  'IMG_5389.HEIC',
  'IMG_6256.jpeg',
  'IMG_6386.HEIC',
  'IMG_7053.HEIC',
  'IMG_7294.JPG',
  'IMG_7769 Copy.JPG',
  'IMG_7923.HEIC',
  'IMG_7932.JPG',
  'IMG_7941.JPG',
  'IMG_8173.HEIC',
  '67461333071__15C4810F-6CF7-4E67-9604-BEB49128F885.HEIC',
  '68451696856__450A8278-4D8D-4E1D-8154-E6791AF6AF81.HEIC',
  '69722655616__35346088-DB2C-4A0F-BE2E-D189B74D933F.HEIC',
  '70337015143__5012AD3A-5895-47A1-8084-C7F25967974D.HEIC',
  '70396326482__804E45AF-31CD-4B1C-902D-5280AD4BC9F6.HEIC',
];

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav-list');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }
})();

(function () {
  var list = window.CONCRETE_JUNGLE_PHOTOS;
  var container = document.getElementById('gallery');
  if (!container || !Array.isArray(list)) return;
  // Browsers don't display HEIC (Apple format) — only show web-supported formats
  var webExtensions = /\.(jpe?g|png|gif|webp)$/i;
  var filtered = list.filter(function (filename) { return webExtensions.test(filename); });
  var base = 'Assets/photos/';
  if (filtered.length === 0) {
    container.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--fog-dark);">Add photos to <code>Assets/photos/</code> and list their filenames in <code>js/main.js</code> (CONCRETE_JUNGLE_PHOTOS array). Use JPEG, PNG, or WebP — HEIC is not supported in browsers.</p>';
    return;
  }
  filtered.forEach(function (filename) {
    var div = document.createElement('div');
    div.className = 'gallery-item';
    var img = document.createElement('img');
    img.src = base + filename;
    img.alt = 'Concrete Jungle workout';
    img.loading = 'lazy';
    img.onerror = function () { div.classList.add('broken'); };
    div.appendChild(img);
    container.appendChild(div);
  });
})();
