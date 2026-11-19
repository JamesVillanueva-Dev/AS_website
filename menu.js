const menuButton = document.querySelector('.site-nav button');

// The button starts hidden so the menu stays open and usable if this script never runs.
menuButton.hidden = false;
menuButton.setAttribute('aria-expanded', 'false');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
});
