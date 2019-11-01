function criaTexto(texto){
    const div = document.querySelector('#root');
    div.innerHTML += `<h1>${texto}</h1>`

}

const sabao = true;
const agua = true;

function ensaboar() {
    return new Prommise((resolve, reject) => {
        if(sabao){
            setTimeout(() => {
            resolve('terminou de ensaboar')    
            }, 5000);
        }else{
            reject('não consigo ensaboar')
        }
    })
}

ensaboar().catch(reject => {console.log(reject )})

// function enxaguar() {
//     return new Promise((resolve, reject) => {
//         if (agua){
//             setTimeout(() => {
//                 resolve('terminou de enxaguar')
//             }, 2000);
//         }else {
//             setTimeout(() => {
//                 reject('não consigo enxaguar')
//             }, 2000);
//         }
//     })


// }