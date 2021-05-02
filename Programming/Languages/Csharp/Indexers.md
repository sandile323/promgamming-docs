An indexer is a special type of property that allows a class or structure to be accessed for its internal collection. 

Syntax
```c#

Public <return type> this[<parameter type> index]
{
    Get
    {
        //return the value from the specified index
    }
    Set
    {
        //set values at the specified index
    }
}

```

Example Usage:

```c#
class StringDataStore
{
    private string[] strArr = new string[10]; //ionternal storage

    public string this[int index]
    {
        get 
        {
            if (index < 0 && index >= strArr.Length)
                throw new IndexOutOfRngeException("Cannot store more than 10 object");

            return strArr[index];
        }
        set
        {
            if (index < 0 || index >= strArr.length)
                throw new IndexOutOfRngeException("Cannot store more than 10 object");
            
            strArr[index] = value;
        }
    }
}

class Program 
{
    static void Main(string[] args)
    {
        StringDataStore s = new StringDataStore();

        s[0] = "One";
        s[1] = "Two";
        s[2] = "Three";
        s[3] = "Four";
        s[4] = "Five";

        for(int i = 0; i < 10; i++)
        {
            Console.WriteLine(s[1]);
        }

        /*output:
        One
        Two
        Three
        Four
        Five*/

    }

}

```

## Override Indexer

You can overide indexer by having different index types:

```c#

class StringDataStore
{
    private string[] strArr = new string[10]; //ionternal storage

    public string this[int index]
    {
        get 
        {
            if (index < 0 && index >= strArr.Length)
                throw new IndexOutOfRngeException("Cannot store more than 10 object");

            return strArr[index];
        }
        set
        {
            if (index < 0 || index >= strArr.length)
                throw new IndexOutOfRngeException("Cannot store more than 10 object");
            
            strArr[index] = value;
        }
    }

    public string this[string name]
    {
        get
        {
            foreach (string str in strArr)
            {
                if (str.ToLower() == name.ToLower())
                    return str;
            }

            return null
        }
    }
}

class Program 
{
    static void Main(string[] args)
    {
        StringDataStore s = new StringDataStore();

        s[0] = "One";
        s[1] = "Two";
        s[2] = "Three";
        s[3] = "Four";
        s[4] = "Five";

        
        Console.WriteLine(strStore["one"]);
        Console.WriteLine(strStore["two"]);
        Console.WriteLine(strStore["Three"]);
        Console.WriteLine(strStore["FOUR"]);
        Console.WriteLine(strStore["five"]);

        /*output:
        One
        Two
        Three
        Four
        Five*/

    }

}