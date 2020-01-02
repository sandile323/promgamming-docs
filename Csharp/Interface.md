An interface acts as a contract by declaring what can only be implemented by a class or struct. You cannot have access modifiers in an inteface nor implement a methods within one.


```c#
interface IPen
{
    string Color { get; set; }
    bool Open();
    bool Close();
    void Write(string text);
}

```

Implementation:

```c#
class Cello : IPen
{
    public string Color { get; set; }
        
    private bool isOpen = false;
        
    public bool Close()
    {
        isOpen = false;
        Console.WriteLine("Cello closed for writing!");

        return isOpen;
    }

    public bool Open()
    {
        isOpen = true;
        Console.WriteLine("Cello open for writing!");
            
        return isOpen;
    }

    public void Write(string text)
    {
        //write text if open
        if(isOpen)
            Console.WriteLine("Cello: " + text);
    }
}
```

More specific implementation 

```c#
//Explicit Implementation
class Cello : IPen
{
    string IPen.Color { get; set; }
        
    private bool isOpen = false;
        
    bool IPen.Close()
    {
        isOpen = false;
        Console.WriteLine("Cello closed for writing!");

        return isOpen;
    }

    bool IPen.Open()
    {
        isOpen = true;
        Console.WriteLine("Cello open for writing!");
            
        return isOpen;
    }

    void IPen.Write(string text)
    {
        //write text if open
        if(isOpen)
            Console.WriteLine("Cello: " + text);
    }
}
```
C# will give an error if you use 'public' modifier when implementing interface explicitly.

You prefix your properties with your interfact name in case you may have interfaces with the same name. An interface can also be implemented differently by various classes for example:

```c#
class Parker : IPen
{
    public string Color { get; set; }
        
    private bool canWrite = false;
        
    public bool Close()
    {
        canWrite = false;
        Console.WriteLine("Parker is closed now!");

        return canWrite;
    }

    public bool Open()
    {
        canWrite = true;
        Console.WriteLine("Parker is open now!");
            
        return canWrite;
    }

    public void Write(string text)
    {
        //write text if open
        if(canWrite)
            Console.WriteLine("Parker: " + text);
    }
}
```

## Interface Type variable

The same variable can be used to instantiate all the classes which implemented IPen interface.

```c#
IPen pen1 = new Cello();

IPen pen2 = new Parker();

IPen mypen = new Cello();
mypen = new Parker(); // assign Parker object to same variable

```

You can also implement multilple interfaces in a class:

```c#
    //Implement all members of IPen and IBrandedPen
using System;


interface IPen
{
    string Color { get; set; }
    bool Open();
    bool Close();
    void Write(string text);
}

interface IBrandedPen
{
    string GetBrandName();
}

class Parker : IPen, IBrandedPen
{
    public string Color { get; set; }
        
    private bool canWrite = false;
        
    public bool Close()
    {
        canWrite = false;
        Console.WriteLine("Parker is closed now!");

        return canWrite;
    }

    public bool Open()
    {
        canWrite = true;
        Console.WriteLine("Parker is open now!");
            
        return canWrite;
    }

    public void Write(string text)
    {
        //write text if open
        if(canWrite)
            Console.WriteLine("Parker: " + text);
    }
	
	public string GetBrandName()
	{
		return "Parker";
	}
}
public class Program
{
	public static void Main()
	{
		IPen pen1 = new Parker();
		pen1.Open();// valid 
		//pen1.GetBrandName(); //Compile-time error. Cannot call IBrandedPen method on the object of type IPen

		IBrandedPen pen2 = new Parker();
		var brand = pen2.GetBrandName();// valid 
		Console.WriteLine(brand);
		//pen2.Open();//Compile-time error. Cannot call IPen method on the object of type IBrandedPen
	}
}

```

## Interface inheritance

```c#
interface IPen
{
    string Color { get; set; }
    bool Open();
    bool Close();
    void Write(string text);
}

interface IBrandedPen : IPen 
{
    string GetBrandName();
}

class Parker : IBrandedPen
{
    //Implement all members of IPen and IBrandedPen
}
```

A class or struct which implements an interface, must use 'public' access modifier. An interface cannot include private, protected, or internal members. All the members are public by default.