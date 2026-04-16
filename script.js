document.addEventListener("DOMContentLoaded", function () {
  const header   = document.getElementById("site-header");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section");
  const yearEl   = document.getElementById("year");

  // Set current year in footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Smooth scrolling ──────────────────────────────────────
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      // Use scrollIntoView for reliable scrolling
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // ── Header shadow on scroll ───────────────────────────────
  window.addEventListener("scroll", onScroll, { passive: true });

  function onScroll() {
    // Toggle scrolled class for box-shadow
    header.classList.toggle("scrolled", window.scrollY > 10);

    // Highlight active nav link based on current section
    let current = "";
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - header.offsetHeight - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + current
      );
    });
  }

  // Run once on load to set initial active state
  onScroll();

  // ── Contact form (basic) ──────────────────────────────────
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = form.querySelector(".form-submit");
      btn.textContent = "Message sent!";
      btn.disabled = true;
      btn.style.background = "#0d9488";
      // Reset after 3s
      setTimeout(() => {
        btn.textContent = "Send Message";
        btn.disabled = false;
        btn.style.background = "";
        form.reset();
      }, 3000);
    });
  }
});