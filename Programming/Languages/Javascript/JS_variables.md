### Variable Scope

Variables created with `var` are not block-scoped, but only local to the function (or global scope) that the block resides within.

`let` and `const` declarations can also be scoped to the block statement that they are declared in.


### Variable Hoisting

`var`-declared variables are hoisted, meaning you can refer to the variable anywhere in its scope, even if its declaration isn't reached yet. You can see var declarations as being "lifted" to the top of its function or global scope. However, if you access a variable before it's declared, the value is always undefined, because only its declaration is hoisted, but not its initialization.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

### Global variables

Global variables are in fact properties of the global object.

In web pages, the global object is window, so you can set and access global variables using the window.variable syntax. In all environments, you can use the globalThis variable (which itself is a global variable) to access global variables.

Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called phoneNumber is declared in a document, you can refer to this variable from an iframe as parent.phoneNumber.

### Constants

However, const only prevents re-assignments, but doesn't prevent mutations. The properties of objects assigned to constants are not protected, so the following statement is executed without problems.

For example: 

```js

const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";

```


