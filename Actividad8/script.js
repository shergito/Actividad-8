// Animación header
gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "power4.out" });

// Animación por secciones al hacer scroll
gsap.utils.toArray(".seccion").forEach((sec) => {
    gsap.from(sec, {
        scrollTrigger: {
            trigger: sec,
            start: "top 80%",
        },
        duration: 1.2,
        y: 80,
        opacity: 0,
        ease: "power3.out"
    });
});