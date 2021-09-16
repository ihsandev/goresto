import CONFIG from '../../globals/configs';

export const createHeroTemplate = (type = 'default', resto) => {
  if (type === 'detail') {
    return `
    <div class="hero">
      <picture>
          <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}">
          <img src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}" alt="hero-image-${resto.id}"></img>
      </picture>
      <figure>
        <h1>${resto.name}</h1>
        <h3>${resto.address}</h3>
      </figure>
    </div>
    `;
  }

  if (type === 'favorite') {
    return `
    <div class="hero">
        <img src="./images/heros/hero-image_1.jpg" alt="hero-image"></img>
      <figure>
        <h1>Favorite</h1>
        <h2>Restaurant</h2>
      </figure>
    </div>
    `;
  }

  return `
  <div class="hero">
    <picture>
      <source media="(max-width: 600px)" srcset="./images/heros/hero-image-480_1.jpg">
      <img src="./images/heros/hero-image_1.jpg" alt="hero-image"></img>
    </picture>
    <figure>
      <h1>Welcome To</h1>
      <h2>GoResto Apps</h2>
    </figure>
  </div>
  `;
};

export const createListRestoTemplate = (resto) => `
<article tabIndex="0">
  <div class="thumbnail">
      <img class="lazyload" alt="list-${resto.id}" data-src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}"></img>
  </div>
  <div class="desc-thumb">
      <p>⭐️ ${resto.rating}</p>
      <h2><a href="#/detail/${resto.id}">${resto.name}</a></h2>
      <p>${resto.description}</p>
  </div>
</article>
`;

export const createDetailTemplate = (resto) => `
  <section class="detail">
    <div class="detail_title">
      <h1>${resto.name}</h1>
      <p>${resto.city} | ${resto.address}</p>
    </div>
    <div class="detail_image">
      <img alt="image-detail-${resto.id}" src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}" />
    </div>
    <div class="detail_content">
      <div>
        <p>${resto.description}</p>
      </div>
      <div class="list-menus">
        <figure>
          <h2>Menu Makanan</h2>
          <ul id="detail_menu_foods">
          </ul>
        </figure>
        <figure>
          <h2>Menu Minuman</h2>
          <ul id="detail_menu_drinks">
          </ul>
        </figure>
      </div>
      <div class="detail_reviews">
        <h2>Apa Kata Pelanggan ?</h2>
        <div id="customer-reviews">
        </div>
      </div>
    </div>
  </section>
`;

export const createTemplateFood = (food) => `
  <li>${food.name}</li>
`;

export const createTemplateDrink = (drink) => `
  <li>${drink.name}</li>
`;

export const createTemplateReviews = (review) => `
  <figure>
    <p>${review.name}</p>
    <p>${review.date}</p>
    <p>${review.review}</p>
  </figure>
`;

export const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite resto" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

export const createFavoritedButtonTemplate = () => `
  <button aria-label="favorited resto" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
