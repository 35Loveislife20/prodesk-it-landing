const icon = document.getElementById('icon');
icon.onclick = () => {
  document.body.classList.toggle('light');
  icon.innerText = document.body.classList.contains('light') ? '🌙' : '☀️';
}

const bars = document.getElementById('bars');
const nav = document.getElementById('nav');
bars.onclick = () => nav.classList.toggle('active');

document.querySelectorAll('.nav a').forEach(link => {
  link.onclick = () => nav.classList.remove('active');
})

const sections = document.querySelectorAll('div[id]');
const navLinks = document.querySelectorAll('.nav a');
const headerOffset = 90;

window.addEventListener('scroll', () => {
  let top = window.scrollY + headerOffset + 10;
  sections.forEach(sec => {
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(a => a.classList.remove('active'));
      document.querySelector('.nav a[data-target="' + id + '"]')?.classList.add('active');
    }
  })
})


const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.innerText = "Message sent successfully! We will contact you soon.";
  msg.style.color = "lightgreen";
  form.reset();
  setTimeout(() => msg.innerText = "", 3000);
})