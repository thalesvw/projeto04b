const students = [{
  name: "João",
  note1: 7,
  note2: 8,
},
  {
    name: "Leticia",
    note1: 5,
    note2: 8,
  },
  {
    name: "Diego",
    note1: 4,
    note2: 2,
  },
  {
    name: "Julia",
    note1: 9,
    note2: 10,
  },
]
function calcMedia(note1, note2) {
  return (note1 + note2) /2
}

for (let media of students) {
  let total = calcMedia(media.note1, media.note2)
  if (total >= 7) {
    alert(`A média do aluno ${media.name} é: ${total} Aprovado`)
  } else {
    alert(`A média do aluno ${media.name} é: ${total} Reprovado`)
  }
}