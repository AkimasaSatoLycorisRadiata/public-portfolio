const slideDown = (el) => {
    el.style.height = 'auto';
    let h = el.offsetHeight;
    el.animate({ height: [`0px`, `${h}px`] }, { duration: 300 });
    el.style.height = `${h}px`;
    el.setAttribute('aria-hidden', 'false');
};

const slideUp = (el) => {
    let h = el.offsetHeight;
    el.style.height = `${h}px`;
    el.animate({ height: [`${h}px`, `0px`] }, { duration: 300 });
    el.style.height = '0px';
    el.setAttribute('aria-hidden', 'true');
};

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.include-accordion');
    accordions.forEach((accordion) => {
        const btn = accordion.querySelector('.accordionBtn');
        const content = accordion.querySelector('ul');

        btn.addEventListener('click', () => {
            const isOpen = accordion.classList.toggle('active');
            isOpen ? slideDown(content) : slideUp(content);
        });
    });
});
