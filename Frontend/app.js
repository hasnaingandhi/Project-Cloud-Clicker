const button = document.getElementById('increment-btn');

const fetchCounter = () => {
    fetch('/counter')
        .then(response => response.json())
        .then(data => document.getElementById('counter').innerText = data.count)
        .catch(error => console.error('Error:', error));
};

const incrementCounter = () => {
    button.style.backgroundColor = '#004099'; // Darker shade for click effect
    button.style.color = '#ccc'; // Change text color on click for better visibility

    fetch('/increment', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            document.getElementById('counter').innerText = data.count;
            setTimeout(() => {
                button.style.backgroundColor = '#007bff';
                button.style.color = '#fff'; // Reset text color
            }, 200); // Reset button style after 200ms
        })
        .catch(error => console.error('Error:', error));
};

button.addEventListener('click', incrementCounter);

// Fetch the current counter value when the window loads
window.onload = fetchCounter;
