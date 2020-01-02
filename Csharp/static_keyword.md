C# static keyword can be applied on a class, method, poperties, constructors, variable and events. It cannot be used on destructors, indexers other than class types.

The static key word make an item not instantaible. If the static keyword is used on a class objects can not be created on it. If on a property level than the property can be accessed without creating the object.

```c#

public static class MyStaticClass
{
    public static int myStaticVariale = 1;

    public static void MyStaticMethod()
    {
        Console.WriteLine("This is a static method");

    }

    public static int MySttaticProperty {get; set;}
}

class Pogram
{
    static void Main(string[] args)
    {
`                                                                                                                                                                                                              Console.WriteLine(MyStaticClass.myStaticVariable);

        MyStaticClass.MyStaticMethod();

        MyStaticClass.MyStaticProperty = 100;

        Console.WriteLine(MyStaticClass.MyStaticProperty);    
    } 

}

```
### C# Static Constructor
A static or non-static class can have a static constructor without any access modifiers like public, private, protected, etc. A static constructor in a non-static class runs only once when the class is instantiated for the first time. A static constructor in a static class runs only once when any of its static members accessed for the first time.

Example: Static Constructor in Static Class

```c#

public static class MyStaticClass
{
    static MyStaticClass()
    {
        Console.WriteLine("Inside static constructor.");
    }
    public static int myStaticVariable = 0;

    public static void myStaticMethod()
    {
        Console.WriteLine("This is static method.");
    }

    public static int MyStaticProperty { get; set; }

}

class Program
{

    static void Main(string[] args)
    {
        
        MyStaticClass.myStaticVariable = 100;

        MyStaticClass.MyStaticProperty = 200;

        MyStaticClass.myStaticVariable = 300;

        MyStaticClass.MyStaticProperty = 400;

    }
}

```
Example: Static constructor in a non-static class

```c#

public class MyNonStaticClass
{
    static MyNonStaticClass()
    {
        Console.WriteLine("Inside static constructor.");
    }
            
    public void myNonStaticMethod()
    {
        Console.WriteLine("Non-static method");
    }
}

class Program
{
    static void Main(string[] args)
    {
        MyNonStaticClass mnsObj1 = new MyNonStaticClass();
        MyNonStaticClass mnsObj2 = new MyNonStaticClass();
        MyNonStaticClass mnsObj3 = new MyNonStaticClass();
    }
}

```

