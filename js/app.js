// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarTweet )
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Textarea dond eel usuario escribe
    const tweet = document.querySelector('#tweet').value;
    // Validacion
    if (tweet === '') {
        mostrarError('El campo no puede estar vacío');
        return;
    }
    console.log('Agregando tweet');   
};



//Mostrar Mensaje de Error
function mostrarError(error) {
    const mensajeError =document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);


    //Elimina la alerta después de tres segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

};
