document.addEventListener("DOMContentLoaded", () => {
    const fadeIn = document.getElementById("fade-in");
    if (!fadeIn) return;

    fadeIn.style.opacity = "0";
    fadeIn.style.transition = "opacity 1s ease-in-out";

    requestAnimationFrame(() => {
        fadeIn.style.opacity = "1";
    });
});
