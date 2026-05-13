const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const copyButton = document.querySelector("[data-copy-email]");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.16
});

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }

        navItems.forEach((item) => {
            item.classList.toggle("is-active", item.getAttribute("href") === `#${entry.target.id}`);
        });
    });
}, {
    rootMargin: "-45% 0px -45% 0px"
});

document.querySelectorAll("main section[id]").forEach((section) => {
    sectionObserver.observe(section);
});

if (copyButton) {
    copyButton.addEventListener("click", async () => {
        const email = copyButton.dataset.copyEmail;
        const label = copyButton.querySelector("span");
        const originalText = label.textContent;

        try {
            await navigator.clipboard.writeText(email);
            label.textContent = "복사됨";
        } catch {
            window.location.href = `mailto:${email}`;
        }

        window.setTimeout(() => {
            label.textContent = originalText;
        }, 1600);
    });
}
