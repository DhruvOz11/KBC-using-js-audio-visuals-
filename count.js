function updatePlayerName() {
    const playerName = sessionStorage.getItem('username');
    const playerElement = document.getElementById('player');
    if (playerElement) {
        playerElement.innerHTML = playerName ? playerName : 'Guest';
    }
}
updatePlayerName();

const lifeline1Used = sessionStorage.getItem('lifeline1_used');

// Disable lifeline 1 button if it has already been used
if (lifeline1Used) {
    document.getElementById('lifeline1').disabled = true;
}

const lifeline2Used = sessionStorage.getItem('lifeline2_used');

// Disable lifeline 1 button if it has already been used
if (lifeline2Used) {
    document.getElementById('lifeline2').disabled = true;
}

const lifeline3Used = sessionStorage.getItem('lifeline3_used');

// Disable lifeline 1 button if it has already been used
if (lifeline3Used) {
    document.getElementById('lifeline3').disabled = true;
}


document.getElementById('startkbc').onclick = function () {
    window.location.href = "_2.html";
}



// Store the user's name in session storage

document.getElementById("registration-form").addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    updateUsername();
    redirectToFirstPage();
});

function redirectToFirstPage() {
    setTimeout(function () {
        window.location.href = "1.html"; // Replace "next_page.html" with the URL of your next page
    }, 4000);
}

// Function to update username in sessionStorage
function updateUsername() {
    const nameInput = document.getElementById('name');
    if (nameInput) {
        const username = nameInput.value;
        sessionStorage.setItem('username', username);
    }
}




