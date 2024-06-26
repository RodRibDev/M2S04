function assistirEpisodio(numero) {
    console.log("Assistindo ao episódio nº" + numero)
}
const episodios = [
    {
        id: 1,
        episodio: 'T1:01',
        tempo: '54min'
    },
    {
        id: 2,
        episodio: 'T1:02',
        tempo: '52min'
    },
    {
        id: 3,
        episodio: 'T1:03',
        tempo: '50min'
    },
]
const diveps = document.getElementById('divepisodios')

episodios.forEach(episodio => {
    const cardEpisodio = document.createElement('div')
    cardEpisodio.className = 'cardEpisodio'
    cardEpisodio.innerHTML = `
                                <span>${episodio.episodio}</span>
                                <span>${episodio.tempo}</span>
                                <button onclick="assistirepisodio(${episodio.id})">Assitir</button>  
        
                                `
    diveps.appendChild(cardEpisodio)

})

function assistirepisodio(id) {
    console.log(`Assistindo episódio ${id}`)


}

