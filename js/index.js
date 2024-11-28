async function getData(){
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const character = await result.json();
        console.log(character)

// Seleccionar 4 imágenes aleatorias
// Otra forma mas elegante
const randomDrinks = character.drinks.sort(() => 0.5 - Math.random()).slice(0, 4);

    randomDrinks.forEach(element => {
        const img = document.createRange().createContextualFragment(`
            
            <h2>lok</h2>
            <img src="${element.strDrinkThumb}" alt="">
            
            
            `)
            const content = document.getElementById('showcase');
            content.append(img)
    });
}
getData()

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
e.preventDefault()
}