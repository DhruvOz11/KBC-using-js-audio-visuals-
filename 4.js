const options = document.querySelectorAll('.option');
const audioCorrect = document.getElementById('audioCorrect');
const audioIncorrect = document.getElementById('audioIncorrect');
const audio = document.getElementById('qa4');


document.getElementById('lifeline3').onclick = function(){
    const lifeline3Used = sessionStorage.getItem('lifeline3_used');
    if (lifeline1Used) {
        alert("Lifeline 3 has already been used in Previous Question!");
    } else {
        document.getElementById('ans').innerHTML = "Answer is: A";
        sessionStorage.setItem('lifeline3_used', true);
        this.disabled = true;
    }
};
document.getElementById('lifeline2').onclick = function(){
    const lifeline2Used = sessionStorage.getItem('lifeline2_used');
    if (lifeline2Used) {
        alert("Lifeline 2 has already been used in Previous Question!");
    } else {
        document.getElementById('lifeline2').addEventListener('click', function () {
            window.location.href = 'https://www.google.com';
        });
        sessionStorage.setItem('lifeline2_used', true);
        this.disabled = true;
    }
};
document.getElementById('lifeline1').onclick = function(){
    const lifeline1Used = sessionStorage.getItem('lifeline1_used');
    if (lifeline1Used) {
        alert("Lifeline 1 has already been used in Previous Question!");
    } else {
        const element = document.getElementById('op4');
        if (element.style.color === 'transparent') {
            element.style.color = ''; // Reset to default color
        } else {
            element.style.color = 'transparent';
        }
        const element1 = document.getElementById('op3');
        if (element1.style.color === 'transparent') {
            element1.style.color = ''; // Reset to default color
        } else {
            element1.style.color = 'transparent';
        }

        sessionStorage.setItem('lifeline1_used', true);
        this.disabled = true;
    }
};




let audioPlaying = false;

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
        window.location.href = "5.html"; // Replace "next_page.html" with the URL of your next page
    }, 4000); // 4 seconds delay
}
function redirectToLostPage() {
    setTimeout(function () {
        window.location.href = "5000.html"; // Replace "next_page.html" with the URL of your next page
    }, 3000); // 4 seconds delay
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
            redirectToLostPage();
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


