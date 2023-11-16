import './style.css'
import { getData } from './services/fetchApi'
import { createElement } from './util/createElement'
import { currencyItem } from './components/currencyItem'

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
    const list = createElement(['currency-list'], 'ul');
    const subtitle = createElement([], 'h2');
    subtitle.innerText = `Valores referentes a 1`
    currenciesObj.forEach(({ currency, value }) => {
      list.appendChild(currencyItem(currency, value));
    });

    [subtitle, list].forEach((e) => rout.appendChild(e))
  });
}

const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', searchCurrency)



