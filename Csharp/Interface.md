An interface acts as a contract by declaring what can only be implemented by a class or struct. You cannot have access modifiers in an inteface nor implement a methos within one.


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

You prefix your prperties with your interfact name in case you may have the same prefixes.