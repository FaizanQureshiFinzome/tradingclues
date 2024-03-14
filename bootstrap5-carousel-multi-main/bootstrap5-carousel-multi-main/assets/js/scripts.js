let items = document.querySelectorAll('.carousel .carousel-item');

items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    let count = 1;

    while (count < minPerSlide) {
        if (!next) {
            // Wrap carousel by using first child
            next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
        count++;
    }
});
//This JavaScript code ensures that when the carousel
// item reaches the last value, it jumps back to the first, and if there are fewer than four items, it duplicates them to fill the carousel.