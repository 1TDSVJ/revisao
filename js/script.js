//Capturar um elemento e colocar em uma constante
const botaoSubmit = document.getElementById("btnEnviar")

//Atrelar um evento ao elemento [ click ]
botaoSubmit.addEventListener("click", ()=>{
    //Capturar os campos(inputs)
    const campos = document.querySelectorAll("input[type='text'],input[type='email']")

    for (let x = 0; x < campos.length; x++) {
        if(campos[x].value == ''){
            alert('O CAMPO: ' + campos[x].name + ' não foi preenchido!')
            return
        }
    }

    //Se o campos passarem pela validação
    document.querySelector(".cadastro").submit()
})

