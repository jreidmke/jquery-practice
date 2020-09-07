const $btn = $(".submitMovie");
const $movieList = $('.movieList');
const $title = $("#movieTitle");
const $rating = $("#movieRating");

$btn.on('click', function(e) {
  e.preventDefault();
  const movie = new Movie($title.val(), $rating.val());
  $movieList.append(constructMovie(movie))
})

class Movie {
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
  }
}

function constructMovie(obj) {
  return `<tr><td>${obj.title}</td><td>${obj.rating}</td><td><button id='remove'>Remove</button></td></tr>`;
}

$movieList.on('click', 'tr', (e) => {
  e.target.closest('tr').remove();
})