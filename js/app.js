// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();
function eventListeners() {
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet );

    //Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        console.log(tweets);
        crearHTML();
    })
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
            //Agregar un boton
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'x';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            };


            // Crear el HTML
            const li =  document.createElement('li');

            // Agregar el texto
            li.textContent = tweet.tweet;

            //Asignar el botón
            li.appendChild(btnEliminar);

            // INsertarlo en el HTML
            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
};

// Limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

// Agrega los tweets actuales al localstorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Elimina un tweet
function borrarTweet(id) {
    tweets  = tweets.filter(tweet => tweet.id !== id); 
    crearHTML();
}