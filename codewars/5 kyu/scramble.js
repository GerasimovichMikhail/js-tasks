/*
Complete the function scramble(str1, str2) that returns true if a portion of
 str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

function scramble(str1, str2) {
  const map1 = {};
  const map2 = {};

  str1.split("").forEach((item) => {
    if (map1[item]) {
      map1[item] += 1;
    } else {
      map1[item] = 1;
    }
  });

  str2.split("").forEach((item) => {
    if (map2[item]) {
      map2[item] += 1;
    } else {
      map2[item] = 1;
    }
  });

  for (const [key, value] of Object.entries(map2)) {
    if (map1[key] && map1[key] >= value) {
      continue;
    }
    return false;
  }
  return true;
}

console.log(scramble("cedewaraaossoqqyt", "codewars"));
