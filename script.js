let icon = document.getElementById("icon");

icon.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("active");
  if (document.querySelector("body").className == "active") {
    icon.className = "fa-solid fa-sun"
  } else {
    icon.className = "fa-solid fa-moon"
  }
})

const bars = document.getElementById("bars");
const nav = document.getElementById("nav");

bars.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('#home, #about, #services, #contact');

function showSection(targetId) {
  sections.forEach(section => {
    section.style.display = section.id === targetId ? 'block' : 'none';
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('data-target');
    showSection(targetId);
    nav.classList.remove('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

showSection('home');