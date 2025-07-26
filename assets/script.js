 //seleciona o formulário pelo ID
 document.getElementById("formContato").addEventListener("submit", enviaFormulario);

 //cria a lista de serviços
  const selecionados =[];
  const listaServicos = document.querySelectorAll('#servicos li');

  // Adiciona um evento de clique a cada item da lista
  listaServicos.forEach(item=>{
    item.addEventlistener("click", ()=>{
      const texto = item.textContent;
      
      if (selecionados.includes(texto)){
        selecionados.splice(selecionados.indexOf(texto), 1);
        item.classList.remove("selecionado");
      } else {
        selecionados.push(texto);
        item.classList.add("selecionado");
      }
    });
  });

// Função para enviar o formulário
function enviaFormulario(event){
  // Prevenir o comportamento padrão do formulário
  event.preventDefault();
 

  // Obter os valores dos campos do formulário
  const name = document.getElementById("name").value;
  const tel = document.getElementById("tel").value;
  const project = document.getElementById("project").value;

  const servicosSelecionados = selecionados.join(", ") || "Nenhum serviço selecionado";

  const mensagem = (`Olá me chamo ${name}, meu telefone para contato é ${tel}, e gostaria de realizar o orçamento para o seguinte projeto: ${project}`);
  alert(`Obrigado ${name}, seu pedido foi enviado com sucesso!`);
  console.log(`${name}, 
  ${tel}, 
  ${project}`);

  const numeroWhatsApp = "5587991097719";

  const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsapp, "_blank");
  // Limpar os campos do formulário após o envio
  document.getElementById("formContato").reset();
  // Limpar a lista de serviços selecionados
  selecionados.length = 0;
  listaServicos.forEach(item => {
    item.classList.remove("selecionado");
  });
}