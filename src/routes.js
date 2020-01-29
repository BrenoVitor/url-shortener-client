const UrlShortener = () => import('./components/url-shortener/UrlShortener.vue');
const NotFoundPage = () => import('./components/not-found-page/NotFoundPage.vue');


export const routes = [ { path: '', component: UrlShortener, name: 'UrlShortener', title: 'Url Shortener', menu: true },{ path: '*', component: NotFoundPage, name: 'NotFoundPage', menu: false } ];