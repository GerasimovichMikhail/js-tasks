//find the sum of tree nodes
//result 108
const tree = [
  {
    v: 5,
    c: [
      {
        v: 5,
      },
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 11,
        c: [
          {
            v: 12,
            c: [
              {
                v: 5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 7,
      },
      {
        v: 12,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 14,
      },
    ],
  },
];

const treeSum = (tree) => {
  const stack = [...tree];

  let result = 0;
  while (stack.length) {
    const { v, c } = stack.pop();

    if (v) {
      result += v;
    }

    if (c && c.length) {
      stack.push(...c);
    }
  }

  return result;
};

const treeSumRecursive = (tree) => {
  let result = 0;

  const inner = (tree) => {
    for (let { c, v } of tree) {
      if (v) result += v;

      if (c && c.length) inner(c);
    }
  };

  inner(tree);
  return result;
};

console.log("sum: ", treeSum(tree));
console.log("sum recursive: ", treeSumRecursive(tree));
