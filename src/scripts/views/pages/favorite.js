/* eslint-disable no-unused-expressions */
import FavoriteRestoIdb from '../../data/favorite-db';
import { createHeroTemplate, createListRestoTemplate } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
    <section id="hero">
    </section>
    <section class="resto">
      <div class="container">
        <div id="resto-list" class="resto-list">
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const goresto = await FavoriteRestoIdb.getAllRestaurants();

    const heroContainer = document.getElementById('hero');
    heroContainer.innerHTML = createHeroTemplate('favorite');

    const gorestoContainer = document.querySelector('#resto-list');
    goresto.length > 0 ? goresto.forEach((resto) => {
      gorestoContainer.innerHTML += createListRestoTemplate(resto);
    }) : gorestoContainer.innerHTML = '<div class="resto-item__not__found">Favorite Not Found</div>';
  },
};

export default Favorite;
