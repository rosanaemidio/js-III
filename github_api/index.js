// documentacao da api do github  https://developer.github.com/v3/
// requisição na api pela url https://api.github.com
// fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma

const url = `https://api.github.com/users/rosanaemidio`

// `http://api.giphy.com/v1/gifs/search?q=harrypotter&api_key=dc6zaTOxFJmzC&limit=3&offset=0`


async function buscarApi(url){
    try{
        const response = await fetch(url);
         if (response.ok){
             const json = await response.json();
             criarImagem(json.avatar_url);
         } else{
             console.log(response.statusText);
     
             const err = `${response.status}: ${response.status}</h1>`
             criaErro(err);
         }
        }catch (error){
            criaErro('Falha na requisição da API')
        }      
        // .then(response => response.json()) //o item em laranja é o parametro de condição.
        // .then(json => criarImagem(json.data))
        // .catch(erro => console.error(erro))
    }

function criarImagem(src){
    document.body.innerHTML = `
    <img src=${src}>
    `
    
}

criaErro = (erro) =>{
    document.body.innerHTML = `<h1 style="color:red">${erro}</h1>`
}
buscarApi(url)