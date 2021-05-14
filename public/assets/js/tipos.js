let tipo1 = document.getElementById("tipo1");
let tipo2 = document.getElementById("tipo2");
let color1, color2;

const tipos = {
    normal: "#a8a090",
    water: "#3899f8",
    fire: "#f05030",
    grass: "#78c850",
    electric: "#f8d030",
    rock: "#b8a058",
    steel: "#a8a8c0",
    fairy: "#e79fe7",
    psychic: "#f870a0",
    dark: "#7a5848",
    ghost: "#6060b0",
    flying: "#98a8f0",
    bug: "#a8b820",
    fighting: "#a05038",
    ground: "#e9d6a4",
    ice: "#58c8e0",
    dragon: "#7860e0",
    poison: "#b058a0",
};

try {
    
    if (tipo2.textContent == "") {
        tipo2.style.display = "none";
    }

    color1 = tipos[tipo1.textContent];
    color2 = tipos[tipo2.textContent];

    tipo1.style.backgroundColor = color1;
    tipo2.style.backgroundColor = color2;

} catch (error) {

    console.log('No se ha buscado pokemon o el pokemon no existe');

}
