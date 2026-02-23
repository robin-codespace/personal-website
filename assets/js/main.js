const textElement = document.querySelector('.text');
if (textElement) {
    const texts = JSON.parse(textElement.dataset.text);
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex-1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex+1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause longer when complete
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500); // Pause before typing new word
        } else {
            setTimeout(type, isDeleting ? 40 : 80); // Slightly faster typing for premium feel
        }
    }

    type();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
