document.getElementById("year").textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll("section[id]")];
const links = [...document.querySelectorAll("nav a")];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => {
      link.style.color = link.getAttribute("href") === "#" + entry.target.id ? "#151515" : "";
    });
  });
}, { rootMargin: "-35% 0px -55%" });

sections.forEach((section) => observer.observe(section));