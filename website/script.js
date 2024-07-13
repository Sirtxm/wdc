 // parallax scrolling
{
    document.addEventListener('DOMContentLoaded', () => {
        let text = document.getElementById('text');
        let footer = document.querySelector('footer');
        
        window.addEventListener('scroll', () => {
            let value = window.scrollY;
            let maxScroll = footer.offsetTop - window.innerHeight;
    
            if (value * 2.5 <= maxScroll) {
                text.style.marginTop = `${value * 2.5}px`;
            } else {
                text.style.marginTop = `${2250}px`;
            }
        });
    });}
    
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

    // type
   const typed = new Typed('.multiple-text', {
    strings: ['Computer Engineering','Web Design'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay:1000,
    loop: true,
   })