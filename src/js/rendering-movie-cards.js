import { getTrending } from './api';
import { createGalleryMarkUp } from './create-gallery-markup';
import { createPagination } from './pagination';
import { scrollOnTop } from './scroll-on-top';
// import { showHideLoader } from './loader';
import refs from './refs';

const galleryMovie = document.querySelector('.gallery-js');
// showHideLoader(refs.loader);
getTrending().then(data => {
  const movies = data.results;
  refs.gallery.insertAdjacentHTML('beforeend', createGalleryMarkUp(movies));

  const pagination = createPagination(data.total_results, data.total_pages);
  pagination.on('beforeMove', ({ page }) => {
    refs.gallery.innerHTML = '';
    // showHideLoader(refs.loader);
    getTrending(page).then(data => {
      //   showHideLoader(refs.loader);
      refs.gallery.innerHTML = createGalleryMarkUp(data.results);
      scrollOnTop();
    });
  });
});
