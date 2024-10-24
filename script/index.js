const toDoList = document.querySelector('#to_do_list');

function todo (img, obj, desc) {
    toDoList.innerHTML += `
        <div class="todo">
            <img class="imagen__user" src="${img}" alt="imagem tarefa">
            <div class="confi">
                <div class="header__todo">
                    <h3 class="title">${obj}</h3>
                    <button class="close">
                        <img src="icons/close.png" alt="excluir Afazer">
                    </button>
                </div>
                <p class="descricao__todo">${desc}</p>
            </div>
        </div>
    `
}

function inputsValue () {
    const submitTodo = document.querySelector('#submit__todo');
    submitTodo.addEventListener('click', () => {
        const objetivo = document.querySelector('#objetivo').value;
        const descricao = document.querySelector('#descricao').value;
        const urlDaImagem = document.querySelector('#Url__da__Imagem').value;


    });
}
inputsValue();

function excluirToDo () {
    const excluir = document.querySelectorAll('.close');
    const listToDo = document.querySelectorAll('.todo');

    excluir.forEach((exc, i) => {
        exc.addEventListener('click', () => {
            listToDo[i].remove(); 
        });
    });
}
excluirToDo();

function StoregedToDo () {
    let inStorage = JSON.parse(localStorage.getItem('to do inf')) || [];

    if(inStorage != []){
        
    }
}
StoregedToDo()

function chekoutImagem () {

}
