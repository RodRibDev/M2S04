function assistirEpisodio(numero) {
    console.log("Assistindo ao episódio nº" + numero)
}
const diveps = document.getElementById('divepisodios')
diveps.innerHTML += `<img onclick="assistirEpisodio(1)" class="telas" src="./image/ep2.png">
                    <img onclick="assistirEpisodio(2)" class="telas" src="./image/ep1.png">
                    <img onclick="assistirEpisodio(3)" class="telas" src="./image/ep1.png">`