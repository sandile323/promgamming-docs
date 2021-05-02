Generic allow you to definae a class with a placeholder for fields, methods, parameters. etc. These placeholders are replaced with types at complie time

Example of a generaic class

```c#

class MyGenericClass<T>
{
    private T genericProperty;

    MyGenericClass(T value)
    {
        genericProperty = value;
    } 

    public T genericMethod(T genericParam)
    {
        Console.WriteLine("Parameter type: {0}, value: {1}", typeof(T).ToString(),genericParameter);
        Console.WriteLine("Return type: {0}, value: {1}", typeof(T).ToString(), genericProperty);

        return genericProperty;

    }

    public T genericPropeerty2 { get; set; }
}

```

The <T> indicate that it is a generic class and that  type will be defined later where ever T is.

When instantiating an ibject we can now specify the type:

```c#

MyGenericClass<int> obj= new MyGenericClass(10);  
int val = obj.genericMethod(200);


// you cam use any  type :

MyGenericClass<string> strGenericClass = new MyGenericClass<string>("Hello Generic World");

strGenericClass.genericPropeerty2 = "This is a generic property example.";
string result = strGenericClass.genericMethod("Generic Parameter");
/*
Output:
Parameter type: string, value: Generic Parameter 
Return type: string, value: Hello Generic World*/

```
## Generics class as a base class 

When yoiu drive a class you need to specify the class's typer argument instead of thee generic type param:

```c#

class DerivedClass : BaseGenericClass<string>
{  

}

```

if the derived class is generic too then there's no need to specify a type:

```c#
class MyDerivedClass<U> : MyGenericClass<U>
{
 
}

```

If the genric class has containts the derived class must also use constraints

example:

```c#

class MyGenericClass<T> where T: class
{

}

class MyDerivedClass<U> : MyGenericClass where U : class
{

}

```

### Generic Delegates

Delegates define a signature for a method which can be invoked. A generic delegate can be defined in the dsame but with a generic type:

Example

```c#
class Program
{
    public delegate T add<T>(T p1, T p2);

    static void Main(String[] args)
    {
        add<int> sum = AddNumber;

        Console.WriteLine(sum(10,20));

        add<string> conct = Concat;

        Console.WriteLine(conct("Hello, there"));
    }

    public static int AddNumber(int n1, int n2)
    {
        return n1 + n2;
    }

    public static string Concat(string n1, string n2)
    {
        return n1 + n2;
    }
}


```

Generics can be applied to

- Interface
- Class
- Abstract Class
- Method
- Static Method
- Property
- Event
- Delegate

## Generic constraints

C# includes constraints tp specify which type of p[lacesholder type with the geenric type is allowed. This means if you try instantiate a generic class with placeholder type that is not alloweed a compile time error will be thrown. If a generic class only allows refernce tpyes than using value types will throw error if replaced in placeholders.

Contraints are specified using the `where` keyword

Example:

```c#

class MyGenericClass<T> where T: class
{
      private T genericMemberVariable;

    public MyGenericClass(T value)
    {
        genericMemberVariable = value;
    }

    public T genericMethod(T genericParameter)
    {
        Console.WriteLine("Parameter type: {0}, value: {1}", typeof(T).ToString(),genericParameter);
        Console.WriteLine("Return type: {0}, value: {1}", typeof(T).ToString(), genericMemberVariable);
            
        return genericMemberVariable;
    }

    public T genericProperty { get; set; }
}


//if you use a valuetype in the above it will throw an error

MyGenericClass<int> intGenericClass = new MyGenericClass<int>(10);

//but these will work just fine

MyGenericClass<string> strGenericClass = new MyGenericClass<string>("Hello World");

MyGenericClass<Student> strGenericClass = new MyGenericClass<Student>(new Student());

```

### List of contraints

- `where T: class` - must be reference type 
- `where T: struct` - must be value type
- `where T: new()` - must have public parameterless constructor
- `where T: <base class name>` - must be or be derived from specified base class
- `where T: <interface>` - must implement specified interface.
- `where T: U` - Type supplied for T must derive for argument supplied for U

### Multiple contraints

A generic class can have more than one contraint:

```c#

class MyGenericClass<T, U> where T: class where U: cstruct

```

### Constraints on generic methods

```c#
class MyGenericClass <T> where T: class
{
    public T generiMethod<U>(T genericParam, T genericParam2)
    {
        Console.WriteLine("Generic Parameter of type {0}, value {1}", typeof(T).ToString(),genericParam);
        Console.WriteLine("Return value of type {0}, value {1}", typeof(T).ToString(), genericParam2);

        return genericParam2;

    }
}

```

