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
  filmsUl = document.querySelector('#films>ul');
  charUl = document.querySelector('#characters>ul');

    const sp = new URLSearchParams(window.location.search);
    const id = sp.get('id');
    //getCharacter(id)
    getPlanet(id);
    document.getElementById('asdf').innerHTML = id;


});

async function getPlanet(id) {
    let planet;
    try {
      planet = await fetchPlanet(id);
      planet.chars = await fetchPlanetChars(id);
      planet.films = await fetchPlanetFilm(id);
    }
    catch (ex) {
      console.error(`Error reading character ${id} data.`, ex.message);
    }
    renderPlanet(planet);
  
  }
async function fetchPlanet(id) {
    let characterUrl = `${baseUrl}/planets/${id}`;
    return await fetch(characterUrl)
      .then(res => res.json())
}
async function fetchPlanetFilm(id) {
    let planetUrl = `${baseUrl}/planets/${id}/films`;
    return await fetch(planetUrl)
      .then(res => res.json())
  }
  async function fetchPlanetChars(id) {
    let planetUrl = `${baseUrl}/planets/${id}/characters`;
    return await fetch(planetUrl)
      .then(res => res.json())
  }

// async function fetchCharacter(id) {
//   let characterUrl = `${baseUrl}/characters/${id}`;
//   return await fetch(characterUrl)
//     .then(res => res.json())
// }

// async function fetchHomeworld(character) {
//   const url = `${baseUrl}/planets/${character?.homeworld}`;
//   const planet = await fetch(url)
//     .then(res => res.json())
//   return planet;
// }

// async function fetchFilms(character) {
//   const url = `${baseUrl}/characters/${character?.id}/films`;
//   const films = await fetch(url)
//     .then(res => res.json())
//   return films;
// }

const renderPlanet = planet => {
    nameH1.textContent = planet?.name;
    const filmsLis = planet?.films?.map(film => `<li><a href="/film.html?id=${film.id}">${film.title}</li>`);
    filmsUl.innerHTML = filmsLis.join("");
    const charLis = planet?.chars?.map(film => `<li><a href="/character.html?id=${film.id}">${film.name}</li>`);
    charUl.innerHTML = charLis.join("");

 
  }
  

// const renderCharacter = character => {
//   document.title = `SWAPI - ${character?.name}`;  // Just to make the browser tab say their name
//   nameH1.textContent = character?.name;
//   heightSpan.textContent = character?.height;
//   massSpan.textContent = character?.mass;
//   birthYearSpan.textContent = character?.birth_year;
//   homeworldSpan.innerHTML = `<a href="/planet.html?id=${character?.homeworld.id}">${character?.homeworld.name}</a>`;
//   const filmsLis = character?.films?.map(film => `<li><a href="/film.html?id=${film.id}">${film.title}</li>`)
//   filmsUl.innerHTML = filmsLis.join("");
// }