const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(input, key) {
    if (!input || !key) throw new Error();

    const formatted_input = input.toUpperCase().split("");
    const formatted_key = key.toUpperCase().split("");

    const result = formatted_input.map(letter => {
      const letter_code = letter.charCodeAt(0) - 65;
      let result = letter;

      if (letter_code >= 0 && letter_code <= 25) {
        result = String.fromCharCode(
          ((letter_code + formatted_key[0].charCodeAt(0) - 65) % 26) + 65
        );
        formatted_key.push(formatted_key.shift());
      }
      return result;
    });

    !this.direct && result.reverse();

    return result.join("");
  }

  decrypt(input, key) {
    if (!input || !key) throw new Error();

    const formatted_input = input.split("");
    const formatted_key = key.toUpperCase().split("");

    const result = formatted_input.map(letter => {
      const letter_code = letter.charCodeAt(0) - 65;
      let result = letter;

      if (letter_code >= 0 && letter_code <= 25) {
        result = String.fromCharCode(
          ((letter_code - (formatted_key[0].charCodeAt(0) - 65) + 26) % 26) + 65
        );
        formatted_key.push(formatted_key.shift());
      }
      return result;
    });

    !this.direct && result.reverse();

    return result.join("");
  }
}

module.exports = VigenereCipheringMachine;
