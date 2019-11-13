
function carregarClientes() {
    let clientes = localStorage.getItem('listaCliente');
    clientes = JSON.parse(clientes);

    let table = document.getElementById('table-relatorio');
    let listaColunas = ['nome','cpf', 'cep', 'cidade','celular','telefone', 'email'];

    for (let i = 0; i < clientes.length;i++){
        let row = table.insertRow(i+1);

        for (let j  = 0; j  < listaColunas.length; j ++) {
            let cell = row.insertCell(j);
            let nomeColuna = listaColunas[j];
            cell.innerHTML = clientes[i][nomeColuna];
        }
    }   

}

