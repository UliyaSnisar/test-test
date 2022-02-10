// a)Заполнить массив заданной длины различными простыми числами. 
//Натуральное число, большее единицы, называется простым, если оно делится только на себя и на единицу.


// function primeArray(arrayLength) {
//     const arr = [];
  
//     for (let i = 2; arr.length < arrayLength; i++) {
//       let flag = true;
  
//       for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//           flag = false;
//           break;
//         }
//       }
  
//       if (flag) {
//         arr.push(i);
//       }
//     }
  
//     return arr;
//   }

// console.log(primeArray(5)) // [2,3,5,7,11];
// console.log(primeArray(7)) // [2,3,5,7,11,13,17];


//b)Найти в строке все числа. Учитывать дробные числа.

//Например текст: У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе.
//Результат
//[10,2.5,3.5,4]

// function array(string){
//     let re = /-?\d+(\.\d+)?/g;

//     const numArr = string.match(re)
//     // console.log(numArr);
// }
// array('У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе')


//d) Реализовать функцию get. 
//Которая по пути ищет значение в объекте или в массиве.


// function get(obj, string) {
//     const arr = string.split('.');
//     console.log(arr);
//     let result = obj;
//     for (let i = 0; i < arr.length; i += 1) {
//       if (arr[i] in result) {
//         result = result[arr[i]];
//         console.log(result);
//       } else {
//         result = null;
//         break;
//       }
//     }
//     console.log(result);
//   }
  

//   const exampleArr = [{a:{b:[{c:4}, {c:5}]}},{a:{b:[{c:6},{c:7}]}}]
//   const exampleObj = { a: {b: {c:5}}};


//   get(exampleArr, '0.a.b.1.c') // 5
//   get(exampleObj, 'a.b') // {c:5}

