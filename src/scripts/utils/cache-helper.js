/* eslint-disable no-underscore-dangle */
import CONFIG from '../globals/configs';

const CacheHelper = {
  async cachingAppShell(req) {
    const cache = await this._openCache();
    cache.addAll(req);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((cacheName) => cacheName !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revlidateCache(req) {
    const res = await caches.match(req);

    if (res) {
      this._fetchRequest(req);
      return res;
    }

    return this._fetchRequest(req);
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(req) {
    const res = await fetch(req);

    if (!res || res.status !== 200) { return res; }

    await this._addCache(req);
    return res;
  },

  async _addCache(req) {
    const cache = await this._openCache();
    cache.add(req);
  },
};

export default CacheHelper;
