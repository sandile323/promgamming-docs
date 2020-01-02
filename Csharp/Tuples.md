The tuple class was introduced in .Net 4.0 as a data structure that cotains a series of different data types.
It can be used where you wanrt to have data to holf an object with properties but do not want to create a speprate type for it

Example:

```c#

Tuple<int, string, string> person =new Tuple<int, string, string>(1, "steve", "job");

```

c# includees a static helper that which returns an instance of the Tuple without specifying the type of each element.:

```c#

var person = Tuple.Create(1, "steve", "job");

```

A tuple can only include a maximum of 8 elements

```c#
var numbers = Tuple.Create(1, 2, 3, 4, 5, 6, 7, 8);
```

Tuple elements can be accessed inthe following way:


```c#
var person = Tuple.Create(1, "Steve", "Jobs");
person.Item1; // returns 1
person.Item2; // returns "Steve"
person.Item3; // returns "Jobs"

//The last element (the 8th element) will be returned using the Rest property.
var numbers = Tuple.Create("One", 2, 3, "Four", 5, "Six", 7, 8);
numbers.Item1; // returns "One"
numbers.Item2; // returns 2
numbers.Item3; // returns 3
numbers.Item4; // returns "Four"
numbers.Item5; // returns 5
numbers.Item6; // returns "Six"
numbers.Item7; // returns 7
numbers.Rest; // returns (8)
numbers.Rest.Item1; // returns 8
```

The last element can be used to nest another tuple


```c#

var numbers = Tuple.Create(1, 2, 3, 4, 5, 6, 7, Tuple.Create(8, 9, 10, 11, 12, 13));
numbers.Item1; // returns 1
numbers.Item7; // returns 7
numbers.Rest.Item1; //returns (8, 9, 10, 11, 12, 13)
numbers.Rest.Item1.Item1; //returns 8
numbers.Rest.Item1.Item2; //returns 9

```

## Tuple as a method parameter


```c#

static void Main(string[] args)
{
    var person = Tuple.Create(1, "steve", "jobs");
    displayFunc(person);
}

static void displayFunc(Tuple<int,string,string> pers)
{
    Console.WriteLine($"Id = { person.Item1}");
    Console.WriteLine($"First Name = { person.Item2}");
    Console.WriteLine($"Last Name = { person.Item3}");
}

```

## Tuple as return type

```c#
static void Main(string[] args)
{
    var person = GetPerson(); 
}

static Tuple<int, string, string> GetPerson()
{
    return Tuple.Create(1, "Name", "Surname");
}

```

A tuple may be used for:

- When you want to return a value without using ref or out parameters.
- When you want to pass multiple values to a method through a single parameter.
- When you want to hold a db record without creating a class.

## Valuetuple

Only available in .Net framework 4.7. Needs to be installed via nuget to be used.

A ValueTuple can be initialised and declared in different ways:

```c#

var person = (1, "name", "secondname");

ValueTuple<int, string, string> person =  (1, "name", "secondname");
person.Item1;  // returns 1
person.Item2;   // returns "Bill"
person.Item3;   // returns "Gates"

```

Tuple requires at least 2 values.

We can assign  names to value tuples instead of using the default 'item1', 'item2' names:

```c#
(1, "name", "secondname") person = (1, "name", "secondname");
person.Id;   // returns 1
person.FirstName;  // returns "Bill"
person.LastName; // returns "Gates"

var person = (Id:1, FirstName:"Bill", LastName: "Gates");


```

## Value tuple as a return type

```c#

static void Main(string[] args)
{
    DisplayTuple(1, "Bill", "Gates");
}

static void DisplayTuple((int, string, string) person)
{
    Console.WriteLine($"Id = { person.Item1}");
    Console.WriteLine($"First Name = { person.Item2}");
    Console.WriteLine($"Last Name = { person.Item3}");
}

//or 

static void Main(string[] args)
{
    var person = GetPerson();
}

static (int, string, string) GetPerson() 
{
    return (Id:1, FirstName: "Bill", LastName: "Gates");
}

```

## Deconstruction

Individual members ccan be retireved by deconstructing a tuple. Deconstructing code will split the Valuetuple to its individual parts amd assigns them to new variables individually.

```c# 
static void Main(String[] args)
{
    (int id, string name, string lastName) =GetPerson();


}

static (int, string, string) GetPerson()
{
    return (id: 1, fname : "Rosy");
}

// you can also use var instead of types:

(var id, var name, var lastName) =GetPerson();

// use discard _ for the unused member LName
(var id, var FName, _) = GetPerson(); 
