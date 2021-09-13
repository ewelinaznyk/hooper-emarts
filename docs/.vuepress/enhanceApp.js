import { 
  Hooper,
  Slide,
  Pagination,
  Navigation 
} from '../../src/index.js';

export default ({ Vue }) => {
  Vue.component('Hooper', Hooper);
  Vue.component('Slide', Slide);
  Vue.component('HooperPagination', Pagination);
  Vue.component('HooperNavigation', Navigation);
};
