const toDoList = document.querySelector('#to_do_list');
const submitTodo = document.querySelector('#submit__todo');
const noAccount = document.querySelector('#no__account');
const accountDaily = document.querySelector('#account__daily');

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

function exemplo () {
    toDoList.innerHTML = `
        <div class="todo">
        <img class="imagen__user" src="https://static.vecteezy.com/ti/vetor-gratis/p1/7480068-icon-programming-adequado-para-programacao-symbol-glyph-style-simple-design-editable-design-template-vector-simple-symbol-illustration-vetor.jpg" alt="imagem tarefa">
        <div class="confi">
            <div class="header__todo">
                <h3 class="title">olá</h3>
                <button class="close">
                    <img src="icons/close.png" alt="excluir Afazer">
                </button>
            </div>
            <p class="descricao__todo">Exemplo de um afazer</p>
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

var i = 0
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

        excluirToDo();
        const local = JSON.parse(localStorage.getItem('to do inf')) || []
        let store = [
            img,
            obj,
            desc
        ];
        if(local.length >= 10){
            alert('O maximo de afazeres é 10');
        }else{
            todo(img, obj, desc);
            inputs.forEach((inp) => {
                inp.value = ''
            });
            excluirToDo();
        } 

        local.push(store);
        let user = JSON.parse(localStorage.getItem('user')) || [];
        
        if(user.length === 0){
            if(i == 0){
                alert('Para não perder os seus afazeres crie uma conta');
                i++
            }
        }else{
            localStorage.setItem('to do inf', JSON.stringify(local));
        } 
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
            const getToDoInf = JSON.parse(localStorage.getItem('to do inf')) || [];
            getToDoInf.splice(i, 1);/*Remove o item no índice i do array getToDoInf. O método splice altera o array original, removendo um item (o segundo argumento 1 indica que apenas um item será removido) no índice i. o metódo splice pode manipular outro arrays*/
            localStorage.setItem('to do inf', JSON.stringify(getToDoInf));
            
        });
    });
}

excluirToDo();

function accountCreat() {
    let verify = JSON.parse(localStorage.getItem('user')) || [];
    
    if (verify.length > 0) {
        noAccount.style.display = 'none';
        accountDaily.innerHTML = `
            <div id="ye__account">
                <img src="icons/account_blue.png" alt="foto conta">
                <p id="id__profile">${verify[0]}</p>
            </div>
        `;
    } else {
        noAccount.style.display = 'flex';
        const account = document.querySelector('#ye__account');
        exemplo();
        excluirToDo();
        account.style.display = 'none'
    }
}
accountCreat();

function storagedToDo () {
    const getToDo = JSON.parse(localStorage.getItem('to do inf')) || [];
    
    if(getToDo.length != 0){
        for(i = 0; i < 10; i++){
            let toDo = getToDo[i];
            const img = toDo[0];
            const obj = toDo[1];
            const desc = toDo[2];
            todo(img, obj, desc);
            excluirToDo();
        }
    }
}
storagedToDo();
