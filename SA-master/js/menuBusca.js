
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
// FUNÇOES PARA AJAX; CLIENTE, ESTADO E CIDADE\barra lateral\
function abretela(nometela){

    if (nometela == 'cliente')
    {
        nometela='cliente.html';
    }

    $("#conteudo").load(nometela, function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          //alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });

}

function open(nometela){

    if(nometela == 'estado'){
            
        nometela ='estado.html'
    }

    $("#conteudo").load(nometela, function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
        //alert("External content loaded successfully!");
        if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
}

function abra(nometela){

    if(nometela == 'cidade'){
            
        nometela='cidade.html'
    }

    $("#conteudo").load(nometela, function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
        //alert("External content loaded successfully!");
        if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
}