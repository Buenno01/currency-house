import { createElement } from '../util/createElement'
import { getData } from '../services/fetchApi'
import { currencyItem } from '../components/currencyItem'

const titleElement = () => {
  const newElement = createElement(['text-4xl', 'font-bold'], 'h1');
  newElement.innerText = 'Casa de ';

  const strong = createElement(['text-my-green'], 'strong');
  strong.innerText = 'Câmbio';

  newElement.appendChild(strong);

  return newElement;
};

const inputElement = () => {
  const inputContainer = createElement([], 'div');

  const inputText = createElement(['bg-my-input', 'h-48px', 'w-170px', 'p-2', 'rounded'], 'input');
  inputText.id = 'search-bar';
  inputText.placeholder = 'BRL';

  const inputLabel = createElement(['block', 'text-sm', 'mb-1'], 'label');
  inputLabel.for = 'search-bar';
  inputLabel.innerText = 'Digite a moeda';

  inputContainer.appendChild(inputLabel);
  inputContainer.appendChild(inputText);

  return inputContainer;
};

function searchCurrency() {
  const searchBar = document.querySelector('input');
  getData(searchBar.value).then(data => {
    const currenciesArr = Object.entries(data.conversion_rates);
    const currenciesObj = currenciesArr.map((element) => ({
      currency: element[0],
      value: element[1],
    }));

    const rout = document.querySelector('#router');
    rout.innerHTML = '';

    const list = createElement(['flex', 'flex-wrap', 'justify-center', 'p-6', 'gap-2'], 'ul');

    const subtitle = createElement(['text-center', 'text-xl', 'font-bold', 'mt-8'], 'h2');
    subtitle.innerText = `Valores referentes a 1 `;

    const currencySelected = createElement(['uppercase'], 'span');
    currencySelected.innerText = searchBar.value;

    subtitle.appendChild((currencySelected));

    currenciesObj.forEach(({ currency, value }) => {
      list.appendChild(currencyItem(currency, value));
    });

    [subtitle, list].forEach((e) => rout.appendChild(e))
  });
}

const searchBtnElement = () => {
  const searchBtn = createElement(['bg-my-green', 'text-my-background', 'font-semibold', 'w-170px', 'h-48px', 'rounded', 'mt-auto'], 'button');
  searchBtn.innerText = 'Pesquisar';
  searchBtn.addEventListener('click', searchCurrency);

  return searchBtn;
};

const interfaceElement = () => {
  const newElement = createElement(['flex', 'gap-3', 'mt-4'], 'div');
  newElement.appendChild(inputElement());
  newElement.appendChild(searchBtnElement());

  return newElement;
}

export const headerComponent = () => {
  const newHeader = createElement(['flex', 'flex-col', 'my-8'], 'header');

  newHeader.appendChild(titleElement());
  newHeader.appendChild(interfaceElement());


  return newHeader;
};