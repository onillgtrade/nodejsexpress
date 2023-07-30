const express = require('express');
//Creamos una constante que puede tener cualquier nombre i.e: poroto
const poroto = express();

//Creamos un numero de puerto: 3000 y se lo asignamos al nombre por defecto: PORT
const PORT =3000;
//Usamos 'poroto' con la funcion asignada de express para generar la vinculacion.
poroto.listen(PORT, () => console.log("listening on port:", PORT));