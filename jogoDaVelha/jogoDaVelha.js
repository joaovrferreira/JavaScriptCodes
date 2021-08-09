const jodoDaVelha = {
    tabuleiro: ["", "", "", "", "", "", "", "", ""],
    simbolo: ["X", "O"],
    elementos: null, 

    init: function(elm){
        this.elementos = elm;
    },

    escrever: function(){
        let cont = '';

        for (i in this.tabuleiro) {
            cont += '<div>' + i + '</div>';
        }

        this.elementos.innerHTML = cont;
    }

};