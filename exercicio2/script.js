alert("Borá fazer um desafio de lista!?")
let students = [
    {
        name:"Inacio",
        firstTest: 5,
        secondTest: 9,
    },
    {
        name:"Ana",
        firstTest: 10,
        secondTest: 10,
    },
    {
        name:"Igor",
        firstTest: 3,
        secondTest: 9,
    },
    {
        name:"Vana",
        firstTest: 3,
        secondTest: 1,
    },
    {
        name:"Ivan",
        firstTest: 9,
        secondTest: 9,
    },
]

function pointAverage(proofFirst, proofSecond){
    return ((proofFirst + proofSecond) / 2).toFixed(1)
}

for (const student of students) {
    let myPoint = pointAverage(student.firstTest, student.secondTest)
    if (myPoint >= 7) {
        alert(`
        A media do(a) aluno(a) ${student.name}: ${myPoint}
        Parabens ${student.name}!! Voce foi aprovado(a).
        `)
    }else{
        alert(`
        A media do(a) aluno(a) ${student.name}: ${myPoint}
        Não foi dessa vez, ${student.name}! Tente novamente..
        `)
    }
}