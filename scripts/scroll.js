
const navBar = document.getElementById("main-nav");
const navLinks = document.getElementsByClassName("nav-link-color");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    // Scrolled state
    navBar.style.color = "#b7ed03 !important";
    // navBar.classList.remove("bg-[#004900]/90", "border-white/10");
    // navBar.classList.add("bg-white", "border-slate-200", "shadow-md");
    for (let i = 0; i < navLinks.length; i++) {
      ele = navLinks[i];
      ele.style.color = "black";
    }
  } else {
    // Top state
    navBar.classList.remove("bg-white", "border-slate-200", "shadow-md");
    navBar.classList.add("bg-white/90", "border-white/10");
    for (let i = 0; i < navLinks.length; i++) {
      ele = navLinks[i];
      ele.style.color = "black";
    }
  }
});
