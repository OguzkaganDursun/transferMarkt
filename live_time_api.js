
const apiUrl = 'http://worldtimeapi.org/api/timezone/Europe/Istanbul';
const clockElement = document.getElementById('clock');

function updateClock() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currentTime = new Date(data.utc_datetime);
            const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const formattedTime = currentTime.toLocaleTimeString('tr-TR', options);
            clockElement.textContent = `${formattedTime}`;
        })
        .catch(error => {
            console.error('Error:', error);
            clockElement.textContent = 'An error occurred while retrieving the time.';
        });
}

// Update time when page loads and every second
document.addEventListener('DOMContentLoaded', updateClock);
setInterval(updateClock, 1000);