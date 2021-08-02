animals = [
  {
    type: "Dog",
    mammal: true,
  },
  {
    type: "Snake",
    mammal: false,
  },
  {
    type: "Cheetah",
    mammal: true,
  },
];

const findMammals = (animals) => {
  newArray = [];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i]["mammal"] === true) {
      newArray.push(animals[i]["type"]);
    }
  }
  return newArray;
};

findMammals(animals);
