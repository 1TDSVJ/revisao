

//Capturar um elemento que é o botao de enviar e colocar em uma constante
const botaoSubmit = document.getElementById("btnEnviar")


function validaCampo(){
     //capturar os camopos(inputs)
     const campos = document.querySelectorAll("input[type=text], input[type=email]")

     for(let x = 0; x < campos.length; x++){
         if(campos[x].value == ''){
             alert('O CAMPO : ' + campos[x].name + 'não foi preenchido!')
             return
         }
     }
     //se os campos todos estao dentro do que foi solicitado
     //posso submeter op form
     document.querySelector(".cadastro").submit()
}


//Atrelar ao botao um evento [ click ]
botaoSubmit.addEventListener("click", validaCampo)
