const findAllAnagram = (str) => {
  const words = str.split(" ");
  const map = {};

  for (let word of words) {
    const sortedWord = word.split("").sort().join("");

    if (map[sortedWord]) {
      map[sortedWord].push(word);
    } else {
      map[sortedWord] = [word];
    }
  }

  return Object.values(map);
};

const str = "listen silent enlist inlets rat tar art evil vile live";

console.log(findAllAnagram(str));
