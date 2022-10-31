let nomeUsuario = {};
let nome;

let listaMensagens = [{from: 'João', to: 'todos', text: 'entra na sala...', type: 'status', time: "08:02:50"},
{from: 'João', to: 'todos', text: 'bom dia', type: 'message', time: "08:02:50"},
{from: 'João', to: 'patrick', text: 'bom dia', type: 'private_message', time: "08:02:50"}           
];


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

/*setInterval(manterConexao, 5000);*/




function renderizarMensagens(){
    let mensagemChat = document.querySelector(".chat");

    for (let i = 0; i < listaMensagens.length; i++){
        let mensagemDaVez = listaMensagens[i];
        
        if (mensagemDaVez.type === "status"){
            mensagemChat.innerHTML += ` <li class="mensagem-status">
            <p>${mensagemDaVez.time}     <span>${mensagemDaVez.from}</span> ${mensagemDaVez.text}...</p>
        </li>`
        } else if (mensagemDaVez.type === "message"){
            mensagemChat.innerHTML += `<li class="mensagem-normal">
            <p>${mensagemDaVez.time}     <span>${mensagemDaVez.from}</span> para <span>${mensagemDaVez.to}</span>: ${mensagemDaVez.text}</p>
        </li>
`
        } else if (mensagemDaVez.type === "private_message" && nome === mensagemDaVez.to){
            mensagemChat.innerHTML += ` <li class="mensagem-reservada">
            <p>${mensagemDaVez.time}      <span>${mensagemDaVez.from}</span> reservadamente para <span>${mensagemDaVez.to}</span>: ${mensagemDaVez.text}</p>
        </li>  `
        }
   
    }
}

renderizarMensagens();