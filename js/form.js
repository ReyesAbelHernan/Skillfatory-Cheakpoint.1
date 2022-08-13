let nombre = document.querySelector('#nombre');
let email = document.querySelector('#email');
let mensaje = document.querySelector('#mensaje');
let buttonSubmit = document.getElementById('button')

buttonSubmit.addEventListener('click', () =>{
    let contenedor = document.getElementById('contenedor')
    let divResults = document.createElement('div')
    divResults.id = "results"
    let h3 = document.createElement('h3')
    h3.innerHTML = `Mensaje`;
    divResults.appendChild(h3);


    let labelNombre = document.createElement('label');
    labelNombre.innerHTML = `Nombre: ${nombre.value}`;
    divResults.appendChild(labelNombre);

    let labelEmail = document.createElement('label');
    labelEmail.innerHTML = `Email: ${email.value}`;
    divResults.appendChild(labelEmail);

    let labelMensaje = document.createElement('label');
    labelMensaje.innerHTML = `Comentario: ${mensaje.value}`;
    labelMensaje.id = "mensaje"
    divResults.appendChild(labelMensaje);
    contenedor.appendChild(divResults)



    console.log("Name", nombre.value);
    console.log("Email", email.value);
    console.log("comentario", mensaje.value);
});