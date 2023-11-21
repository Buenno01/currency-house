import './style.css'
import { headerComponent } from './components/header'
import { createElement } from './util/createElement';

const app = document.querySelector('#app');
app.classList.add('bg-my-background');
app.classList.add('min-h-screen');
app.classList.add('flex');
app.classList.add('justify-center');

const router = createElement(['bg-my-box', 'rounded-xl', 'flex', 'flex-col'], 'section');
router.id = 'router';

const container = createElement(['container', 'flex', 'flex-col'], 'div');
container.appendChild(headerComponent());
container.appendChild(router);

app.appendChild(container);
