document.addEventListener('DOMContentLoaded', function () {
  console.clear();


  // Создать функцию которая принимает два. Функция проверяет является ли первый элемент родителям для второго
  // элемента isParent(parent, child) => true || false
  function is_parent (parent, child) {
    console.log(document.querySelector(parent).contains(document.querySelector(child)));
  }
  is_parent('ul','li');

  // Найти элемент который находится перед списком ul
  console.log(document.querySelector('ul').previousSibling);

  // Найти параграф и получить его текстовые содержимое
  console.log(document.querySelector('p').textContent);

  // Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает
  // информацию виде объекта о типе узла, имени узла и количестве дочерних узлов.
  function full_info (element) {
      let full_info_object = {
      type_node: document.querySelector(element).nodeType,
      name_node: document.querySelector(element).nodeName,
      amount_node: document.querySelector(element).children.length
    }
    return console.log(full_info_object);
  }
  full_info('p');

  //Найти список и добавить ему класс "list"
  document.querySelector('ul').classList.add('list');



});