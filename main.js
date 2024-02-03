const key = "0f37419877f262fbe9d604da4946d897";

function colocarDadosNaTela(dados) {
  console.log(dados)
  document.querySelector(".cidade_h2").innerHTML = "Tempo em: " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp )+ "ºc"
  document.querySelector(".texto").innerHTML =dados.weather[0].description
  document.querySelector(".h6").innerHTML = "Umidade: " + dados.main.humidity + "%"
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  colocarDadosNaTela(dados)
}

function cliqueNoBotao() {
  const cidade = document.querySelector(".input-city").value;

  buscarCidade(cidade);
}
