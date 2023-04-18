let palavra = 'caramujo não é peixe'
const fraseSeparada = palavra.split("")
var fraseInversa = ""

function inverteFrase(frase){
  for(let i = 19; i>=0; i--){
   fraseInversa += frase[i]
  }
  console.log(fraseInversa)
  
}
inverteFrase(fraseSeparada)
