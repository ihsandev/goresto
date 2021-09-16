import DetailResto from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import ListGoResto from '../views/pages/list-resto';

const routes = {
  '/': ListGoResto,
  '/list-resto': ListGoResto,
  '/detail/:id': DetailResto,
  '/favorite': Favorite,
};

export default routes;
