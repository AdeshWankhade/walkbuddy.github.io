const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  faders.forEach(section => {
    const pos = section.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;
    if (pos < screen) {
      section.classList.add('show');
    }
  });
});
