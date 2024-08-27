
const fullScreenText = document.querySelector('.full-screen-text');
const elements = document.querySelectorAll('.element');
const h1 = document.querySelector('.text-container h1');
const h2 = document.querySelector('.text-container h2');

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const progress = scrollY / (documentHeight - viewportHeight); // Calculate progress based on total scroll

    elements.forEach(element => {
        let elementProgress = 0;

        if (element.classList.contains('browser')) {
            elementProgress = Math.min(Math.max(progress / 0.2, 0), 1); // Browser responds to the first 20% of scroll
            element.style.transform = `translateX(-50%) scale(${0.5 + elementProgress * 0.5})`;
        } else if (element.classList.contains('crane-left')) {
            elementProgress = Math.min(Math.max((progress - 0.2) / 0.2, 0), 1); // Left crane appears after 20% of scroll
            element.style.transform = `translateX(${(elementProgress * 100) - 100}%)`;
        } else if (element.classList.contains('crane-right')) {
            elementProgress = Math.min(Math.max((progress - 0.4) / 0.2, 0), 1); // Right crane appears after 40% of scroll
            element.style.transform = `translateX(${100 - (elementProgress * 100)}%)`;
        } else if (element.classList.contains('excavator')) {
            elementProgress = Math.min(Math.max((progress - 0.6) / 0.2, 0), 1); // Excavator appears after 60% of scroll
            element.style.transform = `translateX(${(elementProgress * 100) - 100}%)`;
        } else if (element.classList.contains('forklift')) {
            elementProgress = Math.min(Math.max((progress - 0.8) / 0.2, 0), 1); // Forklift appears after 80% of scroll
            element.style.transform = `translateX(${100 - (elementProgress * 100)}%)`;
        }

        element.style.opacity = elementProgress; // Adjust opacity based on progress
    });

    // Show text after elements have appeared
    const textAppearThreshold = 0.9; // Adjust timing as needed
    const textProgress = Math.min(Math.max((progress - textAppearThreshold) / 0.1, 0), 1); // Adjust timing as needed
    
    if (progress >= textAppearThreshold) {
        h1.classList.add('show');
        h2.classList.add('show');
    } else {
        h1.classList.remove('show');
        h2.classList.remove('show');
    }

    // Slide the full-screen text div based on scroll
    const fullScreenThreshold = 0.1; // Adjust the scroll percentage to trigger the slide effect
    if (progress < fullScreenThreshold) {
        fullScreenText.classList.remove('hidden');
    } else {
        fullScreenText.classList.add('hidden');
    }
});

const image = document.querySelector('.center-image');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const rotateX = (y - centerY) / 10;
  const rotateY = (x - centerX) / 10;

  image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

const tapeImage = document.querySelector('.tape-image');
const tapeImageMirror = document.querySelector('.tape-image.mirror');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const progress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  const excavatorProgress = Math.min(Math.max((progress - 0.6) / 0.2, 0), 1);

  if (excavatorProgress >= 1) {
    tapeImage.classList.add('animate');
    tapeImageMirror.classList.add('animate');
  } else {
    tapeImage.classList.remove('animate');
    tapeImageMirror.classList.remove('animate');
}
});

