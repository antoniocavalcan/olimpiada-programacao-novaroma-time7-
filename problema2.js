function ehPalindromo(str) {
    
    const limpa = str.replace(/\s+/g, '').toLowerCase();
    const invertida = limpa.split('').reverse().join('');
    return limpa === invertida;
  }

  // nesse caso, as palavras devem ser escritas nos campos abaixos e no console vai mostrar se é verdadeira ou falso
  console.log(ehPalindromo("arara"));         
  console.log(ehPalindromo("anderson"));   
  console.log(ehPalindromo("ovo"));    
  