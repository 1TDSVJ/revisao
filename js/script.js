
//Capturar um elemento que é o botão de enviar e colocar uma constante
const botaoSubmit = document.getElementById("btnEnviar")

function calidaCampo(){
    //Capturar os campos(inputs)
    const campos = document.querySelectorAll("input[type='text'],input[type='email']")
    for(let x = 0; x < campos.length; x++ ){
        if(campos[x].value == ''){
            alert('O CAMPO: ' + campos[x].name + 'não foi preenchido!')
            return
        }
    }
    //Se os campos estão dentro do que foi solicitado
    //Eu posso submeter o FORM!
    document.querySelector(".cadastro").sumbit()
}
//Atrelar ao botão um evento [ click ]
botaoSubmit.addEventListener("click", validaCampos)
    /*
    //Capturar os campos(inputs)
    const campos = document.querySelectorAll("input[type='text'],input[type='email']")

    for(let x = 0; x < campos.length; x++ ){
        if(campos[x].value == ''){
            alert('O CAMPO: ' + campos[x].name + 'não foi preenchido!')
            return
        }
    }
    //Se os campos estão dentro do que foi solicitado
    //Eu posso submeter o FORM!
    document.querySelector(".cadastro").sumbit()

})*/
