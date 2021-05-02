The partial modifier makes it possible to declase a class in more than one file.

Example: PartialClassFile1.cs

```c#

public partial class MyClass()
{
    Myclass()
    {

    }

    public void Method1()
    {
        //whatever this does
    }
}

```


Example: PartialClassFile2.cs

```c#

public partial class MyClass()
{
    Myclass()
    {

    }

    public void Method2()
    {
        //whatever this does
    }
}

```

Partial classes should have the sanem modefiers and access modifiers. Different partial classes can have different base class and the final class will inherit all base classes.


## Partial Methods

A partial classes  or structs can contain partial methods. If a method does not have an implementation in either partial classes then it will not be included in the final class.

example of a partial method:
```c#

//PartialClassFile1.cs:
public partial class MyPartialClass
{
    partial void PartialMethod(int val);

    public MyPartialClass()
    {
            
    }

    public void Method2(int val)
    {
        Console.WriteLine(val);
    }
}


//PartialClassFile2.cs:

public partial class MyPartialClass
{
    public void Method1(int val)
    {
        Console.WriteLine(val);
    }

    partial void PartialMethod(int val)
    {
        Console.WriteLine(val);
    }
}
```








