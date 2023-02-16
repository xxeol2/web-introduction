let submit = document.getElementById("post");
let reset = document.getElementById("cancel");
submit.addEventListener("click", checkMovieTaste);
reset.addEventListener("click", cancelInput);

function checkMovieTaste() {
  const name = document.querySelector('input[type="text"]').value;
  const movies = document.querySelectorAll('input[value="movie"]:checked');
  const numberOfMovies = movies.length;
  alert(`${name}님, 저와 ${numberOfMovies}개의 취향이 같으시네요!`);
}

function cancelInput() {
  document.querySelector('input[type="text"]').value = "";
  let movies = document.getElementsByClassName("movieCheck");
  for (const movie in movies) {
    movie.checked = false;
  }
}
