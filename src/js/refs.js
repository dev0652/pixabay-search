export default function () {
  return {
    header: document.querySelector('header'),
    logo: document.querySelector('.pixabay-logo'),
    logoCnt: document.querySelector('.pixabay-logo-wrapper'),
    form: document.querySelector('#search-form'),
    box: document.querySelector('#search-box'),
    searchBtn: document.querySelector('#search-button'),
    scrollToTopButton: document.querySelector('.back-to-top'),
    gallery: document.querySelector('.gallery'),
    scrollGuard: document.querySelector('.scroll-guard'),
    toTopTarget: document.querySelector('.to-top-target'),
  };
}
