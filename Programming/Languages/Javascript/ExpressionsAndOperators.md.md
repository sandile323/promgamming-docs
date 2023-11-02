### Bitwise logical operators
Conceptually, the bitwise logical operators work as follows:

- The operands are converted to thirty-two-bit integers and expressed by a series of bits (zeros and ones). Numbers with more than 32 bits get their most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32-bit integer:
![image](https://github.com/sandile323/Notes/assets/47978346/167a1433-3c91-4c28-b83b-4c3f865a6f8b)

- Each bit in the first operand is paired with the corresponding bit in the second operand: first bit to first bit, second bit to second bit, and so on.
- The operator is applied to each pair of bits, and the result is constructed bitwise.
- For example, the binary representation of nine is 1001, and the binary representation of fifteen is 1111. So, when the bitwise operators are applied to these values, the results are as follows:

Expression	Result	Binary Description
![image](https://github.com/sandile323/Notes/assets/47978346/3fd46273-8bb8-45de-9e05-ce87a24f4d4b)

Note that all 32 bits are inverted using the Bitwise NOT operator, and that values with the most significant (left-most) bit set to 1 represent negative numbers (two's-complement representation). ~x evaluates to the same value that -x - 1 evaluates to.

### Bitwise shift operators
The bitwise shift operators take two operands: the first is a quantity to be shifted, and the second specifies the number of bit positions by which the first operand is to be shifted. The direction of the shift operation is controlled by the operator used.

Shift operators convert their operands to thirty-two-bit integers and return a result of either type Number or BigInt: specifically, if the type of the left operand is BigInt, they return BigInt; otherwise, they return Number.

The shift operators are listed in the following table.

Bitwise shift operators
![image](https://github.com/sandile323/Notes/assets/47978346/62ffc751-c238-4693-ac52-83cd4b149182)

### Relational operators

A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.

`in`

The in operator returns true if the specified property is in the specified object. The syntax is:

```js

propNameOrNumber in objectName

```
where propNameOrNumber is a string, numeric, or symbol expression representing a property name or array index, and objectName is the name of an object.

The following examples show some uses of the in operator.

```js

// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false
// (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math; // returns true
const myString = new String("coral");
"length" in myString; // returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true

```

### Super operator

The `super` keyword is used to call functions on an object's parent. It is useful with classes to call the parent constructor, for example.

```js
super(args); // calls the parent constructor.
super.functionOnParent(args);
```
