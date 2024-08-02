(() => {
    const canvas = document.querySelector('#earbud-scroll'),
     context = canvas.getContext("2d");
     canvas.width = 1920;
     canvas.height = 1080;
     const frameCount = 123;
     const images = [];

     const earBuds = {
        frame: 0
     };

     for (let i=0; i<frameCount; i++) {
        const img = document.createElement("img");
        img.src = `images/scroll-imgs/earbudscroll_${(i+1).toString().padStart(3, '0')}.png`
        images.push(img);
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(earBuds, {
        frame: 122,
        snap: "frame",
        scrollTrigger: {
            trigger:"#earbud-scroll",
            pin: true,
            scrub: 1,
            start: "top top",
            markers: true,
        },
        onUpdate: render
    })

    images[0].addEventListener("load", render);

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[earBuds.frame], 0, 0);
    }
})();