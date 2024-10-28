const toDoList = document.querySelector('#to_do_list');
const submitTodo = document.querySelector('#submit__todo');
const noAccount = document.querySelector('#no__account');

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

noAccount.addEventListener('click', () => {
    window.location.href = './conta.html'
});

submitTodo.addEventListener('click', (eve) => {
    eve.preventDefault();
    validInputs();
});

function validInputs () {
    validImagem();
    validObj();
    validDesc();
    
    const inputs = document.querySelectorAll('#add__to_do input');
    const valid = [...inputs].every((item) => {
        return item.classList != 'wrong'
    });
    if(valid === true){
        const img = document.querySelector('#Url__da__Imagem').value;
        const obj = document.querySelector('#objetivo').value;
        const desc = document.querySelector('#descricao').value;
        todo(img, obj, desc);        
    }
}

function validImagem () {
    const urlImagem = document.querySelector('#Url__da__Imagem');

    if(urlImagem.value === ''){
        errorInput(urlImagem, 'Preencha o Campo Da Imagem');
    }else{
        urlImagem.className = '';
    }
}
function validObj () {
    const urlObj = document.querySelector('#objetivo');

    if(urlObj.value === ''){
        errorInput(urlObj, 'Preencha o Campo Do Objetivo');
    }else{
        urlObj.className = '';
    }
}
function validDesc () {
    const urlDesc = document.querySelector('#descricao');

    if(urlDesc.value === ''){
        errorInput(urlDesc, 'Preencha o Campo Da Descrição');
    }else{
        urlDesc.className = '';
    }
}

function errorInput (input, men) {
    alert(men);
    input.className = 'wrong';
}

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




