window.addEventListener('DOMContentLoaded', function () {

  const inputado = document.querySelector('#todoInput');
  const botao = document.querySelector('#todoSubmit');
  const todoLista = document.querySelector('#todoLista');
  const formulario = document.getElementById('todoForm');
  const marcarTodos = document.querySelector('#todoMarcarTodos');
  const removerTodos = document.querySelector('#todoRemoverTodos');
  let dragging = null;

  botao.addEventListener('click', (addTarefa) => {
    const tarefa = document.createElement('li');
    const texto = document.createElement('p');
    const lixeira = document.createElement('img');
    addTarefa.preventDefault();
    lixeira.src = "excluir.png";
    lixeira.style.height = "28px";
    lixeira.style.width = "28px";
    texto.innerText = inputado.value;

    if (texto.innerText.trim() == "") {
    alert(`Adicione uma tarefa`)
    texto.innerText.focus();
    } else {
    todoLista.classList.add('dropzone')
    todoLista.appendChild(tarefa);
    tarefa.appendChild(texto);
    tarefa.appendChild(lixeira);
    console.log(tarefa);

    //Atribui o draggable para todo <li> criado, para que seja arrastado
    tarefa.setAttribute('draggable', true);
    }

    //Evento adicionado ao <ul>
    todoLista.addEventListener('dragstart', function (e) {
    dragging = e.target.closest('li')
    //closest pega o elemento mais próximo da caixa principal que adicionamos o evento.

      // dragover é para arrastar o elemento. Funciona como uma sombra que segura o elemento que estava no start para conseguirmos deslocar 
      todoLista.addEventListener('dragover', function (e) {
      e.preventDefault()
      //esse preventDefault permite com que o elemento seja arrastado. Pois por padrão ele não permite arrastar, somente agarrar e soltar 
      const node = e.target.closest('li')
      //closest pega o elemento mais próximo da caixa principal que adicionamos o evento. 
      this.insertBefore(dragging, node)
      })

      todoLista.addEventListener('dragend', function (e) {
      dragging = null //valor null para conseguirmos pegar outro elemento que queremos arrastar
      })
    })
    //toggle(), se a classe existir naquele elemento, ele a remove, se não existir, ele a adiciona.
    texto.addEventListener('click', function () {
    texto.classList.toggle('checked');
    console.log(texto);
    })

    lixeira.addEventListener('click', function () {
    tarefa.remove();
    })
    
    
    formulario.reset();

    marcarTodos.addEventListener('click', function () {
    texto.classList.add('checked');
    })

    removerTodos.addEventListener('click', function () {
    tarefa.remove();
    })
    
  })
})