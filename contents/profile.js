// アコーディオン開閉アニメーション

const slideDown = (el) => {
    el.style.display = 'block';
    let height = el.scrollHeight;
    el.style.height = '0px';
    requestAnimationFrame(() => {
        el.style.transition = 'height 0.3s ease';
        el.style.height = height + 'px';
        el.setAttribute('aria-hidden', 'false');
    });
};

const slideUp = (el) => {
    let height = el.scrollHeight;
    el.style.height = height + 'px';
    requestAnimationFrame(() => {
        el.style.transition = 'height 0.3s ease';
        el.style.height = '0px';
        el.setAttribute('aria-hidden', 'true');
    });
};

document.querySelectorAll('.accordionBtn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        if (content.getAttribute('aria-hidden') === 'true') {
            slideDown(content);
        } else {
            slideUp(content);
        }
    });
});
