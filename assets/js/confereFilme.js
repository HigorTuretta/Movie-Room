$(document).ready(function (e) {

    const txtFilme = document.getElementById('nomeFilme');
    const pontuacao = document.getElementById('pontuacao');
    const life1 = document.getElementById('life1');
    const life2 = document.getElementById('life2');
    const life3 = document.getElementById('life3');
    let cont = 0;
    let verifica = false;

    const filmes = [
        'Guerra nas Estrelas',
        'Vingadores',
        'Procurando Nemo',
        'Toy Story'
    ];



    txtFilme.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            if (cont <= 3) {
                for (let i = 0; i < filmes.length; i++) {
                    if (filmes[i].toUpperCase() === txtFilme.value.toUpperCase()) {
                        pontuacao.value++;
                        txtFilme.value = "";
                        return verifica = true
                    }else{
                        verifica = false;
                    }                    
                }
               if(verifica === false){
                   cont++
               }
                verificaVidas(cont);
                verifica = false;

            } console.log(cont);
            

        }
    });
});



function verificaVidas(cont) {
    if (cont === 1) {
        life1.src = "assets/img/nolife.png";
    } else if (cont === 2) {
        life2.src = "assets/img/nolife.png";
    } else if(cont === 3) {
        life3.src = "assets/img/nolife.png";
    }
}


