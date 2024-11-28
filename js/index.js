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
                            <h3>Emergency Hep</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi a, interdum rhoncus, nisl, nunc. Ut condimentum aliquet vehicula nunc, egestas diam.</p>
                        </div>
                    </div>
            
            
            `)
            const content = document.querySelector('.services-row');
            content.append(img)
    });
}
getData()

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
e.preventDefault()
}

//element.strDrinkThumb