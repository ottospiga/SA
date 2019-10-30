function Estado(nome, pais) {
    this.nome = nome;
    this.pais = pais;
    }
    
function salvarEstado() {
  
    let input = document.getElementById('nome_estado');
   
    let nome = input.value;
    
    input = document.getElementById('nome_pais');
    let pais = input.value;

    let estado = new Estado(nome, pais);

    let listEstadoStr = localStorage.getItem('listaEstado');
    let listEstado = [];
    if (listEstadoStr != null) {
        listEstado = JSON.parse(listEstadoStr);
    }

    listEstado.push(estado);

    listEstadoStr = JSON.stringify(listEstado);

    localStorage.setItem('listaEstado', listEstadoStr);
}
function carregarDadosEstado() {
    const pais = "Brasil";
    let input = document.getElementById("nome_pais");
    input.value = pais;

}