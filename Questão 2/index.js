function pertenceFibonacci(numero) {
    let numeroAnterior = 0;
    let numeroAtual = 1;
    let proximoNumero = 1;
    while (proximoNumero < numero) {
      proximoNumero = numeroAnterior + numeroAtual;
      numeroAnterior = numeroAtual;
      numeroAtual = proximoNumero;
    }
    return proximoNumero === numero;
  }
  
  // Exemplo de uso da função para saber se pertence a sequência
  
  console.log(pertenceFibonacci(5)); // retorna true
  console.log(pertenceFibonacci(10)); // retorna false