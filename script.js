console.log("Portfolio website loaded successfully.");
// animate skill bars on scroll
const fills = document.querySelectorAll('.fill');

window.addEventListener('scroll', () => {
  fills.forEach(fill => {
    fill.style.width = fill.getAttribute('style').replace('width:', '');
  });
});