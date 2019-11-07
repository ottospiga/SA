function Cliente(nome, cpf, cnpj, cep, cidade, bairro, rua, numero,
    celular, telefone, email){
        this.nome = nome;
        this.cpf =  cpf;
        this.cnpj = cnpj;
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

    input = document.getElementById('cnpj');
    let cnpj = input.value;

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


    let cliente = new Cliente(nome, cpf, cnpj, cep, cidade,
        bairro, rua, numero, celular,telefone, email);

    let listClientestr = localStorage.getItem('listaCliente');
    let listCliente = [];
    if (listClientestr != null) {
        listCliente = JSON.parse(listClientestr);
    }

    listCliente.push(cliente);

    listClientestr = JSON.stringify(listCliente);

    localStorage.setItem('listaCliente', listClientestr);
    // REFRESH NA PAGINA
    document.location.reload(true);
}

function validar() {
    let cpf = document.getElementById('cpf');
    if(!cpf.value.trim()) {
        cpf.classList.add('erro-validacao');
    }else{
        cpf.classList.remove('erro-validacao');
        salvarCpf(cpf.value)
    }
    
}

function salvarCpf(cpf) {
    
    // Se nunca foi salvo um array de nomes no local storage,
    // salvamos um vazio
    if (!localStorage.getItem('cpfs')) {
        cpfs = [];
        localStorage.setItem('cpfs', JSON.stringify(cpf));
    }
    // Como queremos
    // ter apenas uma ocorrência de um único nome, primeiro
    // verificamos se ele existe no array. Se existir, avisamos
    // o usuário. Se não, adicionamos ao array.
    nomes = JSON.parse(localStorage.getItem('cpfs'));

    // Se não localizar o nome no array, inclui
    if (!localizarCpf(cpf, cpfs)) {
        cpfs.push(cpf);
        localStorage.setItem('cpfs', JSON.stringify(nomes));
        alert('Cliente incluído com sucesso!');
    } else {
        alert('Cliente já existe!');
    }
}

function localizarCpf(cpf,cpfs) {
    let localizou = false;
    
    for(let i=0; i<cpfs.length;i++){
        if(cpf === cpfs[i]){
            localizou = true;
            break;
        }
    }
    return localizou
}