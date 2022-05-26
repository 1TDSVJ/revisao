// Capturando o elemento botão do html
const btn = document.getElementById('btnEnviar');

function validaCampos(){
    const campos = document.querySelectorAll('input[type="text", input[type="email"]');

    for(let i = 0; x < campos.length; i++){
        if(campos[x].value == ''){
            alert('O campo: ' + campos[x].name + ' não foi preenchido!')
            return
        }
    }

    // Submit do form
    document.querySelector('.cadastro').submit()
}

// Atrelando um evento ao botão [ click ]
btn.addEventListener('click', validaCampos)