let object1 = { name: "person1", age: 5 };
let object2 = { age: 5, name: "person2" };
console.log(JSON.stringify(object1) === JSON.stringify(object2));