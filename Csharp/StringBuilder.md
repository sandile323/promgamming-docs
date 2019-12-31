A string is immutable meaning it cannot be changed once created. String cannot be changed once created. For example, new string "Hello World!!" will occupy a memory space on the heap. Now, by changing the initial string "Hello World!!" to "Hello World!! from Tutorials Teacher" will create a new string object on the memory heap instead of modifying the initial string at the same memory address. 

StringBuilder solves this problem by dynamically allocating memory for a string to change and exanps it accordingly.

## StringBuilder Initialization

StringBulder can be initialized in the same way asa class i.e.

```c#
StringBuilder sb = new StringBuilder("Hello World!!");
or 
StringBuilder sb = new StringBuilder(50);//mean 

```

## StringBuilder Methods

- StringBuilder.Append(valuetoappend) - appends passed vaules to the end of the sb object.
- StringBuilder.AppendFormat() - Replaces format specifier passed in a formatted string/
- StringBuilder.Insert(index, valuetoappend) - Inserts a string in the specified index of the current stringbuilder object
- StringBuilder.Remove(int startIndex, int length) - Removes a spefied number of characters om the given start and end posion of a sb object.
- StringBuilder.Replace(oldValue, ne\wValue) - replaces specified characters with specified new characters

Examples Append / appendline:

```c#
StrinbBuilder sb = new StringBuilder("Hello", 50);

sb.Append("World");
sb.AppendLine("Hello c#");
sb.AppendLine("This is a new Line");

Console.WriteLine(sb);

//output
/*Hello World!! Hello C#!.
This is new line.*/
```
Example: AppendFormat

```c#

StringBuilder amountMsg  = new StringBuilder("Your total amount is: ");
amountMsg.AppendFormat("{0:C}", 25);

Console.WriteLine(amountMsg);

```

Example: Insert


```c#
StringBuilder sb = new StringBuilder("Hello World!!",50);
sb.Insert(5," C#");

Console.WriteLine(sb);
```

Example Remove:

The Remove() method removes the string at specified index with specified length.

```c#
StringBuilder sb = new StringBuilder("Hello World!!",50);
sb.Remove(6, 7);

Console.WriteLine(sb);

//output Hello
```

Example Replace

```c#
StringBuilder sb = new StringBuilder("Hello World!!",50);
sb.Replace("World", "c#");

//outout Hello C#!!
```
Example Indexer

You can use an indexer to target a specific character in a string

```c#

StringBuilder sb = new StringBuilder("Hello World!!");

for(int i=0; i< sb.Length; i++)
        Console.Write(sb[i]);
```

you can use ToSting to get string from sb

```c#

string str = sb.ToString(); // "Hello World!!"

```