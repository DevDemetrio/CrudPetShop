import { clientServerExport } from "../service/clienteServer/cliente_server.js";
const newLine = (nome, email) => {
  const line = document.createElement("tr");
  const content = `
     <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`;

  line.innerHTML = content;
  return line;
};

const table = document.querySelector("[data-tabela]");

clientServerExport.getDade().then((dados) => {
  dados.forEach((element) => {
    table.appendChild(newLine(element.nome, element.email));
  });
});

/*
clientServerExport.getDade().then((dados) =>
  dados.forEach((element) => {
    console.log(element.nome, element.email);
    table.appendChild(newLine(element.nome, element.email));
  })
);
*/
