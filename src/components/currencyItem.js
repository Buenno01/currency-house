import { createElement } from "../util/createElement"

export const currencyItem = (currency, value) => {
  const newElement = createElement([], 'li');
  newElement.innerText = currency + '  ' + value;

  return newElement;
}