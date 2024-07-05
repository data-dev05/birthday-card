document.getElementById('surpriseButton').addEventListener('click', function() {
    const message = document.getElementById('surpriseMessage');
    if (message.style.display === 'none') {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
});
