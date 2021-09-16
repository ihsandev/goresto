import API_ENDPOINT from '../globals/end-point';

class GoRestoDBSource {
  static async getListResto() {
    const res = await fetch(API_ENDPOINT.GET_LIST);
    const resJson = await res.json();
    return resJson.restaurants;
  }

  static async detailResto(id) {
    const res = await fetch(API_ENDPOINT.GET_DETAIL(id));
    const resJson = await res.json();
    return resJson.restaurant;
  }
}

export default GoRestoDBSource;
