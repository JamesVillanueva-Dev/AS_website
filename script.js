/* =========================================================
   AS Student Life — script
   Progressive enhancement: the page works fully without this file.
   It only adds the cat mascot's pop-up animation, and only in
   browsers that support IntersectionObserver. Otherwise the cat
   just stays visible on top of the footer.
   ========================================================= */

const mascotFigure = document.querySelector('[data-mascot]');
const siteFooter = document.querySelector('.site-footer');

if (mascotFigure && siteFooter && 'IntersectionObserver' in window) {
  // Hide the cat "underwater" so it can pop up later (see .mascot--animated in styles.css)
  mascotFigure.classList.add('mascot--animated');

  // Watch the footer: pop the cat up when it's on screen, tuck it back down when it leaves
  const footerVisibilityObserver = new IntersectionObserver(
    ([footerEntry]) => {
      mascotFigure.classList.toggle('is-peeking', footerEntry.isIntersecting);
    },
    { threshold: 0.3 } // At least 30% of the footer must be visible
  );

  footerVisibilityObserver.observe(siteFooter);
}
