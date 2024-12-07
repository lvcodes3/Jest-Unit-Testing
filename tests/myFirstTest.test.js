import * as HelperFunctions from "../utils/helper.js";

describe("Number Operations", () => {
  test("1 plus 1 should equal 2", () => {
    let a = 1;
    let b = 1;
    expect(a + b).toBe(2);
  });

  test("5 plus 5 should not equal 10", () => {
    let a = 5;
    let b = 6;
    expect(a + b).not.toBe(10);
  });
});

describe("Testing Other Matcher Methods", () => {
  test("Testing that a variable is undefined", () => {
    let num = undefined;
    expect(num).not.toBeDefined();
    expect(num).toBeUndefined();
    expect(num).not.toBeNull();
    expect(num).toBeFalsy();
    expect(num).not.toBeTruthy();
  });

  test("Should expect zero to act like zero", () => {
    let num = 0;
    expect(num).toBeDefined();
    expect(num).not.toBeUndefined();
    expect(num).not.toBeNull();
    expect(num).toBeFalsy();
    expect(num).not.toBeTruthy();
  });

  test("Number Comparison", () => {
    const a = 1;
    const b = 2;
    expect(a + b).toBeGreaterThan(2);
    expect(a + b).toBeGreaterThanOrEqual(3);
    expect(a + b).toBeLessThan(10);
    expect(a + b).toBeLessThanOrEqual(5);
  });

  test("There should be no I in team", () => {
    let string = "team";
    expect(string).not.toMatch(/I/);
  });

  test("There is 'stop' in Christopher", () => {
    let string = "Christopher";
    expect(string).toMatch(/stop/i); // i for case insensitive
  });

  test("The shopping list doesn't have PS4", () => {
    const shoppingList = ["Milk", "Trash Bags", "Paper Towels"];
    expect(shoppingList).not.toContain("PS4");
    expect(shoppingList).toContain("Milk");
  });
});

describe("Testing Reference Equality", () => {
  const user = {
    name: "Luis",
  };
  user.age = 25;

  test("Should return a user object with age as 45", () => {
    expect(user).toEqual({
      name: "Luis",
      age: 25,
    });
  });

  test("Should return a user with a name and age key", () => {
    expect(user).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number),
      })
    );
  });

  // testing array equality //
  test("Array Equality", () => {
    // array //
    const users = ["Luis", "John", "Joe"];
    users.push("Jacob");
    users.unshift("Tom");

    expect(users).toEqual(["Tom", "Luis", "John", "Joe", "Jacob"]);
    expect(users).toEqual(expect.arrayContaining(["Jacob"]));
    expect(users).toEqual(expect.arrayContaining([expect.any(String)]));

    // array holding objects //
    const userObjectsInArray = [
      {
        user: "Luis",
        age: 25,
      },
      {
        user: "John",
        age: 35,
      },
      {
        user: "Paul",
        age: 21,
      },
    ];
    userObjectsInArray.push({
      user: "Tom",
      age: 40,
    });
    userObjectsInArray.unshift({
      name: "Ron",
      age: 80,
    });

    expect(userObjectsInArray).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
        }),
      ])
    );
  });
});

describe("Testing Imported Functions", () => {
  const users = [
    {
      id: 2,
      user: "Luis",
      age: 25,
    },
    {
      id: 3,
      user: "John",
      age: 35,
    },
    {
      id: 4,
      user: "Paul",
      age: 21,
    },
  ];
  users.push({
    id: 5,
    user: "Tom",
    age: 40,
  });
  users.unshift({
    id: 1,
    name: "Ron",
    age: 80,
  });

  test("Sum function should add two numbers", () => {
    expect(HelperFunctions.sum(5, 2)).toBe(7);
  });

  test("Delete by user id function should delete a user by their user id", () => {
    expect(HelperFunctions.deleteUserById(users, 1)).toEqual([
      {
        id: 2,
        user: "Luis",
        age: 25,
      },
      {
        id: 3,
        user: "John",
        age: 35,
      },
      {
        id: 4,
        user: "Paul",
        age: 21,
      },
      {
        id: 5,
        user: "Tom",
        age: 40,
      },
    ]);
  });

  // Test Driven Development //
  // before writing the function, write the test for it //
  test("Finds a user by id from a list of users", () => {
    expect(HelperFunctions.findUserById(users, 5)).toEqual({
      id: 5,
      user: "Tom",
      age: 40,
    });

    expect(HelperFunctions.findUserById(users, 10)).toBeUndefined();
  });
});

// functions to add depth to testing //
let userData = [];

// priority execution 1 //
beforeAll(() => {
  // populate user data before all tests //
  userData.push("Luis", "John");

  console.log("Running before all tests...", userData);
});

// priority execution 2 //
beforeEach(() => {
  console.log("Running before each test...");
});

// priority execution 3 //
afterEach(() => {
  console.log("Running after each test...");
});

// priority execution 4 //
afterAll(() => {
  // unpopulate user data after all tests //
  userData = [];

  console.log("Running after all tests...", userData);
});
