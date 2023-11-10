const parallaxEl = document.querySelectorAll('.parallax');
const main = document.querySelector("main");
let xValue = 0, yValue = 0;

let rotateDegree = 0;

const update = (cursorPosition) => {
    parallaxEl.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.10;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)`;
    });
};

update(0);

window.addEventListener("mousemove", (e) => {
    
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    update(e.clientX);
});

if(window.innerWidth >= 725){
    main.style.maxHeight = `${window.innerWidth * 0.6}px`
} else {
    main.style.maxHeight = `${window.innerWidth * 1.6}px`

}

// using GSAP for its timeline feature
let timeline = gsap.timeline();

timeline.from('.bg-img', {
    // cancel -50% translateY
    top: `${+document.querySelector('.bg-img').offsetHeight / 2 - 200}px`,
    duration: 1.5,
    ease: "power3.out"
})

timeline.from(".text h1", {
    y: window.innerHeight - document.querySelector('.text h1').getBoundingClientRect().top + 300,
    opacity: 0,
    duration: 2,
}, "1");

