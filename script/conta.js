const submit = document.querySelector('#submit');
const backInicial = document.querySelector('#voltar__inicial'); 
const senha = document.querySelector('#senha');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');

backInicial.addEventListener('click', () => {
    window.location.href = './index.html'
});

senha.addEventListener('keydown', (eve) => {
    if(eve.key === 'Enter'){
        validation();
    }
})

submit.addEventListener('click', () => {
    validation();
});

function validation () {
    validNome();
    validEmail();
    validSenha();

    const inputs = document.querySelectorAll('#inputs__form input');
    const valid = [...inputs].every((item) => {
        return item.classList != 'wrong'
    });
    
    if(valid){
        const nomeValue = nome.value;
        const emailValue = email.value;
        const senhaValue = senha.value;

        let inf = [
            nomeValue,
            senhaValue,
            emailValue
        ]
        localStorage.setItem('user', JSON.stringify(inf));
        alert('cadastrado');
        window.location.href = `./index.html`
    }
}

function validNome () {
    if(nome.value === ''){
        errorInput(nome, 'Coloque um nome');
    }else if(nome.value.includes(' ')){
        errorInput(nome, 'Coloque um nome sem espaço');
    }else if(nome.value.length < 3 || nome.value.length > 10){
        errorInput(nome, 'O nome não pode conter menos que 3 caracteres, e mais que 10 caracteres');
    }else{
        nome.className = ''
    }
}

function validEmail () {
    if(email.value === ''){
        errorInput(email, 'Coloque um email');
    }else if(email.value.includes(' ')){
        errorInput(email, 'Coloque um email sem espaço');
    }else if(email.value.length < 9 || email.value.length > 40){
        errorInput(email, 'O email não pode conter menos que 9 caracteres, e mais que 40 caracteres');
    }else{
        email.className = ''
    }
}

function validSenha () {
    if(senha.value === ''){
        errorInput(senha, 'Coloque uma senha');
    }else if(senha.value.includes(' ')){
        errorInput(senha, 'Coloque uma senha sem espaço');
    }else if(senha.value.length < 4 || senha.value.length > 8){
        errorInput(senha, 'A senha não pode conter menos que 4 caracteres, e mais que 8 caracteres');
    }else{
        senha.className = ''
    }
}


function errorInput (inp, men) {
    inp.className = 'wrong'
    alert(men);
}
