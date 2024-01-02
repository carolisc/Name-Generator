function gerarNome() {
    const dataNascInput = document.getElementById('dataNasc');
    const resultado = document.getElementById('result');
    const dataNasc = new Date(dataNascInput.value);
    const mes = dataNasc.getMonth();
    
    const palavrasPorMes = [
      'Bouncy', 'Giggly', 'Whoopee', 'Quacky', 'Dizzy', 'Fluffy', 'Mumbo-jumbo', 'Noodlehead', 'Brouhaha', 'Higgledy-piggledy', 'Doodle', 'Jamboree'
    ];
    
    const primeiraPalavra = palavrasPorMes[mes];
    
    const dia = dataNasc.getDay();
    let segundaPalavra = (dia <= 15) ? 'Critical' : 'Poltergeist' ;
    
    const nomeGerado = primeiraPalavra + ' ' + segundaPalavra;
    
    resultado.textContent = 'Seu nome gerado é: ' + nomeGerado;
    
  }