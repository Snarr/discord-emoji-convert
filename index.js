let num_words = ['zero','one','two','three','four',
'five','six','seven','eight','nine'];

let symbolTable = {
  "!": ':exclamation:',
  "?": ':question:',
  "+": ":heavy_plus_sign:",
  "-": ":heavy_minus_sign:",
  "×": ":heavy_multiplication_x:",
  "*": ":asterisk:",
  "$": ":heavy_dollar_sign:",
  "/": ":heavy_division_sign:"
};

exports.convert = (input) => {
  input = input.toLowerCase();
  let finalString = '';
  for (let i = 0; i < input.length; i++) {
    let rawCharacter = input.substring(i, i+1);
    let emojiText = '';
    if (rawCharacter.match(/[a-z]/i)) {
      emojiText = `:regional_indicator_${rawCharacter}:`;
    } else if (rawCharacter.match(/[0-9]/i)) {
      emojiText = `:${num_words[parseInt(rawCharacter)]}:`;
    } else {
      let symbol = symbolTable[rawCharacter];
      if (!symbol) continue;
      emojiText = symbol;
    }
    finalString += `${emojiText} `;
  }
  return finalString.trimEnd()
}