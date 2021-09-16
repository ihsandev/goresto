import GoRestoDBSource from '../../data/gorestodb_source';
import { createHeroTemplate, createListRestoTemplate } from '../template/template-creator';

const ListResto = {
  async render() {
    return `
    <section id="hero">
    </section>
    <section class="resto">
      <div class="container">
        <div id="resto-list" class="resto-list">
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const goresto = await GoRestoDBSource.getListResto();

    const heroContainer = document.getElementById('hero');
    heroContainer.innerHTML = createHeroTemplate('default');

    const gorestoContainer = document.querySelector('#resto-list');
    if (goresto.length > 0) {
      goresto.forEach((resto) => {
        gorestoContainer.innerHTML += createListRestoTemplate(resto);
      });
    } else {
      gorestoContainer.innerHTML = '<div class="resto-item__not__found">Tidak ada Restauran untuk ditampilkan</div>';
    }
  },
};

export default ListResto;
