function carregarDados () {
    let listEstadoStr = localStorage.getItem('listaEstado');
    let listaEstados = [];
    if (listEstadoStr != null) {
        listaEstados = JSON.parse(listEstadoStr);
    }
    let comboEstado = document.getElementById("comboEstado");
    let option;
    for (let index = 0; index < listaEstados.length;index++){
        option = document.createElement("option")
        option.text = listaEstados[index].nome;
        option.value = listaEstados[index].nome;
        comboEstado.add(option);
    }    
}

function Cidade(nome, estado){
    this.nome = nome;
    this.estado = estado;
}
function salvarCidade() {

    let input = document.getElementById('nome_cidade');
    let nome = input.value;
    
    let select = document.getElementById('comboEstado');
    let estado = select.value;

    let cidade = new Cidade(nome, estado);

    let listCidadeStr = localStorage.getItem('Cidade');
    let listCidade = [];
    if (listCidadeStr != null) {
        listCidade = JSON.parse(listCidadeStr);
    }

    listCidade.push(cidade);
    listCidadeStr = JSON.stringify(listCidade) 
    localStorage.setItem('Cidade', listCidadeStr);
}

