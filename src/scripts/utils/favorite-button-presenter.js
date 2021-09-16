/* eslint-disable no-underscore-dangle */
import FavoriteRestoIdb from '../data/favorite-db';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/template/template-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getRestaurant(id);
    return !!resto;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
