const dropdownSlide = () => {
  const btn = document.querySelector("button");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".nav-links li");
  //Toggle nav
  btn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
    btn.classList.toggle("toggle");
  });
};
dropdownSlide();
