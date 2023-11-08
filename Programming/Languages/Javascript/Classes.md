#### Declaring a class
Classes are usually created with class declarations.

```js

class MyClass {
  // class body...
}

```
Within a class body, there are a range of features available.

```js

class MyClass {
  // Constructor
  constructor() {
    // Constructor body
  }
  // Instance field
  myField = "foo";
  // Instance method
  myMethod() {
    // myMethod body
  }
  // Static field
  static myStaticField = "bar";
  // Static method
  static myStaticMethod() {
    // myStaticMethod body
  }
  // Static block
  static {
    // Static initialization code
  }
  // Fields, methods, static fields, and static methods all have
  // "private" forms
  #myPrivateField = "bar";
}

```
If you came from a pre-ES6 world, you may be more familiar with using functions as constructors. The pattern above would roughly translate to the following with function constructors:

```js

function MyClass() {
  this.myField = "foo";
  // Constructor body
}
MyClass.myStaticField = "bar";
MyClass.myStaticMethod = function () {
  // myStaticMethod body
};
MyClass.prototype.myMethod = function () {
  // myMethod body
};

(function () {
  // Static initialization code
})();

```

### Class declaration hoisting
Unlike function declarations, class declarations are not hoisted (or, in some interpretations, hoisted but with the temporal dead zone restriction), which means you cannot use a class before it is declared.

```js

new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}

```

### Class expressions
Similar to functions, class declarations also have their expression counterparts.

```js

const MyClass = class {
  // Class body...
};

```
Class expressions can have names as well. The expression's name is only visible to the class's body.

```js

const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined

```

#### Note: 

```js

const red = new Color(255, 0, 0);
const anotherRed = new Color(255, 0, 0);
console.log(red === anotherRed); // false

```

Within a class constructor, the value of this points to the newly created instance. You can assign properties to it, or read existing properties (especially methods — which we will cover next).

The this value will be automatically returned as the result of new. You are advised to not return any value from the constructor — because if you return a non-primitive value, it will become the value of the new expression, and the value of this is dropped. (You can read more about what new does in its description.)
