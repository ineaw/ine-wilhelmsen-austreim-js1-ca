const filmContainer = document.querySelector(".film-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

if (id === null) {
  location.href = "/";
}

const url = "https://ghibliapi.herokuapp.com/films/" + id;
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url;

console.log(corsFix);

async function fetchMovie() {
  try {
    const response = await fetch(corsFix);
    const details = await response.json();
    console.log(details);
    createHtml(details);
  } catch (error) {
    console.log(error);
    filmContainer.innerHTML = errorMessage("Something went wrong while trying to fetch the API", error);
  }
}
fetchMovie();

function createHtml(details) {
  filmContainer.innerHTML = `
  <div class="descriptionCard">
  <h2>${details.title}</h2>

     <p>${details.description}</p>
     <p>Score: ${details.rt_score}</p>
     </div>`;
}
