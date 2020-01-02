Theres are 2 types ofcollections in c# generic and non generic collections. Systems Collections includes interfaces and classes foe non-generic collections.

- IEnumerator, ICollections, and IEnumerable are top level interfaces for all collections in c#.
- IEnumerator interface supports a simple iteration over a non-generic collection. It includes methods and property which can be implemented to support easy iteration using foreach loop.
- IEnumerable incldes `GetEnumrator()` method which returns an object in the enumerator. Built in classes and custom collection classes must all impeplement IEnumerator  and IEnumerable so that they can be iterated using the forach loop.
- IList includes properties and methods to add, insert, remove elements in a collection and also individual elements can be accessed using an index.
- ICollection: is the base class for all collections that define sizes, enumerators andd synchronization ethods for all non generic collections.. The Queue and Stack all implement this interface.
- IDictionary represents a non generic collection of key/value pairs. The hashtable and soertedlist implement the IDictionary interface and store key/value pairs.

## Usage of Non Generic Types

ArrayList - stores objects of any type like an array. However there is no need to secify the size of an arrays as it grows automatically;

SortedList - Stores key/value airs and automatically arranges elements in descending order. c# includes a generic version of this tye.

Stack - stores values on LIFO style. It includes and ush method to add values, pop and eekmethods to retrieve values.

Queue - stores values in a FIFO style, It keeps the oderder in which the values were added. 

Hashtable - store values via key/value par. it retrieves the data by comparing hash values of the keys.

BitArray - manages a comoact array of bit values, which are respresented as booleans where 1 is on and 0 is off.

## ArrayList

Similar to an array but size is not needed to be specified as it grows when you add to it. 