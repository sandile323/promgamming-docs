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

The ArrayList class implements IEnumerable, ICollection and IList interface. If you assign it to ICollection or IEnumerable you will not be able to add elements or access them by index.

Example

```c#

ArrayList myList1 = new ArrayList();//Recommended
//or with limitations
IList myList2 = new ArrayList();
//or with limitations
ICollection myList3 = new ArrayList();
//or with limitations
IEnumerable nyList4 = new ArrayList();


```

For a full list of functionalities of the ArraList class visit:

```
https://www.tutorialsteacher.com/csharp/csharp-arraylist
```

Some demonatrations:

### Adding to ArrayList

You can add items using `AddRange(obkecy value)` or `Add(ICollection)`. Add Range is only available for ArrayList and not IList.

```c#
ArrayList arryList1 = new ArrayList();
arryList1.Add(1);
arryList1.Add("Two");
arryList1.Add(3);
arryList1.Add(4.5);

IList arryList2 = new ArrayList()
{
    100, 200
};

//Adding entire collection using ArrayList.AdRange() method.
////Note: IList does not contain AddRange() method.
arryList1.AddRange(arryList2);

//you can add to the list on initialising like this:

IList ArrayList =  new ArrayList(){"one", 2, "three"};

```

### Accessing elements

You can accesss list elements using an indexer:

```c#
int firstElement = (int) myArryList[0]; //returns 1
```

### Iterate ArrayList


You can use for/foreach loop to iterate alements:

```c#

foreach (var val in myArryList)
    Console.WriteLine(val); 
            
//Or
for(int i = 0 ; i< myArryList.Count; i++)
    Console.WriteLine(myArryList[i]);
```

### Inserting Elements into ArrayList

Inserting Elements into ArrayList


```c#
myArryList.Insert(1, "Second Item");

///Example: InsertRange()
IList arryList1 = new ArrayList();
arryList1.Add(100);
arryList1.Add(200);

ArrayList arryList2 = new ArrayList();
arryList2.Add(10);
arryList2.Add(20);
arryList2.Add(30);

arryList2.InsertRange(2, arryList1);

foreach(var item in arryList2)
    Console.WriteLine(item);

```

### Remove from ArrayList

```c#
arryList1.Remove(100); //Removes 1 from ArrayList

arryList1.RemoveAt(1); //Removes the first element from an ArrayList

arryList1.RemoveRange(0,2);//Removes two elements starting from 1st item (0 index)

```

### ArrayList Sorting

The ArrayList class includes Sort() and Reverse() method. All the elements should have same data type so that it can compare with default comparer otherwise it will throw runtime exception

```c#

arryList1.Sort();

arryList1.Reverse();

```
### Check for an Existing Elements in ArrayList


```c#

Console.WriteLine(myArryList.Contains(100)); // true

```

## SortedList 

The SortedList Implements both IDictionary and ICollection interfaces which means elements can be accessed by key or index.

### Adding to a SortedList

Add() method signature: void Add(object key, object value)

Key cannot be null but value can be null. Also, datatype of all keys must be same, so that it can compare otherwise it will throw runtime exception.


```c#

SortedList sortedList1 = new SortedList();
sortedList1.Add(3, "Three");
sortedList1.Add(4, "Four");
sortedList1.Add(1, "One");
sortedList1.Add(5, "Five");
sortedList1.Add(2, "Two");

SortedList sortedList2 = new SortedList();
sortedList2.Add("one", 1);
sortedList2.Add("two", 2);
sortedList2.Add("three", 3);
sortedList2.Add("four", 4);
    
SortedList sortedList3 = new SortedList();
sortedList3.Add(1.5, 100);
sortedList3.Add(3.5, 200);
sortedList3.Add(2.4, 300);
sortedList3.Add(2.3, null);
sortedList3.Add(1.1, null);

```

SortedList sorts the itemss even though they maybe added randomly.

### Accessing a SortedList

A sorted list can be accessed by index or key

```c#
int j = (int) sortedList["two"];
```
Values must be cast when accessed.

Accessing values in a for loop: 

```c#
SortedList sortedList = new SortedList()
                            {
                                {3, "Three"},
                                {4, "Four"},
                                {1, "One"},
                                {5, "Five"},
                                {2, "Two"}
                            };
for (int i = 0; i < sortedList.Count; i++)
{
    Console.WriteLine("key: {0}, value: {1}", 
        sortedList.GetKey(i), sortedList.GetByIndex(i));
}

//Example: Access values using foreach

foreach(DictionaryEntry kvp in sortedList )
    Console.WriteLine("key: {0}, value: {1}", kvp.Key , kvp.Value );

```

### Removing items from a SortedList


Use the Remove() or RemoveAt() method to remove elements from a SortedList.

```c#
sortedList.Remove("one");//removes element whose key is 'one'
sortedList.RemoveAt(0);//removes element at zero index i.e first element: four
```

### Check for an existing key in SortedList

The Contains() & ContainsKey() methods determine whether the specified key exists in the SortedList collection or not.

```c#
SortedList sortedList = new SortedList();
                            {
                                {3, "Three"},
                                {4, "Four"},
                                {1, "One"},
                                {8, "Eight"},
                                {2, "Two"}
                            };
sortedList.Contains(2); // returns true
sortedList.Contains(4); // returns true
sortedList.Contains(6); // returns false

sortedList.ContainsKey(2); // returns true
sortedList.ContainsKey(6); // returns false

sortedList.ContainsValue("One"); // returns true
sortedList.ContainsValue("Ten"); // returns false
```

## HashTables

Stores key pair values but unlike sortedLisat it optimises lookups by computing a hashcode of each ke then storing it seperately in a different bucket internally then matches those hashcodes when accessing the items

### Add key-value into Hashtable

Key and value can be of any data type. Key cannot be null whereas value can be null.

```c#
Hashtable ht = new Hashtable();

ht.Add(1, "One");
ht.Add(2, "Two");
ht.Add(3, "Three");
ht.Add(4, "Four");
ht.Add(5, null);
ht.Add("Fv", "Five");

//You can also assign key and value at the time of initialization using object initializer syntax:

Hashtable ht = new Hashtable()
                {
                    { 1, "One" },
                    { 2, "Two" },
                    { 3, "Three" },
                    { 4, "Four" },
                    { 5, null },
                    { "Fv", "Five" },
                    { 8.5F, 8.5 }
                };
```

A HashTable can contain all elements of a Dictionary:

```c#
Dictionary<int, string> dict = new Dictionary<int, string>();

dict.Add(1, "one");
dict.Add(2, "two");
dict.Add(3, "three");

Hashtable ht = new Hashtable(dict);
```

Add() will throw an exception if you try to add a key that already exists in the Hashtable. So always check the key using the Contains() or ContainsKey() method before adding a key-value pair into the Hashtable.

### Access Hashtable

You can retrive the value of an existing key from the Hashtable using indexer. Please note that the hashtable indexer requires a key.

```c#
string strValue1 = (string)ht[2];
string strValue2 = (string)ht["Fv"];
float fValue = (float) ht[8.5F];
```

### Iterating a hashtable

```c#
foreach (DictionaryEntry item in ht)
                Console.WriteLine("key:{0}, value:{1}",item.Key, item.Value);
```
Hashtable has a Keys and a Values property that contain all the keys and values respectively. You can use these properties to get the keys and values.

```c#
foreach (var key in ht.Keys )
                Console.WriteLine("Key:{0}, Value:{1}",key , ht[key]);

Console.WriteLine("***All Values***");
        
foreach (var value in ht.Values)
                Console.WriteLine("Value:{0}", value);
               
 ```

 ### Removing from a HashTable

 The Remove() method removes the item with the specified key from the hashtable.

```c#

ht.Remove("Fv"); // removes {"Fv", "Five"}

```
### Check for Existing Elements

Contains() and ContainsKey() check whether the specified key exists in the Hashtable collection. ContainsValue() checks whether the specified value exists in the Hashtable.

```c#

ht.Contains(2);// returns true
ht.ContainsKey(2);// returns true
ht.Contains(5); //returns false
ht.ContainsValue("One"); // returns tru

```

Clear() method removes all the key-value pairs in the Hashtable.


```c#
ht.Clear();
```
## Stack

As mentioned above we add and retrieve elemnts on a Last In First Out principal. Stacks allow null an duplicate values.

### Add Values into Stack

The Push() method adds values into the Stack. It allows value of any datatype.

Example:

```c#

myStack.Push("Hello!!");
myStack.Push(null);
myStack.Push(1);
myStack.Push(2);
myStack.Push(3);
myStack.Push(4);
myStack.Push(5);

```

### Accessning Stack Elements

YOu can retirece elements in various way. Use a foreach statement to iterate the Stack collection and get all the elements in LIFO style.

```c#

foreach (var itm in myStack)
     Console.Write(itm);

/*prints:
5 
4 
3 
2 
1 

Hello!!
*/

```

The Peek() method returns the last (top-most) value from the stack. Calling Peek() method on empty stack will throw InvalidOperationException. So always check for elements in the stack before retrieving elements using the Peek() method.

Example:

```c#
Stack myStack = new Stack();
myStack.Push(1);
myStack.Push(2);
myStack.Push(3);
myStack.Push(4);
myStack.Push(5);

Console.WriteLine(myStack.Peek());
Console.WriteLine(myStack.Peek());
Console.WriteLine(myStack.Peek());

/*outputs
5
5
5
*/

```

The Pop() method call on an empty stack will raise an InvalidOperationException. So always check for number of elements in stack must be greater than 0 before calling Pop() method.

```c#

Stack myStack = new Stack();
myStack.Push(1);
myStack.Push(2);
myStack.Push(3);
myStack.Push(4);
myStack.Push(5);

Console.Write("Number of elements in Stack: {0}", myStack.Count);

while (myStack.Count > 0)
     Console.WriteLine(myStack.Pop());

Console.Write("Number of elements in Stack: {0}", myStack.Count);

```

## #Check whether a specific element exists  

The Contains() method checks whether the specified item exists in a Stack collection or not.
```c#

myStack.Contains(2); // returns true

```

### Remove from stack

The Clear() method removes all the values from the stack.

```c#

myStack.Clear(); // removes all elements

```

## Queue 

Queue stores the elements in FIFO style (First In First Out), exactly opposite of the Stack collection. It stores the elements as the way entered.

### Add elements to Queue

You can add elements using the Enqueue method as follows

```c#
Queue queue = new Queue();
queue.Enqueue(3);
queue.Enqueue(2);
queue.Enqueue(1);
queue.Enqueue("Four");

```

### Accessing the Queue

Dequeue is used to trmove and return the first element in your collection. It is best to check if Queue contains any elements before using this asit throws a system invalid operation error.

```c#

while (queue.Count > 0)
    Console.WriteLine(queue.Dequeue());

/* Output

3 
2 
1 
Four 
*/
```

The Peek() method always returns the first item from a queue collection without removing it from the queue. So

```c#

Console.WriteLine(queue.Peek());
Console.WriteLine(queue.Peek());
Console.WriteLine(queue.Peek());

//will result in the same element

//3
//3
//3

```

### Iterate Queue

You can iterate a Queue without removing elements of it by converting in to an Array


```c#

foreach (var i in queue.ToArray())
    Console.WriteLine(i);

```

### Check for existing items

The Contains() method checks whether an item exists in a queue. It returns true if the specified item exists; otherwise it returns false.

```c#

queue.Contains(2); // true
queue.Contains(100); //false

```

## Remmove items from Queue



The Clear() method removes all the items from a queue.

```c#

queue.Clear();

```