/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favorite-db';
import * as TestFactories from './helpers/testFactories';

describe('Favorite a Restaurant', () => {
  const addButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addButtonContainer();
  });

  it('should show favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    const favorite = document.querySelector('[aria-label="favorite resto"]');
    expect(favorite).toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    const favorited = document.querySelector('[aria-label="favorited resto"]');
    expect(favorited).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    const favoriteButton = document.getElementById('favoriteButton');
    favoriteButton.dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getRestaurant(1);
    expect(resto).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    await FavoriteRestoIdb.putRestaurant({ id: 1 });

    const favoriteButton = document.getElementById('favoriteButton');
    favoriteButton.dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenter({});

    const favoriteButton = document.getElementById('favoriteButton');
    favoriteButton.dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
});
