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

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});