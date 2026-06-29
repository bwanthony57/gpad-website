(function () {
  var page = document.body.getAttribute('data-page') || '';
  var navItems = [
    { id: 'home', href: '/', label: 'Home' },
    { id: 'support', href: '/support', label: 'Support' },
    { id: 'privacy', href: '/privacy', label: 'Privacy' },
    { id: 'terms', href: '/terms', label: 'Terms' },
  ];

  function navLinksHtml() {
    return navItems
      .map(function (item) {
        var current =
          item.id === page ? ' aria-current="page"' : '';
        return (
          '<a href="' +
          item.href +
          '"' +
          current +
          '>' +
          item.label +
          '</a>'
        );
      })
      .join('\n        ');
  }

  var skipLink =
    '<a class="skip-link" href="#main-content">Skip to main content</a>';

  var header =
    '<header class="site-header">' +
    '<nav class="nav" aria-label="Main navigation">' +
    '<a class="brand" href="/">Golfer\'s Pair-A-Dice</a>' +
    '<div class="nav-links">' +
    navLinksHtml() +
    '</div></nav></header>';

  var footer =
    '<footer class="site-footer">' +
    '<div class="footer-inner">' +
    '<div>© 2026 BAGPIPER, LLC. All rights reserved.</div>' +
    '<div class="footer-links">' +
    '<a href="mailto:support@golferspairadice.com">support@golferspairadice.com</a>' +
    '<a href="/privacy">Privacy</a>' +
    '<a href="/terms">Terms</a>' +
    '</div></div></footer>';

  document.body.insertAdjacentHTML('afterbegin', skipLink + header);
  document.body.insertAdjacentHTML('beforeend', footer);
})();
