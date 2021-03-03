const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

// Using ASYNC/AWAIT
// if await is used in fetch, function has to have async in front
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/JSON'
    }
  };
  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/JSON'
//     }
//   };
//   fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

jokeBtn.addEventListener('click', generateJoke);
