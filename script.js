document.querySelectorAll('nav a li').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah perilaku default anchor

        const targetId = this.getAttribute('href'); // Mendapatkan ID target
        const targetElement = document.querySelector(targetId); // Mendapatkan elemen target

        // Menghitung posisi scroll target
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        // Menggulung ke posisi target
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Efek scroll halus
        });
    });
});