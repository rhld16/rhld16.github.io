document.addEventListener("DOMContentLoaded", function(){
    new SweetScroll({}),
    particlesJS("particles-js", {
        particles: {
            number: { value: 30, density: { enable: 1, value_area: 800 } },
            opacity: { value: 0.5, random: 0, anim: { enable: 0, speed: 1, opacity_min: 0.1, sync: 0 } },
            size: { value: 3, random: 1, anim: { enable: 0, speed: 19.18081918081918, size_min: 0.1, sync: 0 } },
            line_linked: { enable: 1, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: 1, speed: 4, direction: "none", random: 1, straight: 0, out_mode: "out", bounce: 0, attract: { enable: 0, rotateX: 600, rotateY: 1200 } },
            nb: 80,
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: 1, mode: "grab" }, onclick: { enable: 1, mode: "push" }, resize: 1 },
            modes: {
                grab: { distance: 200, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            },
        },
        retina_detect: 1,
    });
});