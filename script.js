// Comit added
// Pobieramy elementy z DOM
const textarea = document.getElementById('textarea');
const charCount = document.getElementById('charCount');

// Nasłuchiwanie na zmianę w polu tekstowym
textarea.addEventListener('input', () => {
    // Aktualizowanie licznika znaków na podstawie długości tekstu
    charCount.textContent = textarea.value.length;
});
