document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
<button id="themeToggle">Toggle Theme</button>

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
});
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    const name = document.querySelector('input[name="Name"]').value.trim();
    const email = document.querySelector('input[name="Email"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all the fields!');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address!');
    } else {
        alert('Form submitted successfully!');
    }
});
let index = 0;
const cards = document.querySelectorAll('.project-card');

function showCards() {
    cards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
    index = (index + 1) % cards.length;
}

setInterval(showCards, 3000);
