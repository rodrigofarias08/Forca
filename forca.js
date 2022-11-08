

//Programa para pedir uma palavra.
//Em seguida, pedir letras até que todas as letras da palavra sejam mencionadas.


let palavra = prompt("Digite uma palavra:").toUpperCase()

let nLetras = palavra.length

//Número de letras que permanecem ocultas
let letrasDescobertas = "_".repeat(nLetras)


// Enquanto alguma letra permanecer oculta (_) continua pedindo letras
while (letrasDescobertas.includes("_")) {

  let letra = prompt(`Letras descobertas:
    ${letrasDescobertas}

    Digite a próxima letra:`).toUpperCase().charAt(0)

  for (let i = 0; i < nLetras; i++) {
    
    if (letra === palavra.charAt(i)) {

      alert(`Parabéns! Você descobriu a letra ${letra}!`)

      //letrasDescobertas recebe a letra digitada:
      letrasDescobertas = letrasDescobertas.substring(0, i - 1) + letra + letrasDescobertas.substring(i + 1)

    }
  }
}

alert(`Parabéns! Você descobriu a palavra ${palavra}!`)
