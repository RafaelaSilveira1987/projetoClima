// variáveis =>> um espaço na memória do computador 
// função =>> um trecho de código que só é excecutada quando é chamada


let chave = "195536b15337effddc49c1474b39fd3d"

function colocaNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".icone").src ="https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
    .then(resposta => resposta.json())

    colocaNaTela(dados)
}



function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

  buscarCidade(cidade)
}