


function carregarDados() {
    const pais = 'Brasil';
    document.getElementById('nome_pais').value = pais;
    }
    
//Contrutor para Estado
function Estado(nome, pais) {
    this.nome = nome;
    this.pais = pais;
    }
    
    
function salvarEstado() {
    //Pegar o elemento HTML com id "nome e guardar em input
let input = document.getElementById('nome_estado');
    //Pegar o valor de dentro de input, ou seja, o que o usuário digitou//
    //e guardar em nome (variável)//
let nome = input.value;
    //Salvar o nome digitado no storage com chave 'nome' 
input = document.getElementById('nome_pais');
let pais = input.value;
    //Usa o construtor Estado para criar o objeto estado
let estado = new Estado(nome, pais);
    //console.log(estado);
    //let estadoStr = JSON.stringify(estado);
    //console.log(estadoStr);

let estadoStr = JSON.stringify(estado);
   // console.log(estadoStr);    
// Traz da página o no me do país   
localStorage.setItem('estado', estadoStr);
}

