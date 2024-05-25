// import './js/about-us/modalAbout';
import { onFormSubmit } from './js/get-movies/movieSearch';
import { refs } from './js/constants/refs';
import './js/features/upbutton/upToTop';

refs.headerForm.addEventListener('submit', onFormSubmit);
