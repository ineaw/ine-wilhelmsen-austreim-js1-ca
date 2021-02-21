const url = "https://ghibliapi.herokuapp.com/films/";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;
const resultsContainer = document.querySelector(".results");

async function getGhibli() {
  try {
    const response = await fetch(corsFix);

    const json = await response.json();

    const films = json;

    console.log(json);

    resultsContainer.innerHTML = "";

    films.forEach(function (film) {
      resultsContainer.innerHTML += `<a href="details.html?id=${film.id}" class="card">
       <div class="details">
       <h2 class="filmTitle">${film.title}</h2>
       <p>Director: ${film.director}</p>

       <p>${film.release_date}</p>
       </div>
       </a>`;
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = errorMessage("Something went wrong while trying to fetch the API", error);
  }
}

getGhibli();
