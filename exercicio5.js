function InverterString(str) {
 let Stringinvertida = ' ';
 for (let i = str.length - 1; i >= 0; i--) {
     //mapeando caracteres
     Stringinvertida += str[i];
 }
 return Stringinvertida;
}

// Imprimindo string padrão e sua inversão
const stringqualquer = 'Olá, Target!';
console.log('String padrão:', stringqualquer);

const stringeminversao = InverterString(stringqualquer);
console.log('String invertida: ', stringeminversao);
