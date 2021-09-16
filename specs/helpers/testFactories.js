/* eslint-disable import/prefer-default-export */
import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonPresenter = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.getElementById('favoriteButtonContainer'),
    restaurant,
  });
};

export { createFavoriteButtonPresenter };
