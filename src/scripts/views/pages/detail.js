import GoRestoDBSource from '../../data/gorestodb_source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-presenter';
import {
  createDetailTemplate,
  createFavoriteButtonTemplate,
  createHeroTemplate,
  createTemplateDrink,
  createTemplateFood,
  createTemplateReviews,
} from '../template/template-creator';

const DetailResto = {
  async render() {
    return `
    <section id="hero">
    </section>
    <div class="container">
      <div id="resto-detail" class="resto-detail">

      </div>
    </div>
    <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner();
    const goresto = await GoRestoDBSource.detailResto(url.id);

    const gorestoContainer = document.querySelector('#resto-detail');
    gorestoContainer.innerHTML += createDetailTemplate(goresto);

    const heroContainer = document.querySelector('#hero');
    heroContainer.innerHTML = createHeroTemplate('detail', goresto);

    const foodContainer = document.querySelector('#detail_menu_foods');
    goresto.menus.foods.forEach((food) => {
      foodContainer.innerHTML += createTemplateFood(food);
    });

    const drinkContainer = document.querySelector('#detail_menu_drinks');
    goresto.menus.drinks.forEach((drink) => {
      drinkContainer.innerHTML += createTemplateDrink(drink);
    });

    const reviewsContainer = document.querySelector('#customer-reviews');
    goresto.customerReviews.forEach((review) => {
      reviewsContainer.innerHTML += createTemplateReviews(review);
    });

    const favoriteButtonContainer = document.querySelector('#favoriteButtonContainer');
    favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: goresto.id,
        name: goresto.name,
        description: goresto.description,
        city: goresto.city,
        address: goresto.address,
        rating: goresto.rating,
        pictureId: goresto.pictureId,
      },
    });
  },
};

export default DetailResto;
