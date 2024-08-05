 // parallax scrolling
    {
        let text = document.getElementById('text-parallax');
        let pic = document.getElementById('parallax_cat')
        window.addEventListener('scroll',() => {
            let value = window.scrollY;

            text.style.marginTop = value * 2.5 +'px';
            pic.style.marginTop = value * 1.5 + 'px';
        });
    }

// intro
    {
        const introText = document.querySelector('.intro-text');
        const introImage = document.querySelector('.intro img');
        window.addEventListener('scroll', () => {
        const introPosition = introText.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        if (introPosition < screenPosition) {
            introText.classList.add('visible');
            introImage.classList.add('visible');
        }
    });
    }

//main
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item-main');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1 // Adjust based on when you want to trigger the animation
    });

    items.forEach(item => {
      observer.observe(item);
    });
  });
// card
    {
        const cards = document.querySelectorAll('.card__article');
        const showCardsOnScroll = () => {
        const triggerBottom = window.innerHeight / 1.3;
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 300); 
            }
        });
    };
        window.addEventListener('scroll', showCardsOnScroll);
        window.addEventListener('DOMContentLoaded', showCardsOnScroll);
    }
    
    //  wake_cat
    {
        const wakecat = document.querySelector("#wake_cat");
        const btn = document.querySelector("#btn");
        const counter = document.querySelector("#counter");
    
        const wakeImg = "/source/datapop//wake.png";
        const sleepImg = "/source/datapop/sleep.png";
    
        btn.addEventListener("mousedown", wake);
        btn.addEventListener("mouseup", sleep);
    
        let clickCount = 0;
        btn.addEventListener("touchstart", function(e) {
            e.preventDefault();
            wake()
        })
    
        btn.addEventListener("touchend", function(e) {
            e.preventDefault();
            sleep()
        })
    
        
        function wake() {
            wakecat.src = wakeImg;
            incrementCounter();
        }
        function sleep() {
            wakecat.src = sleepImg;
        }
        function incrementCounter() {
            clickCount++;
            counter.textContent = clickCount;
        }
    }

    // datapop
    const wrapper = document.querySelector('.wrapper');
    const showWrapperOnScroll = () => {
    const triggerBottom = window.innerHeight / 1.3;
    const wrapperTop = wrapper.getBoundingClientRect().top;

    if (wrapperTop < triggerBottom) {
        wrapper.classList.add('visible');
    }
};

    window.addEventListener('scroll', showWrapperOnScroll);
    window.addEventListener('DOMContentLoaded', showWrapperOnScroll);

    // text
    const sections = document.querySelectorAll('.contain');

    const observerOptions = {
        root: null,
        threshold: 0.8 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section); 
    });
    
    // type
    {
        const typed = new Typed('.multiple-text', {
        strings: ['Computer Engineering','Cat Lover'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay:1000,
        loop: true,
    })
    }

  
    // about
    {
        const aboutSection = document.querySelector('.about');
        const showAboutOnScroll = () => {
        const triggerBottom = window.innerHeight / 1.3;
        const aboutTop = aboutSection.getBoundingClientRect().top;

        if (aboutTop < triggerBottom) {
            aboutSection.classList.add('visible');
        }
        };

        window.addEventListener('scroll', showAboutOnScroll);
        window.addEventListener('DOMContentLoaded', showAboutOnScroll);
    }

    // contact
    {
        const contactLeft = document.querySelector('.contact-left');

        const showContactOnScroll = () => {
          const triggerBottom = window.innerHeight / 1.3;
          const contactTop = contactLeft.getBoundingClientRect().top;
        
          if (contactTop < triggerBottom) {
            contactLeft.classList.add('visible');
          }
        };
        
        window.addEventListener('scroll', showContactOnScroll);
        window.addEventListener('DOMContentLoaded', showContactOnScroll); 
    }

