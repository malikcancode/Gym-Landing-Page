const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const sliderTrack = document.querySelector(".slider-track");
const sliderCards = document.querySelectorAll(".slider-card");

function newFunction() {
    let currentIndex = 0;
    const cardWidth = sliderCards[0].offsetWidth;

    // Function to move the slider to the left
    function slideLeft() {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSliderPosition();
    }

    // Function to move the slider to the right
    function slideRight() {
        currentIndex = Math.min(currentIndex + 1, sliderCards.length - 3.6);
        updateSliderPosition();
    }

    // Function to update the slider position
    function updateSliderPosition() {
        const translateX = -currentIndex * cardWidth;
        sliderTrack.style.transform = `translateX(${translateX}px)`;
    }

    prevButton.addEventListener("click", slideLeft);
    nextButton.addEventListener("click", slideRight);
}
newFunction();

const prevButtons = document.getElementById("prev-button-2");
const nextButtons = document.getElementById("next-button-2");
const sliderTracks = document.querySelector(".slider-track-2");
const sliderCarder = document.querySelectorAll(".slider-card-2");

function Newfunction() {
    let currentIndex = 0;
    const cardWidth = sliderCarder[0].offsetWidth;

    // Function to move the slider to the left
    function slideLeft() {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSliderPosition();
    }

    // Function to move the slider to the right
    function slideRight() {
        currentIndex = Math.min(currentIndex + 1, sliderCarder.length - 3.72);
        updateSliderPosition();
    }

    // Function to update the slider position
    function updateSliderPosition() {
        const translateX = -currentIndex * cardWidth;
        sliderTracks.style.transform = `translateX(${translateX}px)`;
    }

    // Add event listeners to the buttons
    prevButtons.addEventListener("click", slideLeft);
    nextButtons.addEventListener("click", slideRight);
}
Newfunction();

const scrollToTopButton = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


const timeliner = gsap.timeline();
timeliner
    .from(["nav", ".heading-2", ".heading-3"], {
        opacity: 0,
        duration: 1,
        y: -20,
    })


gsap.to(".heading-4", {
    scrollTrigger: {
        trigger: ".heading-4",
        scroller: "body",
        start: "top 60%",
        scrub: 1,

    },
    y: -55,
})

gsap.to(".heading-5", {
    scrollTrigger: {
        trigger: ".heading-5",
        scroller: "body",
        start: "top 80%",
        scrub: 1,

    },
    y: -60,
})
gsap.to(".heading-6", {
    scrollTrigger: {
        trigger: ".heading-6",
        scroller: "body",
        start: "top 70%",
        scrub: 1,

    },
    scale: 0.95,
})
gsap.to(".heading-7", {
    scrollTrigger: {
        trigger: ".heading-7",
        scroller: "body",
        start: "top 70%",
        scrub: 1,

    },
    y: -50,
})
gsap.to(".heading-8", {
    scrollTrigger: {
        trigger: ".heading-8",
        scroller: "body",
        start: "top 70%",
        scrub: 1,

    },
    y: -50,
})
gsap.to(".progress-bar", {
    scrollTrigger: {
        trigger: ".progress-bar",
        scroller: "body",
        start: "top 70%",
        scrub: 1,

    },
    y: -20,
})
gsap.to(".progress-bar", {
    scrollTrigger: {
        trigger: ".progress-bar",
        scroller: "body",
        start: "top 70%",
        scrub: 1,

    },
    y: -10,
})
gsap.to(".image-part", {
    scrollTrigger: {
        trigger: ".image-part",
        scroller: "body",
        start: "top 40%",
        scrub: 1,
    },
    scale: 0.9,
})
gsap.to("#newpart", {
    scrollTrigger: {
        trigger: "#newpart",
        scroller: "body",
        start: "top 60%",
        scrub: 1,
    },
    scale: 0.91,
})
gsap.to(".slider-container", {
    scrollTrigger: {
        trigger: ".slider-container",
        scroller: "body",
        start: "top 60%",
        scrub: 1,
    },
    y: -80,
})
gsap.to(".btn-part", {
    scrollTrigger: {
        trigger: ".slider-container",
        scroller: "body",
        start: "top 60%",
        scrub: 1,
    },
    y: -70,
})
gsap.to(".slider-container-2", {
    scrollTrigger: {
        trigger: ".slider-container",
        scroller: "body",
        start: "top 60%",
        scrub: 1,
    },
    y: -60,
})
gsap.to(".btn-part-2", {
    scrollTrigger: {
        trigger: ".btn-part-2",
        scroller: "body",
        start: "top 60%",
        scrub: 1,
    },
    y: -70,
})
gsap.to(".join-new", {
    scrollTrigger: {
        trigger: ".join-new",
        scroller: "body",
        start: "top 60%",
        scrub: 1,
    },
    y: -40,
})
gsap.to(".track-3", {
    scrollTrigger: {
        trigger: ".track-3",
        scroller: "body",
        start: "top 60%",
        scrub: 1,
    },
    scale: 0.90,
})
