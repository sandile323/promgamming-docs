### Map object


A Map object is a simple key/value map and can iterate its elements in insertion order.

The following code shows some basic operations with a Map. See also the Map reference page for more examples and the complete API. You can use a for...of loop to return an array of [key, value] for each iteration.

```js

const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

```

### Object and Map compared
Traditionally, objects have been used to map strings to values. Objects allow you to set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Map objects, however, have a few more advantages that make them better maps.

The keys of an Object are strings or symbols, where they can be of any value for a Map.
You can get the size of a Map easily, while you have to manually keep track of size for an Object.
The iteration of maps is in insertion order of the elements.
An Object has a prototype, so there are default keys in the map. (This can be bypassed using map = Object.create(null).)
These three tips can help you to decide whether to use a Map or an Object:

- Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type. 
- Use maps if there is a need to store primitive values as keys because object treats each key as a string whether it's a number value, boolean value or any other primitive value.
- Use objects when there is logic that operates on individual elements.

