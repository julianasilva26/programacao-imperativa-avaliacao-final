const estudantes = require('./estudantes');

let curso = {
    nomeCurso: "Programação Imperativa",
    notaAP: 7.5,
    faltaMax: 5,
    listaEstudantes: estudantes,
    addAluno: function(aluno) {
        this.listaEstudantes.push(aluno)
    },
    situacao: function(aluno) {
        if(aluno.calcularMedia() >= this.notaAP && aluno.numeroFaltas < this.faltaMax) {
            console.log(`${aluno.nome} está aprovado: true`)
        } else if(aluno.numeroFaltas == this.faltaMax && aluno.calcularMedia > this.notaAP + this.notaAP*0.1) {
            console.log(`${aluno.nome} está aprovado: true`)
        } else {
            console.log(`${aluno.nome} está aprovado: false`)
        }
    },
    listaSituacao: function(alunos) {
        alunos.map((aluno) => { return this.situacao(aluno)})
    }
};

module.exports = curso;