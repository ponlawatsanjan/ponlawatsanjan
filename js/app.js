document.getElementById("year").textContent=new Date().getFullYear();
const sections=[...document.querySelectorAll("section[id]")];
const links=[...document.querySelectorAll("nav a")];
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.style.color=a.getAttribute("href")==="#"+e.target.id?"#f2f4f7":"")}})},{rootMargin:"-35% 0px -55%"});
sections.forEach(s=>observer.observe(s));