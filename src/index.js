import './js/about-us/modalAbout';
import { refs } from './js/constants/refs';
import { onFormSubmit } from './js/get-movies/movieSearch';
import './js/features/upbutton/upToTop';

refs.headerForm.addEventListener('submit', onFormSubmit);
