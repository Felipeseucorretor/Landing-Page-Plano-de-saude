document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const idade = document.getElementById("idade").value;
  const plano = document.getElementById("tipoPlano").value;

  const mensagem = `Olá, me chamo ${nome}. Tenho ${idade} anos. Quero cotar plano ${plano}. Meu WhatsApp: ${telefone}`;

  const numeroWhatsApp = "5521965768924";

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});
