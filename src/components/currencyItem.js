import { createElement } from "../util/createElement"

export const currencyItem = (currency, value) => {
  const newElement = createElement(['flex', 'w-200px', 'mt-8', 'bg-my-background', 'px-2', 'py-4', 'rounded'], 'li');

  const valuesContainer = createElement(['w-full', 'flex', 'justify-between', 'px-3', 'align-baseline'], 'div');

  const currencyEl = createElement([], 'h3');
  currencyEl.innerText = currency;

  const valueEl = createElement(['text-my-yellow', 'text-base'], 'h3');
  valueEl.innerText = value.toFixed(3);

  valuesContainer.appendChild(currencyEl);
  valuesContainer.appendChild(valueEl);

  const icon = createElement(['w-6', 'h-6'], 'img');
  icon.src = '/src/assets/coinIcon.png'

  newElement.appendChild(icon);
  newElement.appendChild(valuesContainer);

  return newElement;
}