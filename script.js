<script>
function enviar() {
  const nome = document.getElementById("nome").value;
  const tel = document.getElementById("tel").value;
  const idade = document.getElementById("idade").value;
  const plano = document.getElementById("plano").value;

  const msg = `Olá, me chamo ${nome}. Tenho ${idade} anos. Quero cotar o plano ${plano}. Meu WhatsApp é ${tel}.`;

  const numeroWhatsApp = "5521965768924"; // SEU NÚMERO AQUI

  const url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(msg);

  window.location.href = url;
}
</script>
