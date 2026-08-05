window.sr = ScrollReveal({ reset: true });

sr.reveal(".about__cards", {
  rotate: {
    y: 70,
    x: 70,
  },
  origin: "left",
  distance: "500px",
  duration: 2000,
  delay: 300,
});

sr.reveal(".about__image", {
  rotate: {
    x: 70,
    y: 70,
  },
  origin: "right",
  distance: "500px",
  duration: 2000,
  delay: 300,
});

sr.reveal(".students__header", {
  origin: "top",
  distance: "30px",
  duration: 1200,
  delay: 200,
});

sr.reveal(".student-card", {
  origin: "bottom",
  distance: "40px",
  duration: 1200,
  interval: 120,
});

sr.reveal(".students__stats", {
  origin: "bottom",
  distance: "40px",
  duration: 1200,
  delay: 400,
});

sr.reveal(".technologies__highlight", {
  origin: "bottom",
  distance: "30px",
  duration: 1100,
  delay: 200,
});

sr.reveal(".technology-card", {
  origin: "bottom",
  distance: "40px",
  duration: 1200,
  interval: 120,
});

sr.reveal(".tutors__intro, .tutor-card", {
  origin: "bottom",
  distance: "45px",
  duration: 1200,
  interval: 120,
  scale: 0.92,
  easing: "ease-out",
});

sr.reveal(".testimonial-card", {
  origin: "bottom",
  distance: "30px",
  duration: 1100,
  interval: 140,
});

sr.reveal(".cta__content, .cta-highlight", {
  origin: "bottom",
  distance: "40px",
  duration: 1200,
  interval: 120,
  scale: 0.95,
  easing: "ease-out",
});

sr.reveal(".contact__aside, .contact-form", {
  origin: "bottom",
  distance: "40px",
  duration: 1200,
  interval: 120,
  scale: 0.95,
  easing: "ease-out",
});
