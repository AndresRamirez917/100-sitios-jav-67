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

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
e.preventDefault();
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const fecha = document.getElementById('fecha');
const hora = document.getElementById('hora');
const mensaje = document.getElementById('mensaje');
const arr = [nombre, email, fecha, hora, mensaje];
const messageArr = ["Nombre", "Email", "Fecha", "Hora", "Mensaje"];
for(i = 0; i < arr.length; i++){
    if(arr[i].value == ""){
        swal({
            title: `El campo ${messageArr[i]} no puede estar vacío`,
            icon: "error",
             })
             return false;
    }
}
if(!emailValido(email)){
    swal({
        title: `El campo ${messageArr[1]} no tiene el formato correcto`,
        icon: "error",
         })
         return false;
}
swal({
    title: `Datos enviados satisfactoriamente`,
    icon: "success",
     })
     nombre.value = "";
     email.value = "";
     fecha.value = "";
     hora.value = "";
     mensaje.value = "";
     return true;
}

const emailValido = (email) => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}

//element.strDrinkThumb