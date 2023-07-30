//LLamamos a express quien se encarga de gestionar las peticiones a nivel servidor
const express = require('express');
//Creamos una constante que puede tener cualquier nombre i.e: poroto
const appiyes = express();
//tenemos que importar path para que no rompa el programa..y traer nuestro html para no tener problemas.
const path = require('path');

//Creamos un numero de puerto: 3000 y se lo asignamos al nombre por defecto: PORT
const PORT = 3000;
//Usamos 'appiyes'(podemos usar cualquier nombre pero lo ideal es no perderme) con la funcion asignada de express para generar la vinculacion.
appiyes.listen(PORT, () => console.log("listening on port:", PORT));


appiyes.get("/home", (req, res) => {
    /* res.send("Welcome sera posible") */
    res.sendFile(path.join(__dirname, 'views/Home.html'))
    })
/* Es importante entender que...ese callback recibe 2 argumentos.
req, res, require and response.
req nos trae informacion de como fue llamada la ruta..
res tiene que ver con la devolucion que hacemos cuando se llama a esa ruta.
*/
    appiyes.get("/ContactaCliente", (req, res) => {
        res.sendFile(path.join(__dirname, 'views/Contacts.html'))
        })    