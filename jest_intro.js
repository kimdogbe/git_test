export { capitalise, reverseString, calc, caesarCipher, analyseArray };

function capitalise(word){
  return word.toUpperCase();
}

function reverseString(word){
  return word.split('').reverse().join('');
}

const calc = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => a / b
}

function caesarCipher(message, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  let encryption = []
  
  message.split('').forEach(element => {
    const index = alphabet.indexOf(element);
    
    if (alphabet.includes(element)) {
      encryption.push(alphabet[ (alphabet.indexOf(element) + shift) % alphabet.length ])
    } else if (upperAlphabet.includes(element)) {
      encryption.push(upperAlphabet[ (upperAlphabet.indexOf(element) + shift) % upperAlphabet.length ])
    } else {
      encryption.push(element);
    }
  });

  return encryption.join('');
}

function analyseArray(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const average = arr.reduce((sum, curr) => sum + curr, 0) / arr.length;
  const length = arr.length

  return {average, min, max, length};
}