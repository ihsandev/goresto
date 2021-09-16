/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favorite-db';
import * as TestFactories from './helpers/testFactories';

describe('UnFavorite a Restaurant', () => {
  const addButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(async () => {
    addButtonContainer();
    await FavoriteRestoIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteRestaurant(1);
  });

  it('should display unfavorite widget when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    const favorite = document.querySelector('[aria-label="favorited resto"]');
    expect(favorite).toBeTruthy();
  });

  it('should not display favorite widget when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    const favorited = document.querySelector('[aria-label="favorite resto"]');
    expect(favorited).toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    const favorited = document.querySelector('[aria-label="favorited resto"]');
    favorited.dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    await FavoriteRestoIdb.deleteRestaurant(1);

    const favorited = document.querySelector('[aria-label="favorited resto"]');
    favorited.dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
});
