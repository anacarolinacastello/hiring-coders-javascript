const listContainer = document.querySelector('[data-lists]'); //capturar elementos html, lembra getbyId dcocumente acessa Dom do documento html, querySelector procura e seleciona
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = []; //criação da lista, em array

newListForm.addEventListener('submit', function (e) {
  //tag from possui comportamento padrão do navegador, toda vez a pagina é atulizada, com e.preventDefault() os dados não serão perdidos
  e.preventDefault();
  const listName = newListInput.value; //capturar valor do input, guardando em value
  //verificar se o inpu está vazio ou nulo, para o algoritmo não rodar
  if (listName === null || listName === '') {
    return;
  }
  const list = createList(listName); //popular a lista, com a função criada para criar elementos da lista
  //toda vez que clicar e enviar, precisa limpar o input, logo deixar o inpu null
  newListInput.value = null;
  lists.push(list); //pegar a lista com push, psuh inclui item no final do array, logo iclui o item a lista no final
  render();
}); // função newListForm para fazer com que botão funcione, usando evento com addEventListener(metodo/funcao já nativa do javascript) * submit para o envio do form * function anonima, callback(estudar), recebe cmo parametro o proprio evento *
//criar função para criar lista
function createList(name) {
  return { id: Date.now().toString(), name: name }; //função que retonara um objeto, a montagem de um objeto
}
function render() {
  clearElement(listContainer);
  lists.forEach(function (list) {
    const item = document.createElement('li'); //criar a lista, jogando pro html, criando elemento html
    item.classList.add('item'); // adiciona uma class, a nossa lista de classes
    item.innerText = list.name; //recuperar item e dizer que ele vai receber com texto o list
    listContainer.appendChild(item); //elemento mãe que vai receber as listas, a div fantasma *para passar elemnto filho appendchild, que é o item
  }); //pecorrer a lista de itens com forEach , pede funçaõ calback de rteorno, anonima, passando cada item com o list
}
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
