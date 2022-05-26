//Capturar um elemento que é  o botão de enviar e colocar em uma constante
const botaoSubmit = document.getElementById("btnEnviar")


function validaCampos(){

}
//Atrelar ao botão um evento [click]
botaoSubmit.addEventListener("click", ()=> //function()
{
//Capturar os campos(inputs)
const campos = document.querySelectorAll("input[type='text'], input[type='email']")

for(let x = 0; x < campos.length ; x++ ){
    if(campos[x].value == ''){
        alert('O campo : ' + campos[x].name + 'não foi preenchido!')
        return
    }

}
//Se os campos todos estão dentro do que foi solicitado
//Eu posso submeter o form
document.querySelector(".cadastro").submit()

//Atrelar ao botão um evento [click] e chamar sua função
botaoSubmit.addEventListener("click", validaCampos)
})