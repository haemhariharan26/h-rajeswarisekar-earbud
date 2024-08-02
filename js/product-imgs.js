(() => {
    let theButtons = document.querySelectorAll(".angle-sizes"),
        colorBoxes = document.querySelectorAll("#color-boxes > div"),
        product = document.querySelector("#product-image");

    // Changes main product Image
    function changeBGImage(event) {
        const imageFileName = event.target.getAttribute("data-image");
        const imagePath = `images/products/${imageFileName}.jpg`;

        product.innerHTML = `<img src="${imagePath}" alt="${imageFileName}">`;
    }

    // Changes all images according to color still needs some work
    // I want to eventually get it so all the images change when you select a  different color
    
    function changeAllImages(colorBoxId) {
        if (colorBoxId) {
            const mainImageFileName = `${colorBoxId}_1_398`;
            const mainImagePath = `images/products/${mainImageFileName}.jpg`;
            product.innerHTML = `<img src="${mainImagePath}" alt="${mainImageFileName}">`;

            const angleImages = document.querySelectorAll(".angle-image");
            angleImages.forEach((image, index) => {
                const imageFileName = `${colorBoxId}_${index + 1}_398`;
                const imagePath = `images/products/${imageFileName}.jpg`;
                image.src = imagePath;
            });
        }
    }

    changeAllImages(colorBoxes[0].id);

    theButtons.forEach(button => button.addEventListener("click", changeBGImage));
    colorBoxes.forEach(box => box.addEventListener("click", (e) => changeAllImages(e.target.id)));
})();
