

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    'api_key': API_KEY
  }

});


async function getTrendingMoviesPreview() {
  const { data } = await api(
    'trending/movie/day'
  );

  const movies = data.results;


  movies.forEach(movie => {
    const trendingMoviesPreviewList = document.querySelector(
      '#trendingPreview .trendingPreview-movieList'
    );
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute(
      'src',
      'https://image.tmdb.org/t/p/w300' + movie.poster_path
    );

    movieContainer.appendChild(movieImg);
    trendingMoviesPreviewList.appendChild(movieContainer);
  });
}

async function getCategoriesPreview() {
  const { data } = await api(
    'genre/movie/list'
  );

  const categories = data.genres;



  // Colors for categories
  const colors = [
    '#ef4444',
    '#f97316',
    '#eab308',
    '#22c55e',
    '#06b6d4',
    '#3b82f6',
    '#6366f1',
    '#8b5cf6',
    '#ec4899',
    '#14b8a6'
  ];

  categories.forEach((category, index) => {
    const categoriesPreviewList = document.querySelector(
      '#categoriesPreview .categoriesPreview-list'
    );

    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    // Color distinto para cada categoría
    categoryContainer.style.backgroundColor =
      colors[index % colors.length];

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', category.id);

    categoryTitle.textContent = category.name;

    categoryContainer.appendChild(categoryTitle);
    categoriesPreviewList.appendChild(categoryContainer);
  });
}

getTrendingMoviesPreview();
getCategoriesPreview();