document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const micButton = document.getElementById('micButton');
    const micIcon = document.getElementById('micIcon');

    micButton.addEventListener('click', function() {
        const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.start();
        
        micIcon.classList.add('recording'); // Add class to start animation

        recognition.onresult = function(event) {
            const speechResult = event.results[0][0].transcript;
            searchInput.value = speechResult;
            micIcon.classList.remove('recording'); // Remove class when done recording
        };

        recognition.onend = function() {
            recognition.stop();
            micIcon.classList.remove('recording'); // Remove class on end
        };
    });
});
