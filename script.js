
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const cursorGlow = document.getElementById("cursorGlow");
  const heroVisual = document.getElementById("heroVisual");
  const backTop = document.getElementById("backTop");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  // 1. Cinematic loading screen
  document.body.classList.add("loading");

  function hideLoader() {
    if (!loader) return;

    loader.classList.add("hidden");
    document.body.classList.remove("loading");
  }

  window.addEventListener("load", hideLoader, { once: true });

  // Fallback if some external resources load slowly
  const loaderFallback = window.setTimeout(hideLoader, 2500);

  if (document.readyState === "complete") {
    window.clearTimeout(loaderFallback);
    hideLoader();
  }

  // 2. Mobile navigation
  function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("open", !isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (
      navLinks.classList.contains("open") &&
      !navLinks.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // 3. Scroll-based navigation and back-to-top button
  let scrollTicking = false;

  function updateScrollUI() {
    const scrollY = window.scrollY;

    navbar.classList.toggle("scrolled", scrollY > 35);
    backTop.classList.toggle("visible", scrollY > 500);

    updateActiveLink();

    scrollTicking = false;
  }

  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateScrollUI);
      scrollTicking = true;
    }
  }, { passive: true });

  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 4. Reveal elements when they enter the viewport
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    });

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  // 5. Highlight the navigation link for the visible section
  const sections = document.querySelectorAll("main section[id]");
  const navItems = document.querySelectorAll(".nav-link");

  function updateActiveLink() {
    let currentSection = "home";
    const marker = window.scrollY + window.innerHeight * 0.32;

    sections.forEach((section) => {
      if (section.offsetTop <= marker) {
        currentSection = section.id;
      }
    });

    navItems.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentSection}`;

      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  updateScrollUI();

  // 6. Subtle cursor-following ambient light
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (finePointer && !reduceMotion && cursorGlow) {
    let glowX = -500;
    let glowY = -500;
    let targetX = -500;
    let targetY = -500;

    window.addEventListener("pointermove", (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    }, { passive: true });

    function animateGlow() {
      glowX += (targetX - glowX) * 0.12;
      glowY += (targetY - glowY) * 0.12;

      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;

      window.requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }

  // 7. Gentle 3D tilt on the hero image
  if (heroVisual && finePointer && !reduceMotion) {
    heroVisual.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;

      const bounds = heroVisual.getBoundingClientRect();

      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;

      const rotateY = (x - 0.5) * 5;
      const rotateX = (0.5 - y) * 5;

      heroVisual.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroVisual.addEventListener("pointerleave", () => {
      heroVisual.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  }

  // 8. Collection cards select a style and prefill the enquiry
  const collectionCards = document.querySelectorAll("[data-collection]");
  const messageField = document.getElementById("message");

  collectionCards.forEach((card) => {
    card.addEventListener("click", () => {
      const collection = card.dataset.collection;

      if (messageField && collection) {
        messageField.value = `I'm interested in the ${collection} collection.`;
      }
    });
  });

  // 9. Contact form demo
  // Connect a real email service or backend before publishing.
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const occasion = String(formData.get("occasion") || "");
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !occasion) {
      formStatus.textContent = "Please complete the required fields.";
      return;
    }

    const subject = encodeURIComponent(
      `VELORA enquiry — ${occasion}`
    );

    const body = encodeURIComponent(
      `Hello VELORA,\n\n` +
      `My name is ${name}.\n` +
      `Email: ${email}\n` +
      `Occasion: ${occasion}\n\n` +
      `Message: ${message || "I'd love to explore your collections."}\n`
    );

    // Replace this placeholder with the business's real email.
    const businessEmail = "your-email@example.com";

    if (businessEmail === "your-email@example.com") {
      formStatus.textContent =
        "The design is ready! Configure your business email in script.js to receive enquiries.";
      return;
    }

    formStatus.textContent = "Opening your email application...";

    window.location.href =
      `mailto:${businessEmail}?subject=${subject}&body=${body}`;
  });

  // 10. Automatically update the footer year
  document.getElementById("year").textContent =
    new Date().getFullYear();
});
