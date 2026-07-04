<script>
function enviar() {
  let nome = document.getElementById("nome").value;
  let tel = document.getElementById("tel").value;
  let idade = document.getElementById("idade").value;
  let plano = document.getElementById("plano").value;

  let msg = `Olá, me chamo ${nome}, tenho ${idade} anos e quero cotar o plano ${plano}. Meu WhatsApp: ${tel}`;

  window.open(
    "https://wa.me/5521965768924?text=" + encodeURIComponent(msg),
    "_blank"
  );
}
</script>
