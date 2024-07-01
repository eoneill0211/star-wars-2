let nameH1;
let birthYearSpan;
let heightSpan;
let massSpan;
let filmsDiv;
let planetDiv;
const baseUrl = `https://swapi2.azurewebsites.net/api`;

// Runs on page load
addEventListener('DOMContentLoaded', () => {
  nameH1 = document.querySelector('h1#name');
  birthYearSpan = document.querySelector('span#birth_year');
  massSpan = document.querySelector('span#mass');
  heightSpan = document.querySelector('span#height');
  homeworldSpan = document.querySelector('span#homeworld');
  charUl = document.querySelector('#character>ul');
  planetsUl = document.querySelector('#planets>ul');
  const sp = new URLSearchParams(window.location.search)
  const id = sp.get('id')
  getFilm(id)
});

async function getFilm(id) {
  let film;
  try {
    film = await fetchFilm(id)
    film.planets = await fetchPlanets(id)
    film.characters = await fetchCharacters(id)
  }
  catch (ex) {
    console.error(`Error reading character ${id} data.`, ex.message);
  }

    renderText(film);
}
async function fetchFilm(id) {
  let filmUrl = `${baseUrl}/films/${id}`;
  return await fetch(filmUrl)
    .then(res => res.json())
}

async function fetchPlanets(id) {
  const url = `${baseUrl}/films/${id}/planets`;
  const planets = await fetch(url)
    .then(res => res.json())
  return planets;
}

async function fetchCharacters(id) {
  const url = `${baseUrl}/films/${id}/characters`;
  const films = await fetch(url)
    .then(res => res.json())
  return films;
}


const renderText = film => {
    nameH1.textContent = film?.name;
    const filmsLis = film?.planets?.map(planet => `<li><a href="/planet.html?id=${planet.id}">${planet.name}</li>`);
    planetsUl.innerHTML = filmsLis.join("");
    const charLis = film?.characters?.map(character => `<li><a href="/character.html?id=${character.id}">${character.name}</li>`);
    charUl.innerHTML = charLis.join("");
  }