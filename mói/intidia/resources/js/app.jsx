import './bootstrap';
import '../css/app.css';
import '../css/assets/images/favicon.svg';
import '../css/assets/css/flaticon.css';
import '../css/assets/css/owl.css';
import '../css/assets/css/bootstrap.css';
import '../css/assets/css/jquery.fancybox.min.css';
import '../css/assets/css/animate.css';
import '../css/assets/css/color.css';
import '../css/assets/css/global.css';
import '../css/assets/css/style.css';
import '../css/assets/css/swiper.min.css';
import '../css/assets/css/responsive.css';


// import "../css/assets/js/jquery.js";
// import "../css/assets/js/bootstrap.min.js";
// import "../css/assets/js/owl.js";
// import "../css/assets/js/wow.js";
// import "../css/assets/js/jquery.fancybox.js";
// import "../css/assets/js/appear.js";
// import "../css/assets/js/scrollbar.js";
// import "../css/assets/js/swiper.min.js";
// import "../css/assets/js/parallax-scroll.js";

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Layout from './Layouts/Layout';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    const page = pages[`./Pages/${name}.jsx`];
    if (page && page.default) {
      page.default.layout = page.default.layout || ((page) => <Layout>{page}</Layout>);
    }
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
  progress: {
    color: '#29d',
    showSpinner: true,
  },
});