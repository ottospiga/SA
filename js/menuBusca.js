
let produtos = ['iphone 11', 'Motorola one', 'sansung s10', 'Xiome MI9', 'iphone 8'];

let nencontrado = false;

function on() {
    let busca = document.getElementById("buscar").value;
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].toLowerCase().indexOf(busca.toLowerCase()) != -1) {
            console.log(produtos[i] + ' indice ' + [i]);
            nencontrado = true;
        }
        if (!nencontrado) {
            console.log('Não foi encontrado na base de dados');


        }
    }
}

