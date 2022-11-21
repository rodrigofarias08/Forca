

//Programa para pedir uma palavra.
//Em seguida, pedir letras até que todas as letras da palavra sejam mencionadas.


let palavra = prompt("Digite uma palavra:").toUpperCase()

let nLetras = palavra.length

//Número de letras que permanecem ocultas
let letrasDescobertas = " _".repeat(nLetras)

//Letras que não foram descobertas
let letrasOcultas = ""
palavra.split("").forEach(element => {
  letrasOcultas += " " + element
});

// Enquanto alguma letra permanecer oculta (_) continua pedindo letras
while (letrasDescobertas.includes("_")) {

  let letra = prompt(`Letras descobertas:
    ${letrasDescobertas}

    Digite a próxima letra:`).toUpperCase().charAt(0)

  for (let i = 1; i < nLetras*2; i= i+2) {

    alert(`      
      letra: ${letra}
      palavra.charAt(i): ${letrasOcultas.charAt(i)}`)
    
    if (letra === letrasOcultas.charAt(i)) {


      //letrasDescobertas recebe a letra digitada:
      let parte1 = letrasDescobertas.substring(0, i - 1) 

      
      let parte2 = letrasDescobertas.substring(i + 1)
      letrasDescobertas = parte1 + letra + parte2

      
      alert(`Parabéns! Você descobriu a letra ${letra}!
      
      Parte1: ${parte1}
      Parte2: ${parte2}`)

    }
  }
}

alert(`Parabéns! Você descobriu a palavra ${palavra}!`)
