
const replacements = {
  "dog": "_૮･ﻌ･ა",
  "cat": "𝑴𝒆𝒐𝒘. ฅ(•- •マ",
  "A": "۶ৎ", "a": "𐙚", "B": "·˚ ༘", "b": "｡𖦹°‧",
  "C": "ּ ֶָ֢.", "c": "⋆.˚", "D": ">ᴗ<", "d": "꩜",
  "E": "₊˚ෆ", "e": "˚", "F": "࣪ ִֶָ☾.", "f": "𓍯𓂃",
  "G": "⪩. .⪨", "g": "ೃ⁀➷", "H": "-ˋˏ✄┈┈┈┈", "h": "☁︎",
  "I": "⊹ ࣪ ﹏𓊝﹏", "i": "﹏𓂁﹏", "J": "ּ ֶָ֢.๑ˎˊ˗", "j": "ּ ֶָ֢.ˊ˗",
  "K": "☕︎", "k": "⛇", "L": "𓄧", "l": "ᯓ ✈︎",
  "M": "₍⸍⸌̣ʷ̣̫⸍̣⸌₎", "m": "𐂯", "N": "❀࿐", "n": "(˶‾᷄ ⁻̫ ‾᷅˵)",
  "O": "𓆝 ⋆.", "o": "𐦍", "P": "⛐", "p": "૮₍´ ꒳`₎ა",
  "Q": "(𓌻‸𓌻)", "q": "🕸", "R": "༯", "r": "ᵕ̈",
  "S": "⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆", "s": "𓇼𓏲*ੈ✩‧₊˚", "T": "𓆉", "t": "જ⁀➴",
  "U": "𓆩⚝𓆪", "u": "ᥫ᭡", "V": "≽ܫ≼", "v": "ᯓ★",
  "W": "𓇢𓆸", "w": "•ﻌ•", "X": "•ᴗ•’", "x": "‘˃̵ᴗ˂̵’",
  "Y": "y", "y": "y", "Z": "ᶻ 𝗓 𐰁 𝗓 ᶻ", "z": "ᶻ 𝗓 𐰁"
};

function replaceText(node) {
  if (node.nodeType === 3) {
    let text = node.nodeValue;
    for (const [key, value] of Object.entries(replacements)) {
      const regex = new RegExp(key, "g");
      text = text.replace(regex, value);
    }
    node.nodeValue = text;
  } else if (node.nodeType === 1 && node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
    for (let i = 0; i < node.childNodes.length; i++) {
      replaceText(node.childNodes[i]);
    }
  }
}

replaceText(document.body);
