const tarjetas = [
    {
        id: 1,
        image: 'animal_tsuchinoko.png',
    },
    {
        id: 2,
        image: 'character_cthulhu_night_gaunts.png',
    },
    {
        id: 3,
        image: 'youkai_tengu.png',
    },
    {
        id: 4,
        image: 'youkai_otoroshi.png',
    },
    {
        id: 5,
        image: 'youkai_nurikabe.png',
    },
    {
        id: 6,
        image: 'youkai_kotobuki.png',
    },
    {
        id: 7,
        image: 'youkai_jinmenken.png',
    },
    {
        id: 8,
        image: 'youkai_ittanmomen.png',
    },
    {
        id: 9,
        image: 'youkai_chouchin_obake.png',
    },
    {
        id: 10,
        image: 'youkai_binbougami.png',
    },
    {
        id: 11,
        image: 'youkai_amabiko.png',
    },
    {
        id: 12,
        image: 'youkai_amabie_mimi.png',
    },
    {
        id: 13,
        image: 'youkai_akaheru.png',
    },
    {
        id: 14,
        image: 'setsubun_oni_kowai.png',
    },
    {
        id: 15,
        image: 'fantasy_succubus.png',
    },
    {
        id: 16,
        image: 'cthulhu_deep_ones.png',
    },
    {
        id: 1,
        image: 'animal_tsuchinoko.png',
    },
    {
        id: 2,
        image: 'character_cthulhu_night_gaunts.png',
    },
    {
        id: 3,
        image: 'youkai_tengu.png',
    },
    {
        id: 4,
        image: 'youkai_otoroshi.png',
    },
    {
        id: 5,
        image: 'youkai_nurikabe.png',
    },
    {
        id: 6,
        image: 'youkai_kotobuki.png',
    },
    {
        id: 7,
        image: 'youkai_jinmenken.png',
    },
    {
        id: 8,
        image: 'youkai_ittanmomen.png',
    },
    {
        id: 9,
        image: 'youkai_chouchin_obake.png',
    },
    {
        id: 10,
        image: 'youkai_binbougami.png',
    },
    {
        id: 11,
        image: 'youkai_amabiko.png',
    },
    {
        id: 12,
        image: 'youkai_amabie_mimi.png',
    },
    {
        id: 13,
        image: 'youkai_akaheru.png',
    },
    {
        id: 14,
        image: 'setsubun_oni_kowai.png',
    },
    {
        id: 15,
        image: 'fantasy_succubus.png',
    },
    {
        id: 16,
        image: 'cthulhu_deep_ones.png',
    }
]

tarjetas.sort(() => 0.5 - Math.random())

const VISTA_TRASERA_TARJETA = './images/pattern_uroko.jpg'
const cuadricula = document.getElementById('game-board')
const puntajeDisplay = document.getElementById('score')
const intentosDisplay = document.getElementById('attempts')
const tarjetasVolteadas = []

let numeroDeParesEncontrados = 0
let numeroDeIntentos = 0

prepararJuego()

function checarSiEsPar() {
    if (tarjetasVolteadas.length !== 2) {
        return
    }

    numeroDeIntentos++
    const cardElements = document.querySelectorAll('img')
    const secondPick = tarjetasVolteadas.pop()
    const firstPick = tarjetasVolteadas.pop()

    if (firstPick.index === secondPick.index) {
        cardElements[firstPick.index].setAttribute('src', VISTA_TRASERA_TARJETA)
        cardElements[secondPick.index].setAttribute('src', VISTA_TRASERA_TARJETA)
        alert('you suck!')
    } else if (firstPick.id === secondPick.id) {
        numeroDeParesEncontrados++
        cardElements[firstPick.index].removeEventListener('click', voltearTarjeta)
        cardElements[secondPick.index].removeEventListener('click', voltearTarjeta)
    } else {
        setTimeout(() => {
            cardElements[firstPick.index].setAttribute('src', VISTA_TRASERA_TARJETA)
            cardElements[secondPick.index].setAttribute('src', VISTA_TRASERA_TARJETA)
        }, 500)
    }

    puntajeDisplay.textContent = numeroDeParesEncontrados
    intentosDisplay.textContent = numeroDeIntentos

    if (numeroDeParesEncontrados*2 === tarjetas.length) {
        alert(`Congratulations! You won in ${numeroDeIntentos} attempts!`)
    }
}

function voltearTarjeta() {
    const cardIndex = this.getAttribute('data-index')
    const card = tarjetas[cardIndex]

    tarjetasVolteadas.push({
        id: card.id,
        index: cardIndex
    })

    this.setAttribute('src', `./images/${card.image}`)

    checarSiEsPar()
}

function prepararJuego() {
    puntajeDisplay.textContent = numeroDeParesEncontrados
    intentosDisplay.textContent = numeroDeIntentos

    tarjetas.forEach((card, index) => {
        const tile = document.createElement('img')

        tile.setAttribute('src', VISTA_TRASERA_TARJETA)
        tile.setAttribute('data-index', index)
        tile.addEventListener('click', voltearTarjeta)

        cuadricula.append(tile)
    })
}
