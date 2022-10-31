let nomeUsuario = {};
let nome;


function perguntarNome(){
    
    nome = prompt("Digite corretamente o seu nome"); 
    nomeUsuario = {name: nome};
    
    const promiseNome = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants ", nomeUsuario);
    promiseNome.then(sucessoNome);
    promiseNome.catch(erroNome);
    
}

function sucessoNome(respostaNome){
    console.log(respostaNome.status);
    console.log(nomeUsuario);
}

function erroNome(respostaErroNome){
    if (respostaErroNome.response.status === 400){
        alert("Este nome já está sendo usado, por favor escolha outro");
        perguntarNome();

    }
}

perguntarNome();

function manterConexao(){
    const promiseConexao = ("https://mock-api.driven.com.br/api/v6/uol/status", nomeUsuario);
    console.log(nomeUsuario);
}

setInterval(manterConexao, 5000);
