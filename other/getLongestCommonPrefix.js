//Variant 1 O(n) n - strArr.length
/* 
const getLongestCommonPrefix = (strArr) => {
  let prefix = "";
  const length = Math.min(...strArr.map((str) => str.length));

  for (let i = 0; i < length; i++) {
    const nextPrefix = prefix + strArr[0][i];
    if (strArr.every((item) => item.startsWith(nextPrefix))) {
      prefix = nextPrefix;
    } else {
      return prefix;
    }
  }

  return prefix;
};

const test = ["abc123", "abcqwrty", "abcrte"];
console.log(getLongestCommonPrefix(test));
*/

//Variant 2 O(n*minLen) n - strArr.length m - strArr item length
/*
const getCommonPrefix = (prefix, str) => {
  let result = "";
  const minLen = Math.min(prefix.length, str.length);

  for (let i = 0; i < minLen; i++) {
    if (prefix[i] != str[i]) {
      break;
    }

    result += prefix[i];
  }

  return result;
};

const getLongestCommonPrefix = (strArr) => {
  let prefix = strArr[0];

  for (let i = 1; i < strArr.length; i++) {
    prefix = getCommonPrefix(prefix, strArr[i]);
  }

  return prefix;
};

const test = ["abc123", "abcqwrty", "abcrte"];
console.log(getLongestCommonPrefix(test));
*/

//Variant 3 O(nlogn + minLen)
const getLongestCommonPrefix = (strArr) => {
  strArr.sort(); //O(nlogn)

  const minLen = Math.min(strArr[0].length, strArr[strArr.length - 1].length);

  let i = 0; //O(minLen)
  while (i < minLen && strArr[0][i] === strArr[strArr.length - 1][i]) {
    i++;
  }

  return strArr[0].slice(0, i);
};
const test = ["abc123", "abcqwrty", "abcrte"];
console.log(getLongestCommonPrefix(test));
