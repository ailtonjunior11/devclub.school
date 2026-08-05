const header = document.querySelector(".header");
const mobileMenuButton = document.querySelector(".icons__menumobile");
const mobileMenu = document.querySelector(".header__navmobile");
const mobileMenuLinks = document.querySelectorAll(".header__menumobile a");

const toggleMobileMenu = () => {
  mobileMenuButton?.classList.toggle("active");
  mobileMenu?.classList.toggle("active");
  document.body.classList.toggle("menu-open");

  if (mobileMenuButton) {
    const isExpanded = mobileMenuButton.classList.contains("active");
    mobileMenuButton.setAttribute("aria-expanded", String(isExpanded));
    mobileMenuButton.setAttribute(
      "aria-label",
      isExpanded ? "Fechar menu" : "Abrir menu",
    );
  }
};

mobileMenuButton?.addEventListener("click", toggleMobileMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuButton?.classList.remove("active");
    mobileMenu?.classList.remove("active");
    document.body.classList.remove("menu-open");

    if (mobileMenuButton) {
      mobileMenuButton.setAttribute("aria-expanded", "false");
      mobileMenuButton.setAttribute("aria-label", "Abrir menu");
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    mobileMenuButton?.classList.remove("active");
    mobileMenu?.classList.remove("active");
    document.body.classList.remove("menu-open");

    if (mobileMenuButton) {
      mobileMenuButton.setAttribute("aria-expanded", "false");
      mobileMenuButton.setAttribute("aria-label", "Abrir menu");
    }
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }
});
