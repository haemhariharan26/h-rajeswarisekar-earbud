(() => {
    let imageSlider = document.querySelector('#imageSlider'),
    drag = document.querySelector('#image-drag'),
    left = document.querySelector('#image-left'),
    dragging = false,
    min = 0,
    max = imageSlider.offsetWidth;

    function onDown() {
        dragging = true;
    }

    function onUp() {
        dragging = false;
    }

    function onMove(event) {
        if(dragging) {
            let x = event.clientX - imageSlider.getBoundingClientRect().left;

            if(x < min) {
                x = min;
            }
                else if(x > max) {
                    x = max-8;
                }

            drag.style.left = x + "px";
            left.style.width = x + "px";
        }
    }

    drag.addEventListener('mousedown', onDown);
    document.body.addEventListener('mouseup', onUp);
    document.body.addEventListener('mousemove', onMove);
})();

