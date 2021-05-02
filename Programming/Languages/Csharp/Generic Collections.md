Wtih non generic collectins when fetching items they have to be cast and this may throw runtime errors and hinder performance, boxing and unboxing.

To solve this Generic Types exist:

## List of generic collections:

- `List<T>` - contains elements of a specified type and grows automatically as you add 
- `Dictionary<TKey, TValue>` - contains key / value pairs
- `Heashset<T>` - contains non-duplicate elements it eliminate duplicates.
- `Queue<T>` -  stores the values in FIFO style (First In First Out). It keeps the order in which the values were added. It provides an Enqueue() method to add values and a Dequeue() method to retrieve values from the collection. 
- `Stack` - Stack<T> stores the values as LIFO (Last In First Out). It provides a Push() method to add a value and Pop() & Peek() methods to retrieve values.

A generic collection gets all the benefit of generics. It doesn't need to do boxing and unboxing while storing or retrieving items and so performance is improved.

### List<T>

The List<T> collection is the same as an ArrayList except that List<T> is a generic collection whereas ArrayList is a non-generic collection.
The List<T> is a concreate implementation of IList<T> interface. In the object-oriented programming, it is advisable to program to interface rather than concreate class. So use IList<T> type variable to create an object of List<T>.

```c#

List<int> intList = new List<int>();

//Or

IList<int> intList = new List<int>();
```

#### Add Elements into List

You can use the Ilist.Add() method to add an element to a list collecion.

```c#

IList<int> intList = new List<int>();
intList.Add(10);
intList.Add(20);
intList.Add(30);
intList.Add(40)

//add using object initializer

IList<int> intList = new List<int>(){ 10, 20, 30, 40 };

//Example: AddRange

IList<int> intList1 = new List<int>();
intList1.Add(10);
intList1.Add(20);
intList1.Add(30);
intList1.Add(40);

List<int> intList2 = new List<int>();

intList2.AddRange(intList1);

```
The AddRange() method will only be applicable if you initialized with a List<T> variable. IList<T> doesn't include the AddRange() method.

#### Acccessing List

You can use a foreach loop to iterate a list

```c#

intList.ForEach(el => Console.WriteLine(el));

//If you have initialized the List<T> with an IList<T> interface then use seperate foreach statement with implicitly typed variable:

foreach (var el in intList)
    Console.WriteLine(el);

//usinmg indexer:

int elem = intList[1]; // returns 20

```
Count property can be used to get the total numver of items in a list

Example: Insert elements into List

```c#
IList<int> intList = new List<int>(){ 10, 20, 30, 40 };

intList.Insert(1, 11);// inserts 11 at 1st index: after 10.

foreach (var el in intList)
    Console.Write(el);
```

#### Remove Elements from List

The Remove() and RemoveAt() methods to remove items from a List<T> collection.

```c#

intList.Remove(10); // removes the 10 from a list

intList.RemoveAt(2); //removes the 3rd element (index starts from 0)

```

#### TrueForAll()

The TrueForAll() is a method of the List<T> class that returns true if the specified condition turns out to be true, otherwise false. Here, the condition can be specified as the predicate type deligate or the lambda expression.

for example:

```c#
bool res = intList.TrueForAll(el => el%2 == 0);// returns true

//The following example uses isPositiveInt() as a Predicate<int> type delegate as a parameter to TrueForAll.

static bool isPositiveInt(int i)
{
    return i > 0;
}

static void Main(string[] args)
{
    List<int> intList = new List<int>(){10, 20, 30, 40};

    bool res = intList.TrueForAll(isPositiveInt);
}

```

### Dictionary<TKey, TValue>

is a generic colleciton class, TKey deoted the type of key, and type value the value type.

A dictionary object can be assigned to a variable of IDictionary<TKey, TValue> or Dictionary<TKey, TValue>

```c#
IDictionary<int, string> dict = new Dictionary<int, string>();
//or
Dictionary<int, string> dict = new Dictionary<int, string>();

```

Dictionary cannot include duplicate or null keys, where as values can be duplicated or set as null. Keys must be unique otherwise it will throw a runtime exception.

#### Add elements to a dictionary

Use add method to add key value pairs:

```c#
IDictionary<int, string> dict = new Dictionary<int, string>();
dict.Add(1,"One");
dict.Add(2,"Two");
dict.Add(3,"Three");

//you can also use the obj initializer

IDictionary<int, string> dict = new Dictionary<int, string>()
                                            {
                                                {1,"One"},
                                                {2, "Two"},
                                                {3,"Three"}
                                            };
```
IDictionarry type has an overload for the ADD method which accepts KeyValuePair<Tkey, TValue> a struct as a parameter.

```c#
dict.Add(new KeyValuePair<int, string>(1, "One"));


```

#### Access dictionary Items

You can use a foreach/for loop to iterate items:

```c#

foreach(KeyValuepair<int, string> item in dict)


//Use for loop to access all the elements. Use Count property of dictionary to get the total number of elements in the dictionary.
for (int i = 0; i < dict.Count; i++)
{
    Console.WriteLine("Key: {0}, Value: {1}", 
                                            dict.Keys.ElementAt(i), 
                                            dict[ dict.Keys.ElementAt(i)]);
}


//using indexer

Console.WriteLine(dict[1]); //returns One

```
#### TryGetValue

If you are not sure about the key then use the TryGetValue() method. The TryGetValue() method will return false if it could not found keys instead of throwing an exception.

```c#

//when using indexer
if(dict.TryGetValue(4, out result))
{
    //do whatver
}
else {
    //sorry not fuond code
}
```
#### Check for Existing Elements

Use `ContainsKey()` to check whether a key exists in dictionary, use `Contains()` to check if a key value pair exists in a dictionary.

```c#

dict.ContainsKey(1); // returns true
dict.ContainsKey(4); // returns false

dict.Contains(new KeyValuePair<int,string>(1,"One")); // returns true

```

You can also pass a IEqualityComparer as a second parameter to the `Contains()` function. You can do so to customize the equality comparison:

```c#

public class Student
{
    public int StudentID { get; set; }
    public string StudentName { get; set; }
}

class StudentDictionaryComparer : IEqualityComparer<KeyValuePair<int,Student>>
{
    public bool Equals(KeyValuePair<int, Student> x, KeyValuePair<int, Student> y)
    {
        if (x.Key == y.Key && (x.Value.StudentID == y.Value.StudentID) && (x.Value.StudentName == y.Value.StudentName))
            return true;

        return false;
    }

    public int GetHashCode(KeyValuePair<int, Student> obj)
    {
        return obj.Key.GetHashCode();
    }
}

class Program
{
    static void Main(string[] args)
    {
        IDictionary<int, Student> studentDict = new Dictionary<int, Student>()
                    {
                        { 1, new Student(){ StudentID =1, StudentName = "Bill"}},
                        { 2, new Student(){ StudentID =2, StudentName = "Steve"}},
                        { 3, new Student(){ StudentID =3, StudentName = "Ram"}}
                    };

        Student std = new Student(){ StudentID = 1, StudentName = "Bill"};

        KeyValuePair<int, Student> elementToFind = new KeyValuePair<int, Student>(1, std);

        bool result = studentDict.Contains(elementToFind, new StudentDictionaryComparer()); // returns true
    
        Console.WriteLine(result);
    }
```

#### Remove from Dictionary:

You can use Remove() or RemoveAt() to remove an element from a dictionary. 

```c#
dict.Remove(new KeyValuePair<int, string>(2, "Two1")); 
dict.Remove(1); // removes the item which has 1 as a key
```

### SortedList<TKey, TValue>

C# has a non generic and generic sorted list. The generic SortedList store key value pare items sorted by IComparer<T> association. Non-generic does not specify types for key and value. SoortedList maintains two object [] arrays for vlue and key respectively.
When you add or remove it does a binary search and rearranges to find the matching index to insert or remove an item.

#### Instantiate a SortedList object

```c#
SortedList<int, string> mySortedList = new SortedList<int,string>();
```

#### Adding to SortedList

You can use the add method to add items to a SortedList

```c#
SortedList<int,string> sortedList1 = new SortedList<int,string>();
sortedList1.Add(3, "Three");
sortedList1.Add(4, "Four");
sortedList1.Add(1, "One");
sortedList1.Add(5, "Five");
sortedList1.Add(2, "Two");

```

SortList sorts everytime you add elements to it.



