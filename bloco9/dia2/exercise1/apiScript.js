const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const requestParameters = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  }

  fetch(API_URL, requestParameters)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();