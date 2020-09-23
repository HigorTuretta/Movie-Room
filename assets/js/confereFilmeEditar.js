
const txtFilme = document.getElementById('nomeFilme');
const pontuacao = document.getElementById('pontuacao');
const life1 = document.getElementById('life1');
const life2 = document.getElementById('life2');
const life3 = document.getElementById('life3');
const pontosMarcados = document.querySelector('ul.points');
const gameBlock = document.querySelector('.game-block')
const acertoSound = document.getElementById('acerto')
const erroSound = document.getElementById('erro');
const btnsGame = document.querySelector('.btnsGame')
const btnNewGame = document.querySelector('.btnNew')
let cont = 0;
let verifica = false;

$(function () {
    $('[data-toggle="popover"]').popover({ html: true })
})

//objeto dos filmes
const filmes = {
    "results": [
        {
            "nome": "GUERRA NAS ESTRELAS",
            "englishName": "STAR WARS",
            "left": 14.5,
            "top": 45
        },
        {
            "nome": "OS VINGADORES",
            "englishName": "THE AVENGERS",
            "left": 57,
            "top": 46
        },
        {
            "nome": "PROCURANDO NEMO",
            "englishName": "FINDING NEMO",
            "left": 13,
            "top": 33
        },
        {
            "nome": "TOY STORY",
            "englishName": "TOY STORY",
            "left": 35,
            "top": 54.5
        },
        {
            "nome": "JOGOS VORAZES",
            "englishName": "THE HUNGER GAMES",
            "left": 88.5,
            "top": 30
        },
        {
            "nome": "O MÁSCARA",
            "englishName": "THE MASK",
            "left": 59.5,
            "top": 62
        },
        {
            "nome": "INDIANA JONES",
            "englishName": "INDIANA JONES",
            "left": 97.6,
            "top": 76
        },
        {
            "nome": "PARQUE DOS DINOSSAUROS",
            "englishName": "JURASSIC PARK",
            "left": 39,
            "top": 52
        },
        {
            "nome": "MIB",
            "englishName": "MEN IN BLACK",
            "left": 23,
            "top": 57
        },
        {
            "nome": "GREMLINS",
            "englishName": "GREMLINS",
            "left": 74.8,
            "top": 65
        },
        {
            "nome": "007",
            "englishName": "007",
            "left": 97,
            "top": 32
        },
        {
            "nome": "V DE VINGANÇA",
            "englishName": "V FOR VENDETTA",
            "left": 27,
            "top": 80
        },
        {
            "nome": "PÂNICO",
            "englishName": "SCREAM",
            "left": 53.4,
            "top": 54
        },
        {
            "nome": "WALL-E",
            "englishName": "WALL-E",
            "left": 94,
            "top": 78
        },
        {
            "nome": "DE VOLTA PARA O FUTURO",
            "englishName": "BACK TO THE FUTURE",
            "left": 78,
            "top": 74.5
        },
        {
            "nome": "DONNIE DARKO",
            "englishName": "DONNIE DARKO",
            "left": 2.5,
            "top": 68
        },
        {
            "nome": "CLUBE DA LUTA",
            "englishName": "FIGHT CLUB",
            "left": 91.5,
            "top": 30
        },
        {
            "nome": "HARRY POTTER",
            "englishName": "HARRY POTTER",
            "left": 20,
            "top": 43
        },
        {
            "nome": "SENHOR DOS ANÉIS",
            "englishName": "THE LORD OF THE RINGS",
            "left": 41,
            "top": 43
        },
        {
            "nome": "TRANSFORMERS",
            "englishName": "TRANSFORMERS",
            "left": 9,
            "top": 60
        },
        {
            "nome": "O GRANDE DITADOR",
            "englishName": "THE GREAT DICTATOR",
            "left": 31,
            "top": 38
        },
        {
            "nome": "PIRATAS DO CARIBE",
            "englishName": "PIRATES OF THE CARIBBEAN",
            "left": 51,
            "top": 38
        },
        {
            "nome": "EFEITO BORBOLETA",
            "englishName": "THE BUTTERFLY EFFECT",
            "left": 70.5,
            "top": 38
        },
        {
            "nome": "CAÇA FANTASMAS",
            "englishName": "GHOSTBUSTERS",
            "left": 67,
            "top": 62
        },
        {
            "nome": "DETONA RALPH",
            "englishName": "WRECK-IT RALPH",
            "left": 89,
            "top": 45
        },
        {
            "nome": "TARTARUGAS NINJA",
            "englishName": "TEENAGE MUTANT NINJA TURTLES",
            "left": 53,
            "top": 62
        },
        {
            "nome": "OS SIMPSONS",
            "englishName": "THE SIMPSONS",
            "left": 45.5,
            "top": 50.5
        },
        {
            "nome": "VELOZES E FURIOSOS",
            "englishName": "THE FAST AND THE FURIOUS",
            "left": 75.5,
            "top": 51
        },
        {
            "nome": "HOMEM ARANHA",
            "englishName": "SPIDER MAN",
            "left": 5,
            "top": 33
        },
        {
            "nome": "SE BEBER NÃO CASE",
            "englishName": "THE HANGOVER",
            "left": 5,
            "top": 50
        },
        {
            "nome": "MONSTROS S.A.",
            "englishName": "MONSTERS INC",
            "left": 47,
            "top": 73
        },
        {
            "nome": "E.T.",
            "englishName": "ET",
            "left": 54.5,
            "top": 50.5
        },
        {
            "nome": "A ORIGEM",
            "englishName": "INCEPTION",
            "left": 68.5,
            "top": 93
        },
        {
            "nome": "BATMAN",
            "englishName": "BATMAN",
            "left": 8.3,
            "top": 23
        },
        {
            "nome": "MULAN",
            "englishName": "MULAN",
            "left": 53,
            "top": 93
        },
        {
            "nome": "O MÁGICO DE OZ",
            "englishName": "THE WIZARD OF OZ",
            "left": 61,
            "top": 78
        },
        {
            "nome": "O REI LEÃO",
            "englishName": "THE LION KING",
            "left": 22,
            "top": 78
        },
        {
            "nome": "ALADDIN",
            "englishName": "ALADDIN",
            "left": 91,
            "top": 66
        },
        {
            "nome": "CISNE NEGRO",
            "englishName": "BLACK SWAN",
            "left": 98,
            "top": 56
        },
        {
            "nome": "COMO TREINAR O SEU DRAGÃO",
            "englishName": "HOW TO TRAIN YOUR DRAGON",
            "left": 7,
            "top": 89
        },
        {
            "nome": "BOHEMIAN RHAPSODY",
            "englishName": "BOHEMIAN RHAPSODY",
            "left": 30,
            "top": 87
        },
        {
            "nome": "MATRIX",
            "englishName": "MATRIX",
            "left": 14,
            "top": 73
        },
        {
            "nome": "OS FANTASMAS SE DIVERTEM",
            "englishName": "BEETLEJUICE",
            "left": 89,
            "top": 19
        },
        {
            "nome": "FOREST GUMP",
            "englishName": "FOREST GUMP",
            "left": 97.5,
            "top": 84
        },
        {
            "nome": "JOGOS MORTAIS",
            "englishName": "SAW",
            "left": 65.5,
            "top": 69
        },
        {
            "nome": "O EXTERMINADOR DO FUTURO",
            "englishName": "THE TERMINATOR",
            "left": 18.5,
            "top": 75.5
        }
    ]
}

const filmesAcertados = [];

//função principal do jogo
function game() {
    txtFilme.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            if (cont <= 3) {
                //Confere se há espaços em branco ou nenhum caractere digitado
                if ($.trim(txtFilme.value) == '') {
                    erroAnimation()
                } else {
                    if (confereAcertados() === true) {
                        marcacoes(txtFilme.value.toUpperCase())
                        confereFilme(txtFilme.value.toUpperCase());
                        verificaVidas(cont);
                        txtFilme.value = ""
                        console.log(cont)
                    } else {

                        erroAnimation()

                    }
                }
                verifica = false;
                if (pontuacao.value == 45) {
                    setTimeout(() => {
                        gameWin()
                    }, 1800);
                }
            } if (cont > 3) {
                setTimeout(() => {
                    gameOver()
                }, 500);
                
            }


        }
    });
}

//carrega a função game quando a página é totalmente carregada
$(document).ready(function (e) {
    game()
    gameBlock.classList.add('fade-in-fwd')

});

// CONFERE O FILME DIGITADO
function confereFilme(f) {
    verifica = false
    filmes.results.map((i => {
        if (i.nome === f || i.englishName === f) {
            pontuacao.value++;
            acertoSound.play();
            filmesAcertados.push(i.englishName);
            filmesAcertados.push(i.nome)
            txtFilme.value = "";
            return verifica = true
        }
    }))
    if (verifica === false) {
        erroAnimation()
        cont++
    }
}
// CONFERE SE O FILME JÁ FOI DIGITADO
function confereAcertados() {
    let retorno = true;
    for (let i = 0; i < filmesAcertados.length; i++) {
        if (txtFilme.value.toUpperCase() === filmesAcertados[i]) {
            return retorno = false;
        } else {
            retorno = true;
        }
    }
    return retorno;
}
// ATUALIZA AS IMAGENS DAS VIDAS
function verificaVidas(cont) {
    if (cont === 1) {
        life1.src = "assets/img/nolife.png";
        life1.classList.add('blink-1');
    } else if (cont === 2) {
        life2.src = "assets/img/nolife.png";
        life2.classList.add('blink-1');
    } else if (cont === 3) {
        life3.src = "assets/img/nolife.png";
        life3.classList.add('blink-1');
    }
}

//ativa as animações de Erro na Tela
function erroAnimation() {
    txtFilme.classList.add('shake-horizontal')
    erroSound.play();
    const inputFilme = document.querySelector(".shake-horizontal");
    if (inputFilme) {
        inputFilme.addEventListener("animationend", event => {
            if (event.animationName === "shake-horizontal") {                
                inputFilme.classList.remove("shake-horizontal");
                
            }
        });
    }
}

//adiciona as marcações de acerto
function marcacoes(f) {
    filmes.results.map((i) => {
        if (f === i.nome || f === i.englishName) {
            const esquerda = i.left
            const topo = i.top

            const pontosMarcados = document.querySelector('ul.pontinhos');
            const li = document.createElement('li')
            pontosMarcados.appendChild(li)
            li.classList.add('point');
            li.style.left = `${esquerda}%`;
            li.style.top = `${topo}%`;
            li.classList.add('ping')

        }
    })
}

// GAME OVER FUNCTION

function gameOver() {
    const tela = document.querySelector('.tela')
    tela.classList.add('fade-in-fwd')
    tela.src = "assets/img/gameOver.jpg"
    btnsGame.removeAttribute('hidden')
    btnsGame.classList.add('blink-1')
    life1.src = ""
    life2.src = ""
    life3.src = ""
}
//function game win
function gameWin() {
    const tela = document.querySelector('.tela')
    tela.classList.add('fade-in-fwd')
    tela.src = "assets/img/winGame.jpg"
    btnsGame.removeAttribute('hidden')
    btnsGame.classList.add('blink-1')
    life1.src = ""
    life2.src = ""
    life3.src = ""
}

// EVENT PARA CLIQUE NO BOTÃO NEW GAME

btnNewGame.addEventListener('click', () => {
    document.location.reload(true);

})



