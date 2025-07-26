 document.getElementById("formContato").addEventListener("submit", enviaFormulario);
// Função para enviar o formulário
function enviaFormulario(event){
  // Prevenir o comportamento padrão do formulário
  event.preventDefault();
 

  // Obter os valores dos campos do formulário
  const name = document.getElementById("name").value;
  const tel = document.getElementById("tel").value;
  const project = document.getElementById("project").value;


  const mensagem = (`Olá me chamo ${name}, meu telefone para contato é ${tel}, e gostaria de realizar o orçamento para o seguinte projeto: ${project}`);
  alert(`Obrigado ${name}, seu pedido foi enviado com sucesso!`);
  console.log(`${name}, 
  ${tel}, 
  ${project}`);

  const numeroWhatsApp = "5587981398936";

  const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsapp, "_blank");
  // Limpar os campos do formulário após o envio
  document.getElementById("formContato").reset();
}