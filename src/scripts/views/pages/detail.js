import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovies(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML += createMovieDetailTemplate(movie);
  },
};

export default Detail;
