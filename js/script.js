const botaoSubmit = document.getElementById('btnEnviar')

botaoSubmit.addEventListener('click', () => {

    // capturar os campos(inputs)
    const campos = document.querySelectorAll("input[type='text'], input[type='email']")

    for(let x = 0; x < campos.length; x++){
        if(campos[x].value == ''){
            alert('O campo: ' + campos[x].name + "não foi preenchido!")
            return
        }
    }

    // se os campos estão dentro do que foi solicitado 
    // eu posso submeter o formulário
    document.querySelector(".cadastro").submit()

})