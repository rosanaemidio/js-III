// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root



const input = document.getElementById('gifInput');
// console.log('input');

const botao = document.querySelector('#gifButton');

const div = document.querySelector('#root')

botao.addEventListener('click', function(evento){
    fazerAlgoDepoisDeClicar(evento)

});

function fazerAlgoDepoisDeClicar(evento){
    evento.preventDefault();
    div.innerHTML = ' ';
    const valorDoInput = input.value;
    // console.log(valorDoInput);

    const minhaChave = 'dc6zaTOxFJmzC'
    const oQueQueroBuscar = valorDoInput;
    const enderecoAPI = `http://api.giphy.com/v1/gifs/search?api_key=${minhaChave}&q=${oQueQueroBuscar}&limit=3`;
    // console.log(enderecoAPI);
    

    
    const request = new XMLHttpRequest()
    request.open('get', enderecoAPI);
    request.send();
    request.onreadystatechange = function pegandoResposta() {
        if(request.readyState === 4){
            if (request.status ===200){
                console.log('a resposta está pronta')
            }else{
                const statusCode = request.status;
                const statusMensagem =request.statusText;

                console.error('Este é o meu console error', statusCode, statusMensagem);

                div.innerHTML = `<h1>Falha ${statusCode}: ${statusMensagem}</h1>`
            }

            const resposta = request.response;
            const json = JSON.parse(resposta);

            const arrData = json.data;

            for (const iterator of arrData) {
                div.innerHTML += `<img src=${iterator.images.original.url}>`
                
            }
        }
    }




}