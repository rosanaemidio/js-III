// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

//Pegar o value do input


const request = new XMLHttpRequest()
const input = document.getElementById('gifInput')
console.log('input');

const botao = document.querySelector('#gifButton');

botao.addEventListener('click', function(evento){
    fazerAlgoDepoisDeClicar(evento)

});

function fazerAlgoDepoisDeClicar(evento){
    evento.preventDefault();
    const valorDoInput = input.nodeValue;
    // console.log(valorDoInput);

    const minhaChave = 'dc6zaTOxFJmzC'
    const oQueQueroBuscar = valorDoInput;
    const enderecoAPI = `http://api.giphy.com/v1/gifs/search?api_key=${minhaChave}&q=${oQueQueroBuscar}&limit=3`;
    console.log(enderecoAPI);
    

    
    const request = new XMLHttpRequest()
    request.open('get', enderecoAPI);
    request.send();
    request.onreadystatechange = function pegandoResposta() {
        
    }




}