// Array
// An array is a data structure that can hold more than one value at a time. It is a collection of elements, each identified by an index or key. In JavaScript, arrays are used to store multiple values in a single variable.

// student subject wise marks 

// var vaibhav_marks = [67, 78, 56];
// vaibhav_marks[1] = 100;
// vaibhav_marks[10] = 60;
// console.table(vaibhav_marks);
// console.log(vaibhav_marks.length);
// // iterator
// for (let a of vaibhav_marks)
// {
//   console.log(a);
// }



// array methods

// 1. Push method -  adds one or more elements to the end of an array and returns the new length of the array.
// 2. unshift method -  adds one or more elements to the beginning of an array and returns the new length of the array.
// 3. pop method -  removes the last element from an array and returns that element. This method changes the length of the array.
// 4. shift method -  removes the first element from an array and returns that removed element. This method changes the length of the array.
// 5. splice method -  changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// splice = add & remove both 
// splice(index, deleteCount, insertedElement)  )



// let ar = [10,20,30]
// // ar.push(40); // add 40 at the end of array
// // ar.unshift(5); // add 5 at the beginning of array
// // ar.pop(); // remove last element of array
// // ar.shift(); // remove first element of array
// ar.splice(1,1,  50,80,100); // remove 1 element from index 1

// console.log(ar); // [10,20,30]


// sort method -  sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

let ar  = [10, 30, 100 , 134, 5, 24, 90]
// ar.sort();  // sort in ascending order = o/p = [10, 100, 134, 24, 30, 5, 90] // it is not correct because it is sorting as string
ar.sort((a, b) => a - b); // sort in ascending order = o/p = [5, 10, 24, 30, 90, 100, 134] // it is correct because it is sorting as number
console.log(ar);
