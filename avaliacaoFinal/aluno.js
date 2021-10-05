let aluno = {
    nome: '',
    numeroFaltas: 0,
    notas: [],
};

function Aluno(nome, numeroFaltas, notas) {
    this.nome = nome,
    this.numeroFaltas = numeroFaltas,
    this.notas = notas,
    this.calcularMedia = function() {
        let total = 0
        for (let i = 0; i < this.notas.length; i++) {
            total = total + this.notas[i]            
        }
        let media = total/this.notas.length
        return media.toFixed(2)
    },
    this.faltas = function() {
        this.numeroFaltas++
    } 
};

module.exports = Aluno;