/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/main-responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.getElementById('btn-burger'),
  drawer: document.getElementById('nav-drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

export default app;
