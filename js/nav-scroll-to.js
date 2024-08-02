(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const navLinks = document.querySelectorAll("#main-header nav ul li a");
    const checkButton = document.querySelector('#hero a')

    function scrollLink(e) {    
        e.preventDefault(); 
        console.log(e.currentTarget.hash);
        let selectedLink = e.currentTarget.hash;
        gsap.to(window, {duration: .5, scrollTo:{y:`${selectedLink}`, offsetY:100 }});
    }

    function scrollButton(e) {
        e.preventDefault(); 
        console.log(e.currentTarget.hash);
        let selectedLink = e.currentTarget.hash;
        gsap.to(window, {duration: .5, scrollTo:{y:`${selectedLink}`, offsetY:100 }});
    }

    checkButton.addEventListener('click', scrollLink);
    
    

    navLinks.forEach((link) => {
        link.addEventListener('click', scrollButton);
    });


    })();

    