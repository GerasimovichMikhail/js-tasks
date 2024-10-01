/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const words = x.split(" ");

  let max = 0;
  let maxWord = "";

  for (const word of words) {
    const weight = word
      .split("")
      .reduce((acc, char) => acc + alphabet.indexOf(char) + 1, 0);
    console.log(word, weight);
    if (weight > max) {
      max = weight;
      maxWord = word;
    }
  }

  return maxWord;
}

console.log(
  high(
    "ptyxxypskijujjhomdein elnvmlreujhceuaccqujb rbpchkjtrouowdgiswsxo dmacjrbfnhrunoiaitqpp"
  )
);
