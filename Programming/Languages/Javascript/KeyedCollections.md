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

### WeakMap object
A WeakMap is a collection of key/value pairs whose keys must be objects or non-registered symbols, with values of any arbitrary JavaScript type, and which does not create strong references to its keys. That is, an object's presence as a key in a WeakMap does not prevent the object from being garbage collected. Once an object used as a key has been collected, its corresponding values in any WeakMap become candidates for garbage collection as well — as long as they aren't strongly referred to elsewhere. The only primitive type that can be used as a WeakMap key is symbol — more specifically, non-registered symbols — because non-registered symbols are guaranteed to be unique and cannot be re-created.

The WeakMap API is essentially the same as the Map API. However, a WeakMap doesn't allow observing the liveness of its keys, which is why it doesn't allow enumeration. So there is no method to obtain a list of the keys in a WeakMap. If there were, the list would depend on the state of garbage collection, introducing non-determinism.

For more information and example code, see also "Why WeakMap?" on the WeakMap reference page.

One use case of WeakMap objects is to store private data for an object, or to hide implementation details. The following example is from Nick Fitzgerald's blog post "Hiding Implementation Details with ECMAScript 6 WeakMaps". The private data and methods belong inside the object and are stored in the privates object, which is a WeakMap. Everything exposed on the instance and prototype is public; everything else is inaccessible from the outside world because privates is not exported from the module.

For more visit [this page](https://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)  



