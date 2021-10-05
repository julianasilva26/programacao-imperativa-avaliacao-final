const Aluno = require("./aluno");

let aluno1 = new Aluno("Isabela", 4, [9, 9, 9.8]);
let aluno2 = new Aluno("Lucas", 10, [8, 9.5, 7.8]);
let aluno3 = new Aluno("Gabriel", 2, [6, 8, 9.8]);
let aluno4 = new Aluno("Raimundo", 9, [8, 9, 9.8]);
let aluno5 = new Aluno("Zuldinéa", 4, [7, 6.8, 8.8]);

let estudantes = [aluno1, aluno2, aluno3, aluno4, aluno5];

module.exports = estudantes;