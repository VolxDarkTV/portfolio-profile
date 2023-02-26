import { createApp } from 'vue';
import App from './App.vue';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass, faEnvelope, faFile, faStore, faCow, faLaptopCode, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'; 
import { faGithub, faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

library.add(faMagnifyingGlass, faCircleXmark, faGithub, faLinkedin, faEnvelope, faFile, faStore, faCow, faLaptopCode, faXmark, faGithubAlt);

const app = createApp(App);
app.use(AOS);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');