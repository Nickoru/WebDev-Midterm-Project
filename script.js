document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const pageContainer = document.querySelector('.page-container');

    if (hamburgerBtn && mobileMenu && closeMenuBtn) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        document.addEventListener('click', (event) => {
            if (
                mobileMenu.classList.contains('active') &&
                !mobileMenu.contains(event.target) &&
                event.target !== hamburgerBtn &&
                !hamburgerBtn.contains(event.target)
            ) {
                mobileMenu.classList.remove('active');
            }
        });

        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    const toggleSwitches = document.querySelectorAll('.toggle-switch');

    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            const isActive = toggle.classList.contains('active');
            console.log('Toggle is now:', isActive ? 'ON' : 'OFF');
            const icon = toggle.previousElementSibling;
            if (icon && icon.classList.contains('action-icon')) {
                icon.style.opacity = isActive ? '1' : '0.5';
            }
        });
    });
});
