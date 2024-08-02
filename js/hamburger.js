(() => {
    // console.log('working')
    const button = document.querySelector("#hamburger");
    const burgerCon = document.querySelector("#main-nav");

    function hamburgerMenu() {
        // console.log("click");
        burgerCon.classList.toggle("slide-toggle");
        button.classList.toggle("menu"); 
    };


    button.addEventListener("click", hamburgerMenu, false);    

})();