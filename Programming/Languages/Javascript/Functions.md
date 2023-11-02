### Function hoisting
Consider the example below:

```js

console.log(square(5)); // 25

function square(n) {
  return n * n;
}

```

This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, so the code above is equivalent to:

Function hoisting only works with function declarations — not with function expressions. The following code will not work:

```js

console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};

```

Recursive function example:

```js

function walkTree(node) {
  if (node === null) {
    return;
  }
  // do something with node
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}

```

### Nested functions and closures

You may nest a function within another function. The nested (inner) function is private to its containing (outer) function.

It also forms a closure. A closure is an expression (most commonly, a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.

To summarize:

The inner function can be accessed only from statements in the outer function.
The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.
The following example shows nested functions:

```js

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41

```
Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function:

```js

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8

```
