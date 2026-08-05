const companiesCarousel = document.querySelector(".companies__carousel");
const companiesTrack = document.querySelector(".companies__carousel-track");

if (companiesCarousel && companiesTrack) {
  const pauseAnimation = () => {
    companiesTrack.style.animationPlayState = "paused";
  };

  const resumeAnimation = () => {
    companiesTrack.style.animationPlayState = "running";
  };

  companiesCarousel.addEventListener("mouseenter", pauseAnimation);
  companiesCarousel.addEventListener("mouseleave", resumeAnimation);
  companiesCarousel.addEventListener("touchstart", pauseAnimation, {
    passive: true,
  });
  companiesCarousel.addEventListener("touchend", resumeAnimation);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    companiesTrack.style.animation = "none";
  }
}
