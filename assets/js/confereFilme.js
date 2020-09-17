
const txtFilme = document.getElementById('nomeFilme');
const pontuacao = document.getElementById('pontuacao');
const life1 = document.getElementById('life1');
const life2 = document.getElementById('life2');
const life3 = document.getElementById('life3');
const pontosMarcados = document.querySelector('ul.points');
let cont = 0;
let verifica = false;

const filmesTest = {
    "results": [
        {
            "nome": "STAR WARS",
            "left": 14.5,
            "top": 45
        },
        {
            "nome": "VINGADORES",
            "left": 57,
            "top": 46
        },
        {
            "nome": "PROCURANDO NEMO",
            "left": 13,
            "top": 33
        },
        {
            "nome": "TOY STORY",
            "left": 35,
            "top": 54.5
        },
        {
            "nome": "JOGOS VORAZES",
            "left": 88.5,
            "top": 30
        },
        {
            "nome": "O MÁSCARA",
            "left": 59.5,
            "top": 62
        },
        {
            "nome": "INDIANA JONES",
            "left": 97.6,
            "top": 76
        },
        {
            "nome": "JURASSIC PARK",
            "left": 39,
            "top": 52
        },
        {
            "nome": "MIB",
            "left": 23,
            "top": 57
        },
        {
            "nome": "GREMILINS",
            "left": 74.8,
            "top": 65
        },
        {
            "nome": "007",
            "left": 97,
            "top": 32
        },
        {
            "nome": "V DE VINGANÇA",
            "left": 27,
            "top": 80
        },
        {
            "nome": "PÂNICO",
            "left": 53.4,
            "top": 54
        },
        {
            "nome": "WALL-E",
            "left": 94,
            "top": 78
        },
        {
            "nome": "DE VOLTA PARA O FUTURO",
            "left": 78,
            "top": 74.5
        },
        {
            "nome": "DONNIE DARKO",
            "left": 2.5,
            "top": 68
        },
        {
            "nome": "CLUBE DA LUTA",
            "left": 91.5,
            "top": 30
        },
        {
            "nome": "HARRY POTTER",
            "left": 20,
            "top": 43
        },
        {
            "nome": "SENHOR DOS ANÉIS",
            "left": 41,
            "top": 43
        },
        {
            "nome": "TRANSFORMERS",
            "left": 9,
            "top": 60
        },
        {
            "nome": "O GRANDE DITADOR",
            "left": 31,
            "top": 38
        },
        {
            "nome": "PIRATAS DO CARIBE",
            "left": 51,
            "top": 38
        },
        {
            "nome": "EFEITO BORBOLETA",
            "left": 70.5,
            "top": 38
        },
        {
            "nome": "CAÇA FANTASMAS",
            "left": 67,
            "top": 62
        },
        {
            "nome": "DETONA RALPH",
            "left": 89,
            "top": 45
        },
        {
            "nome": "TARTARUGAS NINJA",
            "left": 53,
            "top": 62
        },
        {
            "nome": "OS SIMPSONS",
            "left": 45.5,
            "top": 50.5
        },
        {
            "nome": "VELOZES E FURIOSOS",
            "left": 75.5,
            "top": 51
        }
    ]
}

const filmes = [

    'STAR WARS',
    'VINGADORES',
    'PROCURANDO NEMO',
    'TOY STORY',
    'JOGOS VORAZES',
    'O MÁSCARA',
    'INDIANA JONES',
    'JURASSIC PARK',
    'MIB',
    'GREMILINS',
    '007',
    'V DE VINGANÇA',
    'PÂNICO',
    'WALL-E',
    'DE VOLTA PARA O FUTURO',
    'DONNIE DARKO',
    'CLUBE DA LUTA',
    'HARRY POTTER',
    'SENHOR DOS ANÉIS',
    'TRANSFORMERS',
    'O GRANDE DITADOR',
    'PIRATAS DO CARIBE',
    'EFEITO BORBOLETA',
    'CAÇA FANTASMAS',
    'DETONA RALPH',
    'TARTARUGAS NINJA',
    'OS SIMPSONS',
    'VELOZES E FURIOSOS'

];

const filmesAcertados = [];

$(document).ready(function (e) {
    // EVENT PARA TECLA ENTER
    txtFilme.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            if (cont <= 3) {
                //Confere se há espaços em branco ou nenhum caractere digitado
                if ($.trim(txtFilme.value) == '') {
                } else {
                    if (confereAcertados() === true) {
                        marcacoes(txtFilme.value.toUpperCase())
                        confereFilme();
                        verificaVidas(cont);
                        txtFilme.value = ""
                    }
                }
                verifica = false;

            } console.log(cont);


        }
    });
});

// CONFERE O FILME DIGITADO
function confereFilme() {
    for (let i = 0; i < filmes.length; i++) {
        if (filmes[i] === txtFilme.value.toUpperCase()) {
            pontuacao.value++;
            filmesAcertados[i] = txtFilme.value;
            txtFilme.value = "";
            return verifica = true
        } else {
            verifica = false;
        }
    }
    if (verifica === false) {
        cont++
    }
}
// CONFERE SE O FILME JÁ FOI DIGITADO
function confereAcertados() {
    let retorno = true;
    for (let j = 0; j < filmesAcertados.length; j++) {
        if (txtFilme.value.toUpperCase() === filmesAcertados[j]) {
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
    } else if (cont === 2) {
        life2.src = "assets/img/nolife.png";
    } else if (cont === 3) {
        life3.src = "assets/img/nolife.png";
    }
}


function marcacoes(f) {
    filmesTest.results.map((i, j) => {
        if (f === i.nome) {
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



