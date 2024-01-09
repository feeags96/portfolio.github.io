/*=======================toggle icon navbar======================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navegação');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navegação.classList.toggle('active');
}

/*=======================Section active link======================*/

let sections = document.querySelectorAll('section');
let navegaçãoLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
        
    });
/*=============================== sticky navbar ===============*/
let   = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);
}

/*=============================== scroll reveal ===============*/

ScrollReveal({
     reset: true,
     distance: '80px',
     duration:2000,
     delay: 200
     });

     ScrollReveal().reveal('.inicio-content,.heading', { origin: 'top' });
     ScrollReveal().reveal('.inicio-img, .projetos-container, .contato form', { origin: 'bottom' });
     ScrollReveal().reveal('.inicio-content h1, .inicio-img', { origin: 'left' });

     /*=============================== typed js ===============*/

     const typed = new typed ('.multiple-text',{
        String: ['Frontend Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
     });