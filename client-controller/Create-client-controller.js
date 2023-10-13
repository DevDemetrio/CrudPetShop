import { clientServerExport } from "../service/clienteServer/cliente_server.js";
const table = document.querySelector("[data-form]");

table.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.querySelector("[data-nome]").value;
  const email = event.target.querySelector("[data-email]").value;

  clientServerExport.createClient(name, email).then(() => {
    window.location.href = "../telas/cadastro_concluido.html";
  });
});
