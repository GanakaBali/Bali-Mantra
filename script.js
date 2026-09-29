const experiences = [
  {
    number: '01',
    title: 'Trimala Ghanta Purification',
    description: 'Sacred purification through three holy waters.',
    status: 'Coming soon',
  },
  {
    number: '02',
    title: 'Astha Murthi Ghanta Yoga',
    description: 'A spiritual yoga experience focused on body, breath and awareness.',
    status: 'Coming soon',
  },
  {
    number: '03',
    title: 'Private Spiritual Journey',
    description: 'A personalized spiritual experience in Bali.',
    status: 'Enquire with us',
    featured: true,
  },
];

const experienceGrid = document.getElementById('experience-grid');
experienceGrid.innerHTML = experiences.map((experience) => `
  <article class="experience-card reveal ${experience.featured ? 'available' : ''}">
    <span class="card-index">${experience.number}</span>
    <h3>${experience.title}</h3>
    <p>${experience.description}</p>
    <span class="coming">${experience.status} ${experience.featured ? '↗' : '—'}</span>
  </article>
`).join('');

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 24);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  mainNav.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    mainNav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('form-note').textContent = 'Thank you for your interest. This enquiry form is a design preview and is not connected to a booking service yet.';
});
