document.getElementById("year").textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll("section[id]")];
const links = [...document.querySelectorAll("nav a")];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => {
      link.style.color = link.getAttribute("href") === "#" + entry.target.id ? "#161616" : "";
    });
  });
}, { rootMargin: "-35% 0px -55%" });

sections.forEach((section) => observer.observe(section));

const visual = document.querySelector(".hero-visual");
if (visual && matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  visual.addEventListener("pointermove", (event) => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    visual.style.setProperty("--mx", x.toFixed(3));
    visual.style.setProperty("--my", y.toFixed(3));
    visual.querySelector(".visual-core").style.transform =
      "translate(calc(-50% + " + (x * 8).toFixed(1) + "px), calc(-50% + " + (y * 8).toFixed(1) + "px))";
  });
  visual.addEventListener("pointerleave", () => {
    visual.querySelector(".visual-core").style.transform = "translate(-50%,-50%)";
  });
}