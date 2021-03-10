function converterDuracao() {
  // criar referências aos elementos da págima html
  var inTitulo = document.getElementById("inTitulo");
  var inDuracao = document.getElementById("inDuracao");
  var outTitulo = document.getElementById("outTitulo");
  var outResposta = document.getElementById("outResposta");

  // obtêm conteudos dos campos de entradas
  var Titulo = inTitulo.value;
  var Duracao = Number(inDuracao.value);

  //arredonda para baixo o resultado da divisão
  var horas = Math.floor(Duracao / 60);
  alert(horas);
  //obtêm o resto da divisão
  var minutos = Duracao % 60;

  //altera o conteúdo dos parágrafos as resposta
  outTitulo.textContent = Titulo;
  outResposta.textContent = horas + " hora(s) e " + minutos + " minuto(s)";

  // criar referências aos elemento do botão
  var btConverter = document.getElementById("btConverter");

  //registar um evento associado ao botão, para uma função
  btConverter.addEventListener("click", converterDuracao);

} 