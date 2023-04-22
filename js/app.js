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

    const tweetObj = {
        id: Date.now(),
        tweet,
    };

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    // Una vez agregado, creamos el HTML
    crearHTML();


    // Reiniciar el formulario
    formulario.reset();
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

// Crea un listado de los tweets
function crearHTML() {

    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Crear el HTML
            const li =  document.createElement('li');

            // Agregar el texto
            li.textContent = tweet.tweet;

            // INsertarlo en el HTML
            listaTweets.appendChild(li);
        })
    }
};

// Limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}