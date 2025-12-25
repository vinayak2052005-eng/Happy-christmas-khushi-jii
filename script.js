let revealedCount = 0;

function nextScreen(screenNum) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen' + screenNum).classList.add('active');
}

function revealCard(element) {
    if (!element.classList.contains('revealed')) {
        element.classList.add('revealed');
        element.innerHTML = element.querySelector('span').innerText;
        revealedCount++;
        
        if (revealedCount === 5) {
            document.getElementById('final-btn').classList.remove('hidden');
        }
    }
}