async function getData(){
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const character = await result.json();
        console.log(character)

// Seleccionar 4 imágenes aleatorias
// Otra forma mas elegante
const randomDrinks = character.drinks.sort(() => 0.5 - Math.random()).slice(0, 4);

    randomDrinks.forEach(element => {
        const img = document.createRange().createContextualFragment(`
            
             <div class="flex-box box-1">
                        <img src="${element.strDrinkThumb}" alt="">
                        <div class="flex-box-text">
                            <h3>${element.strDrink}</h3>
                            <p>${element.strInstructions}</p>
                        </div>
                    </div>
            
            
            `)
            const content = document.querySelector('.services-row');
            content.append(img)
    });
}
getData()

// const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
// e.preventDefault();
// const nombre = document.getElementById('nombre');
// const email = document.getElementById('email');
// const fecha = document.getElementById('fecha');
// const hora = document.getElementById('hora');
// const mensaje = document.getElementById('mensaje');
// const arr = [nombre, email, fecha, hora, mensaje];
// const messageArr = ["Nombre", "Email", "Fecha", "Hora", "Mensaje"];
// for(i = 0; i < arr.length; i++){
//     if(arr[i].value == ""){
//         swal({
//             title: `El campo ${messageArr[i]} no puede estar vacío`,
//             icon: "error",
//              })
//              return false;
//     }
// }
// if(!emailValido(email)){
//     swal({
//         title: `El campo ${messageArr[1]} no tiene el formato correcto`,
//         icon: "error",
//          })
//          return false;
// }
// swal({
//     title: `Datos enviados satisfactoriamente`,
//     icon: "success",
//      })
//      nombre.value = "";
//      email.value = "";
//      fecha.value = "";
//      hora.value = "";
//      mensaje.value = "";
//      return true;
// }

// const emailValido = (email) => {
// return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
// }



// FORMA MAS LEGIBLE HECHA POR CHATGPT
// document.getElementById('btn-validar').onclick = (e) => {
//     e.preventDefault();
    
//     const fields = [
//         { element: document.getElementById('nombre'), name: "Nombre" },
//         { element: document.getElementById('email'), name: "Email" },
//         { element: document.getElementById('fecha'), name: "Fecha" },
//         { element: document.getElementById('hora'), name: "Hora" },
//         { element: document.getElementById('mensaje'), name: "Mensaje" }
//     ];

//     for (let field of fields) {
//         if (field.element.value.trim() === "") {
//             swal({
//                 title: `El campo ${field.name} no puede estar vacío`,
//                 icon: "error",
//             });
//             return false;
//         }
//     }

//     if (!isValidEmail(fields[1].element.value)) {
//         swal({
//             title: `El campo ${fields[1].name} no tiene el formato correcto`,
//             icon: "error",
//         });
//         return false;
//     }

//     swal({
//         title: `Datos enviados satisfactoriamente`,
//         icon: "success",
//     });

//     fields.forEach(field => field.element.value = "");
//     return true;
// };

// const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// };


// FORMA CON MENOS CODIGO USANDO DESTRUCTURACION HECHA POR CHATGPT
document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault();
    
    const fields = [
        { id: 'nombre', name: "Nombre" },
        { id: 'email', name: "Email" },
        { id: 'fecha', name: "Fecha" },
        { id: 'hora', name: "Hora" },
        { id: 'mensaje', name: "Mensaje" }
    ];

    for (let { id, name } of fields) {
        const element = document.getElementById(id);
        if (element.value.trim() === "") {
            return swal({ title: `El campo ${name} no puede estar vacío`, icon: "error" });
        }
        if (id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.value)) {
            return swal({ title: `El campo ${name} no tiene el formato correcto`, icon: "error" });
        }
    }

    swal({ title: `Datos enviados satisfactoriamente`, icon: "success" });
    fields.forEach(({ id }) => document.getElementById(id).value = "");
};