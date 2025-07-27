$(document).ready(function () {
  var slides = $(".div-slider [type=radio]"); //selecionas os inputs radio na div com a classe "div-slider"
  var slides_len = slides.length; //pega o tamanho da lista de inputs radio
  var intervalo = .5; //define o intervalo de tempo entre as transições

  function nextSlide() {
    var slides_ativo = $(".div-slider [type=radio]:checked").attr("id").match(/\d+/)[0];//seleciona o valor numerico do ID do input radio ativo
    if (slides_ativo == slides_len) slides_ativo = 0; //se o input ativo for o ultimo, volta para o primeiro
    slides.eq(slides_ativo).prop("checked", true); //checa o radio da vez
  }
  var tempo = setInterval(nextSlide, intervalo * 1000); //define o tempo de transição
  $(".div-slider").hover(function () {
    clearInterval(tempo); //para o tempo de transição quando o mouse passa sobre os inputs
  },
    function () {
      tempo = setInterval(nextSlide, intervalo * 1000); //reinicia o temporizador
    }
  );
});