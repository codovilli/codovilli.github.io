document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.site-nav');
    const activeLink = nav ? nav.querySelector('[aria-current="page"]') : null;

    if (!nav || !activeLink) return;

    const target = activeLink.closest('li') || activeLink;
    const isFirstItem = !target.previousElementSibling;
    const isLastItem = !target.nextElementSibling;

    requestAnimationFrame(() => {
        if (isFirstItem) {
            nav.scrollLeft = 0;
        } else if (isLastItem) {
            nav.scrollLeft = nav.scrollWidth - nav.clientWidth;
        } else {
            target.scrollIntoView({
                behavior: 'instant',
                inline: 'center',
                block: 'nearest'
            });
        }
    });
});