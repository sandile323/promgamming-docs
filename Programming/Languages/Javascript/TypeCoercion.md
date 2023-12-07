### Type coercion

when an operator executes on different data types. Javascript will can convert data types 

Example:

```js

console.log('I am' + 23 + ' years old') // I am 23 years old
console.log('23' - '10' - 3 ) // 10 -> - operator works for nuumbers
console.log('23' + '10' + 3 ) // 23103 -> + operator concatenates 
console.log('23' * '2') // converted to numbers * can only work multiply]

let n = '1' + 1

n = n -1
console.log(n)// 10
```

`==` also performs type coercion but it is best to use `===` as this will not introduce unexpected behaviour/

