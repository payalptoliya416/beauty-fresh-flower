// --count 
let count = document.querySelectorAll(".count");

count.forEach((item) => {
  let target = parseInt(item.dataset.number); // target number
  let current = 0;
  let increment = Math.ceil(target / 100); // Adjust this to control speed

  let stop = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(stop);
    }

    // Add "+" at the end if needed
    item.innerHTML = current + "+";
  }, 50);
});



// ---owl carousel -for Discover our best-selling item

$('.testimonial-carousel').owlCarousel({
    loop: false,
    margin: 63,
    nav: false,
    dots: true,
    autoplay: true,              
    autoplayTimeout: 2000, 
    autoplayHoverPause: true, 
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.selling-carousel').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    // autoplay: true,              
    // autoplayTimeout: 2000, 
    // autoplayHoverPause: true, 
    responsive: {
        0:{
            items: 1
        },
        375: {
            items: 1.4
        },
        575: {
            items: 2.5
        },
        991: {
            items: 3
        },
        1199: {
            items: 4
        }
    }
});

// ---responsive navbar close icon
document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.querySelector(".close-nav");
    const navbarCollapse = document.getElementById("navbarSupportedContent");

    closeBtn.addEventListener("click", function () {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  }); 

//   ---button animation
const buttons = document.querySelectorAll('.hero-info .btn ,.submit-btn .btn');

buttons.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--hover-x', `${x}px`);
    btn.style.setProperty('--hover-y', `${y}px`);
  });
});

// ---  AOS animation
AOS.init();
AOS.init({

    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false, 
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99, 
    
    offset: 80, 
    delay: 0, 
    duration: 1000,
    easing: 'ease-in-out', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
  
  });
