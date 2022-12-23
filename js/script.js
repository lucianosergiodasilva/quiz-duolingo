
// Armazena as alternativas
let alts = document.querySelectorAll('.alternativa')

// Armazena os pontos
let pontos = document.getElementById('pontos')

// Armazena o resultado
let resultado = document.getElementById('resultado')

// Objeto da pergunta
let perguntas = [
    {
        titulo: '0) Perguna',
        alternativas: ['Alternativa A', 'Alternativa B', 'Alternativa C', 'Alternativa D'],
        correta: 'Resposta correta',
    },
    {
        titulo: '1) Gato',
        alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
        correta: 1,
    },
    {
        titulo: '2) Fire',
        alternativas: ['Fogo', 'Água', 'Terra', 'Ar'],
        correta: 0,
    },
    {
        titulo: '3) Bird',
        alternativas: ['Gato', 'Urubú', 'Pombo', 'Pássaro'],
        correta: 3,
    },
]

let app = {
    // Mostra a questão, Trata o clique e Checa a resposta
    start: function () {

        this.posicaoAtual = 1
        this.totalPontos = 0

        //  FUNCIONAMENTO DO FOREACH: Para cada elemento de alts vou chamar uma função que recebe um elemento e a posição desse elemento.

        // Adiciona um evento de clique em cada alternativa.
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.checaResposta(index)
            })
        })

        this.atualizaPontos()
        app.mostraQuestao(perguntas[this.posicaoAtual])
    },

    // Mostra a questão
    mostraQuestao: function (q) {

        // Questão atual
        this.qAtual = q

        // Mostra o título
        let tituloDiv = document.getElementById('titulo')
        tituloDiv.textContent = q.titulo

        //  FUNCIONAMENTO DO FOREACH: Para cada elemento de alts vou chamar uma função que recebe um element e a posição desse elemento em index.

        // Mostra as alternativas
        alts.forEach(function (element, index) {
            element.textContent = q.alternativas[index]
        })
    },

    proximaPergunta: function () {
        this.posicaoAtual++
        if (this.posicaoAtual == perguntas.length) {
            this.posicaoAtual = 1
        }
    },

    checaResposta: function (resposta) {
        if (this.qAtual.correta == resposta) {
            this.totalPontos += 10
            this.mostraResultado(true)
            console.log('Acertou!')
        } else {
            this.mostraResultado(false)
            console.log('Errou!')
        }

        this.atualizaPontos()
        this.proximaPergunta()
        this.mostraQuestao(perguntas[this.posicaoAtual])
    },

    atualizaPontos: function () {
        pontos.textContent = `Sua pontuação é: ${this.totalPontos}`
    },

    mostraResultado: function (correto){
        let result = ''
        if(correto){
            result = 'Alternativa correta'
        }
        else{
            // Questão atual
            let pergunta = perguntas[this.posicaoAtual]

            // Índice da alternativa correta, da questão atual
            let indexCorreto = pergunta.correta

            // Texto da alternativa correta, da questão atual
            let textoCorreto = pergunta.alternativas[indexCorreto]

            result = `Errou! Alternativa correta é: ${textoCorreto}`
        }
        resultado.textContent = result
    },
}

// Excetucanto a função 
app.start()