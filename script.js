// ---------------- Dark Mode Toggle ----------------
const toggleBtn = document.getElementById("toggleDark");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ---------------- Card Animation Delay ----------------
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
    card.style.animationDelay = `${0.2 * index}s`;
});

// ---------------- Progress Bar Restart on Load ----------------
const progressBar = document.querySelector(".progress-bar");
progressBar.style.animation = "none";
setTimeout(() => {
    progressBar.style.animation = "fillBar 5s forwards";
}, 100);

// ---------------- Scroll Reveal ----------------
const scrollElements = document.querySelectorAll(".scroll-reveal");

const elementInView = (el, offset = 150) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight - offset);
};

const displayScrollElement = (element) => {
    element.classList.add("revealed");
};

window.addEventListener("scroll", () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) displayScrollElement(el);
    });
});

// ---------------- Floating Icons ----------------
const floatingIcons = document.querySelectorAll(".float-icon");
floatingIcons.forEach((icon) => {
    icon.style.animation = `floatAnim ${3 + Math.random() * 2}s ease-in-out infinite`;
});

// ---------------- Inbox Items Animation ----------------
const inboxItems = document.querySelectorAll(".email-item");
inboxItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.25}s`;
});
