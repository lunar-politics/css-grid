const headerSearch = document.querySelector('.header-search');
const searchBtn = document.querySelector('.header-search__btn');
const searchInput = document.querySelector('.header-search__input');
const headerNav = document.querySelector('.header-nav');
const headerLogo = document.querySelector('.header-logo');

searchBtn.onclick = function() {
  if ((screen.width <= 1024) && (screen.width > 768)) {
    searchInput.classList.add('header-search__input--active');
    headerLogo.style= 'display: none';
  } else if ((screen.width <= 768) && (screen.width > 485)) {
    searchInput.classList.add('header-search__input--active');
  } else {
    searchInput.classList.add('header-search__input--active');
    headerLogo.style= 'display: none';
  }
}

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(headerSearch);
  if ( ! withinBoundaries ) {
		searchInput.classList.remove('header-search__input--active');
    headerLogo.style= 'display: block';
	}
})


