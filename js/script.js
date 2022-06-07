// Capturando o elemento botão do html
const btn = document.getElementById('btnEnviar');

function validaCampos(){
    const campos = document.querySelectorAll('input[type="text", input[type="email"]');

    for(let i = 0; i < campos.length; i++){
        if(campos[i].value == ''){
            alert('O campo: ' + campos[i].name + ' não foi preenchido!')
            return
        }
    }

    // Submit do form
    document.querySelector('.cadastro').submit()
}

// Atrelando um evento ao botão [ click ]
btn.addEventListener('click', validaCampos)