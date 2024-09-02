window.onload = function() {
    const introHeading = document.querySelector(".intro-text h1");
    const introParagraph = document.getElementById("introParagraph");

    // Listen for the animation end event on the heading
    introHeading.addEventListener('animationend', () => {
        const introWords = introParagraph.innerText.split(" ");
        introParagraph.innerHTML = introWords.map(word => `<span class="bold-word">${word}</span>`).join(" ");

        const words = document.querySelectorAll(".bold-word");
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('bold-word');
                setTimeout(() => {
                    word.classList.add('reset-word');
                }, 1000);
            }, index * 300); // Adjust the timing here for speed
        });
    });
};


function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.remove("active");
    });
});