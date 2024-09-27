//create function which will be create array like result from tree
//result: [  'one', 'two', 'thee', 'four', 'five',  'six', 'seven', 'eight', 'nine']"

const transformWithoutRecursion = (tree) => {
  const result = [];
  const stack = [...tree];

  while (stack.length) {
    const { data, children } = stack.shift();

    if (data) {
      result.push(data);
    }

    if (children && children.length) {
      stack.unshift(...children);
    }
  }

  return result;
};

const transformWithRecursion = (tree) => {
  const result = [];

  const inner = (subtree) => {
    for (let { data, children } of subtree) {
      if (data) {
        result.push(data);
      }

      if (children && children.length) {
        inner(children);
      }
    }
  };

  inner(tree);
  return result;
};

const tree = [
  {
    data: "one",
    children: [
      {
        data: "two",
        children: [
          {
            data: "three",
          },
        ],
      },
      {
        data: "four",
        children: [{ data: "five" }, { data: "six" }],
      },
      {
        children: [{ data: "seven" }],
      },
      {
        data: "eight",
        children: {
          data: "nine",
          children: [],
        },
      },
    ],
  },
];

console.log("transformWithoutRecursion: ", transformWithoutRecursion(tree));
console.log("transformWithRecursion: ", transformWithRecursion(tree));
