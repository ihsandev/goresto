/* eslint-disable no-undef */
Feature('Liking Restaurant');

Scenario('showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('#resto-list');
  I.see('Favorite Not Found', '.resto-item__not__found');
});

Scenario('liking one resto', ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.desc-thumb a');
  I.click(locate('.desc-thumb a').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto-list');
});
