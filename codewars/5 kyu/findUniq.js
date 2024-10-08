/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. 
E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.
*/

function findUniq(arr) {
  const strArr = arr.map((str) =>
    Array.from(new Set(str.toLowerCase())).sort().join("")
  );

  for (const chars of strArr) {
    if (strArr.indexOf(chars) === strArr.lastIndexOf(chars)) {
      const index = strArr.indexOf(chars);
      return arr[index];
    }
  }
}
