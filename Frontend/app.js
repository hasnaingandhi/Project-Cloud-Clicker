const button = document.getElementById('increment-btn');

const fetchCounter = () => {
    fetch('/counter')
        .then(response => response.json())
        .then(data => document.getElementById('counter').innerText = data.count)
        .catch(error => console.error('Error:', error));
};

const incrementCounter = () => {
    button.style.backgroundColor = '#004099'; 
    button.style.color = '#ccc'; 

    fetch('/increment', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            document.getElementById('counter').innerText = data.count;
            setTimeout(() => {
                button.style.backgroundColor = '#007bff';
                button.style.color = '#fff'; 
            }, 200); 
        })
        .catch(error => console.error('Error:', error));
};

button.addEventListener('click', incrementCounter);

window.onload = fetchCounter;
