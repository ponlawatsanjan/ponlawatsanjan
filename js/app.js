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

const dialog = document.getElementById("project-dialog");
const dialogTitle = document.getElementById("project-dialog-title");
const liveLink = document.getElementById("project-live-link");
const githubLink = document.getElementById("project-github-link");
const closeButton = dialog?.querySelector(".dialog-close");
const projectTriggers = document.querySelectorAll(".project-trigger");

projectTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    dialogTitle.textContent = trigger.dataset.projectTitle || "Project";
    liveLink.href = trigger.dataset.liveUrl || "#";
    githubLink.href = trigger.dataset.githubUrl || "#";

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    }
  });
});

closeButton?.addEventListener("click", () => dialog.close());

dialog?.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) dialog.close();
});