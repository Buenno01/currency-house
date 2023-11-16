export const createElement = (classesArr, tag) => {
  const newElement = document.createElement(tag);

  classesArr.forEach(cls => {
    newElement.classList.add(cls);
  });

  return newElement;
} 