const toggleIcon = document.querySelector('.toggle-icon');
const navLinks = document.querySelector('.navbar ul');

toggleIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('nav ul li a ').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
          });
      }
  });
});