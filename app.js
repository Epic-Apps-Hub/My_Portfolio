document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');

    if (hamburger && mobile_menu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
    }

    if (header) {
        document.addEventListener('scroll', () => {
            let scroll_position = window.scrollY;
            if (scroll_position > 250) {
                header.style.backgroundColor = '#0a0a0a';
                header.style.boxShadow = '0 2px 5px rgba(0, 255, 136, 0.2)';
            } else {
                header.style.backgroundColor = 'transparent';
                header.style.boxShadow = 'none';
            }
        });
    }

    menu_item.forEach((item) => {
        item.addEventListener('click', () => {
            if (hamburger && mobile_menu) {
                hamburger.classList.toggle('active');
                mobile_menu.classList.toggle('active');
            }
        });
    });

    // Typing animation for hero section
    const texts = ['Code', 'Creates', 'Future'];
    const heroH1s = document.querySelectorAll('#hero h1');
    let index = 0;

    function typeEffect(element, text, callback) {
        let i = 0;
        element.style.color = '#00ff88';
        element.textContent = '';
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            } else {
                callback();
            }
        }
        type();
    }

    function startTyping() {
        if (index < heroH1s.length) {
            typeEffect(heroH1s[index], texts[index], () => {
                index++;
                setTimeout(startTyping, 500);
            });
        }
    }

    startTyping();
});
