// Testing Odd Or Even

// Every() if there is any one false means output is False

// //Primitive Datatypes
const Even = [2, 4, 5];
let findEven = Even.every(function (value) {
  return value % 2 === 0;
});
console.log(findEven);

//Reference Datatypes
const item = [
  { id: 1, ProductName: "mobile", isDeliverable: true },
  { id: 2, ProductName: "tablet", isDeliverable: false },
  { id: 3, ProductName: "laptop", isDeliverable: true },
];
let Delivered = item.every(function (value) {
  return value.isDeliverable == true;
});
console.log(Delivered);

//------------------------------------------------------------------
//------------------------------------------------------------------

// // some() if there is any one ture means output is True

// //Primitive Datatype
const Odd = [1, 3, 5];
let findOdd = Odd.some(function (value) {
  return value % 2 === 1;
});
console.log(findOdd);

//Reference Datatypes
const item2 = [
  { id: 1, ProductName: "mobile", isDeliverable: true },
  { id: 2, ProductName: "tablet", isDeliverable: false },
  { id: 3, ProductName: "laptop", isDeliverable: true },
];
let Delivered2 = item2.some(function (value) {
  return value.isDeliverable == true;
});
console.log(Delivered2);
