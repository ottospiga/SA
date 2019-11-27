function Cliente(nome, cpf,  cep, cidade, bairro, rua, numero,
    celular, telefone, email){
        this.nome = nome;
        this.cpf =  cpf;
        this.cep = cep;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.celular = celular;
        this.telefone = telefone;
        this.email = email;
    }

function salvarCliente() {
  
    let input;
    input = document.getElementById('nome_cliente');
    let nome = input.value;
    
    input = document.getElementById('cpf');
    let cpf = input.value;

   
    input = document.getElementById('cep');
    let cep = input.value;

    input = document.getElementById('nome_cidade');
    let cidade = input.value;

    input = document.getElementById('nome_bairro');
    let bairro = input.value;

    input = document.getElementById('nome_rua');
    let rua = input.value;

    input = document.getElementById('num');
    let numero = input.value;

    input = document.getElementById('cel');
    let celular = input.value;

    input = document.getElementById('telefone');
    let telefone = input.value;

    input = document.getElementById('email');
    let email = input.value;


    let cliente = new Cliente(nome, cpf,  cep, cidade,
        bairro, rua, numero, celular,telefone, email);

    let listClientestr = localStorage.getItem('listaCliente');
    let listCliente = [];
    if (listClientestr != null) {
        listCliente = JSON.parse(listClientestr);
    }

    let localizou = false;
    
    for(let i=0; i<listCliente.length;i++){
        if(cliente.cpf == listCliente[i].cpf){
            localizou = true;
            alert('cpf ja existe');
            break;
        }
    }
    if (!localizou){
        listCliente.push(cliente);
    

    listClientestr = JSON.stringify(listCliente);

    localStorage.setItem('listaCliente', listClientestr);
    // REFRESH NA PAGINA
    document.location.reload(true);
    }
}

