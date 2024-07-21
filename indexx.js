const array = [
    8,
    "55",
    [
      2,
      [
        "Hello World",
        { a: 2, b: 5 },
        {},
        false,
      ],
    ],
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj { d: "Moha", last: [2, false, undefined] },
  ];
  
  // Destructuring to extract 33 and "moha"
  const { arr: [, , , [thirtyThree]], obj: { d: moha } } = array;
  
  console.log(thirtyThree); // Output: 33
  console.log(moha);       // Output: "moha"
  /////
  const array = [2, 4, [22, "test"], false, null, { a: 2 }, [22, "test"], "null"];
  
  const hasDuplicates = array.length !== new Set(array).size;
  
  console.log(hasDuplicates); // true (since [22, "test"] and "null" appear twice)