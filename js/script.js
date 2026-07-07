// add breakpoints --> hero section 
window.addEventListener('load', function(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const lineBreak = document.getElementById('linebreak'); 
    const space = '&nbsp'; 
    const brk = '<br>';
    // console.log(width);

    if (width > 1310){
        lineBreak.innerHTML = space;
    }
    if (width > 770 && width <= 1310){
        lineBreak.innerHTML = brk;
    }
    if (width > 630 && width <= 770){
        lineBreak.innerHTML = space;
    }
    if (width <= 630){
        lineBreak.innerHTML = brk;
    }
})

// modify border --> areas of interest 
function modifyBorder_experience() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    // console.log(width); 

    if (width < 995){
        var textSection = document.getElementsByClassName('text-wrapper');
        for (let i = 0; i < textSection.length; i++){
            textSection[i].classList.remove('border-right');
            textSection[i].classList.add('border-bottom'); 
            textSection[i].classList.add('pb-3'); 
        } 
    }
}

// modify gradient --> contact section 
window.addEventListener('scroll', function(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    var fullTimeSection = document.getElementById('fullTimeSection');
    fullTimeSection.style = "";

    if (width <= 770){
        fullTimeSection.style.background = "linear-gradient(0deg, var(--primaryColor), #e42d3315), url('images/contact/nature.webp') no-repeat";
        fullTimeSection.style.backgroundSize = "cover";
        fullTimeSection.style.backgroundPosition = "center";
    }
    
    else{
        fullTimeSection.style.background = "linear-gradient(270deg, var(--primaryColor), #e42d3315), url('images/contact/nature.webp') no-repeat";
        fullTimeSection.style.backgroundSize = "cover";
        fullTimeSection.style.backgroundPosition = "center";
    }
})

// image duplicate --> prev experience 
function duplicateExperience() {
    // for logos slider 
    let slide = document.querySelector('.logos-slide');
    let parent = document.querySelector('.logos');
    if (slide && parent) {
        let logos = slide.cloneNode(true);
        parent.appendChild(logos);
    }
}

// drop down icon change --> accordion
function changeDropIcon() {
    var accordionItems = document.getElementsByClassName('accordion-list-item');
    for (let i = 0; i < accordionItems.length; i++){
        if (accordionItems[i].getElementsByClassName('accordion-drop-down-radio-button')[0].checked){
            accordionItems[i].getElementsByClassName("accordionDropDown")[0].src = "images/iconpack/accordion-arrow-down.svg";
        }
        else {
            accordionItems[i].getElementsByClassName("accordionDropDown")[0].src = "images/iconpack/accordion-arrow-right.svg";
        }
    }
}

// class scroller class --> books 
function addScrollerClass(){
    
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (width <= 772){
        var leftScroll = document.querySelector('.scrolling-column').getElementsByClassName('image-container');
        for (let i = 0; i < leftScroll.length; i++){
            leftScroll[i].classList.add('scroll-left');
        }

        var booksColumn = document.querySelector('.books-columns').getElementsByClassName('image-container');
        for (let i = 0; i < booksColumn.length; i++){
            booksColumn[i].classList.add('scroll-right');
        }
    }

    return false;
}

// books scroller --> books section
window.addEventListener('scroll', function() {

    var section = document.querySelector('.books-section');
    var scrollingColumns = document.querySelector('.scrolling-columns');
    var sectionOffsetTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var windowScrollTop = window.pageYOffset;
    var windowHeight = window.innerHeight;

    addScrollerClass(); 

    var scrollLeft = document.getElementsByClassName('scroll-left');
    var scrollRight = document.getElementsByClassName('scroll-right');

    var scrollTriggerOffset = 100; // Adjust this value as needed

    if (windowScrollTop > sectionOffsetTop - windowHeight + scrollTriggerOffset && windowScrollTop < sectionOffsetTop + sectionHeight) {
        if (scrollLeft.length != 0){
            for (let i = 0; i < scrollLeft.length; i++){
                scrollLeft[i].style.transform = 'translateX(-' + (windowScrollTop - sectionOffsetTop + scrollTriggerOffset) / 2 + 'px)';
            }

            for (let i = 0; i < scrollRight.length; i++){
                scrollRight[i].style.transform = 'translateX(' + (windowScrollTop - sectionOffsetTop + scrollTriggerOffset) / 2 + 'px)';
            }

        } else{
            scrollingColumns.style.overflow = 'visible';
            scrollingColumns.style.transform = 'translateY(-' + (windowScrollTop - sectionOffsetTop + scrollTriggerOffset) / 2 + 'px)';
        }
    } else {
        scrollingColumns.style.transform = 'translateY(-1)';
    }
});

// auto increment hero-section --> hero section
const counters = document.querySelectorAll('.counter');
const speed = 1000;

counters.forEach( counter => {
   const animate = () => {
        const value = +counter.getAttribute('data-target');
        const data = +counter.innerText;
        
        const time = value / speed;
        if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        }
        else{
            counter.innerText = value;
        }
    }

   animate();
});

// about section hover effect 
const images = document.querySelectorAll('.image-box');

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        images.forEach((img) => {
            img.classList.remove('active');
        });
        image.classList.add('active');
    });
});

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        images.forEach((img) => {
            img.classList.remove('active');
        });
        image.classList.add('active');
    });
});

images[images.length - 1].addEventListener('mouseout', () => {
    images.forEach((image) => {
        image.classList.remove('active');
    });
    images[0].classList.add('active');
});

let activeImage = images[0];

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        images.forEach((img) => {
            img.classList.remove('active');
        });
        image.classList.add('active');
        activeImage = image;
    });
});

images[images.length - 1].addEventListener('mouseout', () => {
    images.forEach((image) => {
        image.classList.remove('active');
    });
    activeImage.classList.add('active');
});

// circular text 
const text = document.getElementById('circle-text'); 
const rotate = new CircleType(text).radius(50); 

window.addEventListener('scroll', function() {
    text.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)'
})

// testimonial scroller  
const productContainers = [...document.querySelectorAll('.testimonial-card-container')];
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
const leftButton = [...document.querySelectorAll('.left-button')];
const rightButton = [...document.querySelectorAll('.right-button')];

productContainers.forEach((item, i) => {
    var card = item.getElementsByClassName('testimonial-slider-card'); 
    // console.log(card[0]);
    let containerDimensions = card[0].getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    leftButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth+40;
    })

    rightButton[i].addEventListener('click', () => {
        item.scrollLeft += (containerWidth+40)*0.99;
    })
})

// back to top button 
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// hover content update --> about section
function checkhover(){
    const subtitle = [
        "M.Sc AI & ML Milestone", 
        "Football with Friends", 
        "Summiting the Peaks", 
        "KKR Match Day", 
        "Road Trips & Riding"
    ]; 

    const paraText = [
        "Completing my post-graduation in Data Science and continuing with AI & ML at Christ University has been an amazing journey of academic rigour, research, and lifelong friendships.",
        "Nothing matches the joy of hitting the turf with friends for a fast-paced game. Football has always been more than a sport to me—it's a shared passion that brings us together, keeps us active, and fuels my lifelong love for the game.",
        "Trekking high altitudes has taught me that the hardest climbs yield the best views. Resilience, endurance, and navigation translate directly from mountain trails to debugging complex code.",
        "Nothing matches the electric energy of Eden Gardens. As an avid cricket fan, analyzing match stats in real-time is a hobby that keeps my data science mind sharp even during play.",
        "Riding my motorcycle on long highway journeys allows me to unplug, explore new towns, and recharge. It's about the freedom of the open road and the curiosity to explore what lies ahead."
    ];

    const aboutSection = document.querySelectorAll('.about-section .image-box'); 
    const story = document.querySelector('.about-section .about-section-description-text .about-section-story');
    const subtitleText = document.querySelector('.about-section .about-section-description-text .section-subtitle');

    for (let i = 0; i < aboutSection.length; i++){
        if (aboutSection[i].matches(":hover")){
            subtitleText.innerHTML = subtitle[i];
            story.innerHTML = paraText[i];
        }
    }
}

// Experience slider controls
let currentExpIndex = 0;
let autoSlideInterval;

function showExperience(index) {
    const slides = document.querySelectorAll('.experience-slide');
    const container = document.querySelector('.experience-slides');
    if (slides.length === 0 || !container) return;
    
    if (index >= slides.length) {
        currentExpIndex = 0;
    } else if (index < 0) {
        currentExpIndex = slides.length - 1;
    } else {
        currentExpIndex = index;
    }

    container.style.transform = `translateX(-${currentExpIndex * 100}%)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showExperience(currentExpIndex + 1);
    }, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Initialize auto slide with pause-on-hover
window.addEventListener('load', () => {
    startAutoSlide();
    const card = document.querySelector('.current-experience');
    if (card) {
        card.addEventListener('mouseenter', stopAutoSlide);
        card.addEventListener('mouseleave', startAutoSlide);
    }
});

// Project Card Horizontal Scroller
window.addEventListener('DOMContentLoaded', () => {
    const projectContainers = document.querySelectorAll('.project-card-container');
    const projectLeftBtn = document.querySelector('.project-scroll-btn.project-left');
    const projectRightBtn = document.querySelector('.project-scroll-btn.project-right');

    if (projectContainers.length > 0 && projectLeftBtn && projectRightBtn) {
        const getScrollAmount = () => {
            const firstCard = projectContainers[0].querySelector('.project-card');
            return firstCard ? firstCard.clientWidth + 24 : 450; // Card width + margin-right
        };

        projectLeftBtn.addEventListener('click', () => {
            projectContainers.forEach(container => {
                container.scrollBy({
                    left: -getScrollAmount(),
                    behavior: 'smooth'
                });
            });
        });

        projectRightBtn.addEventListener('click', () => {
            projectContainers.forEach(container => {
                container.scrollBy({
                    left: getScrollAmount(),
                    behavior: 'smooth'
                });
            });
        });
    }
});

// runAll initialization function
function runAll() {
    duplicateExperience();
    modifyBorder_experience();
}