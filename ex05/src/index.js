let shoppingList = new Map([
  ['Banana', 3],
  ['Pineapple', 5],
  ['Pear', 2],
  ['Carrot', 10],
  ['Apple', 1.5]
]);

var arrKey = [...shoppingList.keys()];

console.log("groceries: " + arrKey.join("\ngroceries: "));

var arrValue = [...shoppingList.values()];

console.log("amount: " + arrValue.join("\namount: "));

for (let [key, value] of shoppingList.entries()) {
  console.log(`[ '${key}', ${value} ]`);
}

module.exports = { shoppingList, arrKey, arrValue };