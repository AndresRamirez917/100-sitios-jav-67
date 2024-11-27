async function getData(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    console.log(character)
    console.log(character)

}
getData()

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
e.preventDefault()
}