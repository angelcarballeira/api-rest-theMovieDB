window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
  console.log({ location });
  if (location.hash.startsWith('#trends')) {
    trendingPage()
  } else if (location.hash.startsWith('#search=')) {
    searchPage()
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage()
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage()
  } else {
    homePage()
  }
}

function homePage() { console.log('Home!!!') }
function trendingPage() { console.log('Trending!!!') }
function searchPage() { console.log('Search!!!') }
function movieDetailsPage() { console.log('Movie!!!') }
function categoriesPage() { console.log('Categories!!!') }