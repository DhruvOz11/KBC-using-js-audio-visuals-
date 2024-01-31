// Get all the options
const options = document.querySelectorAll('.option');
const audioCorrect = document.getElementById('audioCorrect');
const audioIncorrect = document.getElementById('audioIncorrect');
const audio = document.getElementById('qa1');

// validation for usage of lifeline 

document.getElementById('lifeline3').onclick = function () {
    document.getElementById('ans').innerHTML = "Answer is: A";
    sessionStorage.setItem('lifeline3_used', true);
    this.disabled = true; // Disable lifeline button after use
}
    ;
document.getElementById('lifeline2').onclick = function () {
    document.getElementById('lifeline2').addEventListener('click', function () {
        window.location.href = 'https://www.google.com';
    });
    sessionStorage.setItem('lifeline2_used', true);
    this.disabled = true; // Disable lifeline button after use
};
document.getElementById('lifeline1').onclick = function () {
    const element = document.getElementById('op2');
    if (element.style.color === 'transparent') {
        element.style.color = ''; // Reset to default color
    } else {
        element.style.color = 'transparent';
    }
    const element1 = document.getElementById('op4');
    if (element1.style.color === 'transparent') {
        element1.style.color = ''; // Reset to default color
    } else {
        element1.style.color = 'transparent';
    }

    sessionStorage.setItem('lifeline1_used', true);
    this.disabled = true; // Disable lifeline button after use
};

// Flag to track if the audio is playing
let audioPlaying = false;

// Play audio when page loads
window.onload = function () {
    audio.play();
    audio.onended = function () {
        audioPlaying = false;
        // Enable options after audio ends
        options.forEach(function (opt) {
            opt.disabled = false;
        });
    };
};

function redirectToNextPage() {
    setTimeout(function () {
        window.location.href = "_2.html"; // go to next page
    }, 4000); // 4 seconds delay
}

// Add click event listener to each option
options.forEach(option => {
    option.addEventListener('click', () => {
        // Check if the audio is still playing
        if (audioPlaying) {
            return; // Do nothing if audio is playing
        }

        // Remove selected class from all options
        options.forEach(opt => opt.classList.remove('selected'));

        // Add selected class to the clicked option
        option.classList.add('selected');

        // Get the selected answer
        const selectedAnswer = option.getAttribute('data-answer');

        // Check if the selected answer is correct
        if (selectedAnswer === 'A') {
            audioCorrect.play();
            option.classList.add('correct');
            redirectToNextPage();
        } else {
            audioIncorrect.play();
            option.classList.add('incorrect');
        }

        // Disable other options
        options.forEach(function (opt) {
            if (opt !== option) {
                opt.disabled = true;
            }
        });
    });
});

// Event listener for audio play
audio.addEventListener('play', function () {
    audioPlaying = true;
});

// Event listener for audio pause
audio.addEventListener('pause', function () {
    audioPlaying = false;
});


