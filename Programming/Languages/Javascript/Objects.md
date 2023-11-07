### Constructer

To define an object type, create a function for the object type that specifies its name, properties, and methods. For example, suppose you want to create an object type for cars. You want this type of object to be called Car, and you want it to have properties for make, model, and year. To do this, you would write the following function:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

```
