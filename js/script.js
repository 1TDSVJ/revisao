

//Capturar um elemento que é o botão de enviar e colocar em uma contante
const botaoSubmit = document.getElementById("btnEnviar");



function validaCampos(){

    //campturar os campos
    const campos = document.querySelectorAll("input[type='text'], input[type='email']");

    for(let x = 0; x < campos.length; x++){
        if(campos[x].value == ""){
            alert("O Campo: " + campos[x].name + " não foi preenchido!")
            return
        }
    }

    //Se os campos estiverem dentro do solicitado o form será submetido
    document.querySelector(".cadastro").submit()

}




//Atrelar um evento ao botão de enviar [click]
botaoSubmit.addEventListener("click", validaCampos);
