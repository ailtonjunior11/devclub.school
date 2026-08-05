// Hero Particles
const particlesContainer = document.querySelector(".hero__particles");

const totalParticles = 40;

for (let i = 0; i < totalParticles; i++) {
  const particle = document.createElement("span");
  particle.classList.add("particle");
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";
  particle.style.width = Math.random() * 4 + 2 + "px";
  particle.style.height = particle.style.width;
  particle.style.animationDuration = Math.random() * 6 + 4 + "s";
  particle.style.animationDelay = Math.random() * 5 + "s";
  particlesContainer.appendChild(particle);
} // No código acima, selecionamos o contêiner de partículas e criamos 40 elementos <span> representando partículas. Cada partícula recebe uma posição aleatória dentro do contêiner, um tamanho aleatório entre 2 e 6 pixels, e uma duração e atraso de animação aleatórios. As partículas são então adicionadas ao contêiner, criando um efeito visual dinâmico.

// Count Animation
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const target = Number(counter.dataset.target);
  const suffix = counter.dataset.suffix || "";

  let current = 0;

  const increment = target / 80;

  const updateCounter = () => {
    current += increment;

    if (current < target) {
      if (target >= 1000) {
        counter.textContent =
          Math.floor(current).toLocaleString("pt-BR") + suffix;
      } else {
        counter.textContent = Math.floor(current) + suffix;
      }

      requestAnimationFrame(updateCounter);
    } else {
      if (target >= 1000) {
        counter.textContent = target.toLocaleString("pt-BR") + suffix;
      } else {
        counter.textContent = target.toLocaleString("pt-BR") + suffix;
      }
    }
  };

  updateCounter();
}); // No código acima, selecionamos todos os elementos com a classe "counter" e iteramos sobre eles. Para cada contador, obtemos o valor alvo (target) e o sufixo (se houver). Em seguida, usamos uma função recursiva chamada updateCounter para incrementar o valor atual do contador até atingir o valor alvo. A função requestAnimationFrame é usada para criar uma animação suave. Se o valor alvo for maior ou igual a 1000, formatamos o número com separadores de milhar usando toLocaleString("pt-BR"). Caso contrário, apenas exibimos o número inteiro. O sufixo é adicionado ao final do valor exibido.

// Formation Card Mouse Move Effect
const formationCards = document.querySelectorAll(".formation-card");

formationCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
}); // No código acima, adicionamos um evento de mousemove a cada card de formação. Quando o mouse se move sobre o card, calculamos a posição do mouse em relação ao card e atualizamos as variáveis CSS --mouse-x e --mouse-y. Essas variáveis podem ser usadas no CSS para criar efeitos visuais baseados na posição do mouse, como gradientes ou sombras dinâmicas.

// Form
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const contactFields = contactForm.querySelectorAll("input, textarea");

  const getErrorMessage = (field) => {
    if (field.validity.valueMissing) {
      return "Preencha este campo.";
    }

    if (field.type === "email" && field.validity.typeMismatch) {
      return "Digite um e-mail válido.";
    }

    if (field.type === "tel" && field.validity.patternMismatch) {
      return "Digite um telefone no formato correto.";
    }

    return "Campo inválido.";
  };

  const validateField = (field) => {
    const errorElement = document.getElementById(
      `error-${field.id.split("contact-")[1]}`,
    );

    if (field.checkValidity()) {
      field.classList.remove("invalid");
      field.removeAttribute("aria-invalid");
      if (errorElement) {
        errorElement.textContent = "";
      }
    } else {
      field.classList.add("invalid");
      field.setAttribute("aria-invalid", "true");
      if (errorElement) {
        errorElement.textContent = getErrorMessage(field);
      }
    }
  };

  contactFields.forEach((field) => {
    field.addEventListener("input", () => validateField(field));
    field.addEventListener("blur", () => validateField(field));
  });

  contactForm.addEventListener("submit", (event) => {
    let isValid = true;

    contactFields.forEach((field) => {
      validateField(field);
      if (!field.checkValidity()) {
        isValid = false;
      }
    });

    if (!isValid) {
      event.preventDefault();
      const firstInvalid = contactForm.querySelector(".invalid");
      firstInvalid?.focus();
    }
  });
}
