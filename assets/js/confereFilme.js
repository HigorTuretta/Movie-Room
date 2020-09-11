
const txtFilme = document.getElementById('nomeFilme');
const pontuacao = document.getElementById('pontuacao');
const life1 = document.getElementById('life1');
const life2 = document.getElementById('life2');
const life3 = document.getElementById('life3');
let cont = 0;
let verifica = false;

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
    'DONIE DARKO',
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
                //por enquanto da pra manter essa conferência se é String ou não, não há filmes com números ainda
                if ($.trim(txtFilme.value) == '' || typeof txtFilme.value !== String) {

                } else {
                    if (confereAcertados() === true) {

                        confereFilme();
                        verificaVidas(cont);
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
        if (txtFilme.value.toLowerCase() === filmesAcertados[j]) {
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


