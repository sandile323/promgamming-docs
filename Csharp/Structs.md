Structs aare mostly used to hold small data values,  they can contain parameterized constructor, static constructor, constants, fields, methods, properties, indexers, operators, events,\ and nested types.

example:

```c#

struct Employee
{
    public int EmpId;
    public string FirstName;
    public string LastName; 
}

```
Example: Create struct object using new keyword

```c#
struct Employee
{
    public int EmpId;
    public string FirstName;
    public string LastName;
}

Employee emp = new Employee();
Console.Write(emp.EmpId); // prints 0  

```
Example: Create struct object without using new keyword

```c#
struct Employee
{
    public int EmpId;
    public string FirstName;
    public string LastName;
}

Employee emp;
Console.Write(emp.EmpId); // Compile time error  

emp.EmpId = 1;
Console.Write(emp.EmpId); // prints 1  
```
##

A struct cannot have an unparameterized constructor. You cna dexlare a parameterised one to initialize members:

```c#
struct Employee 
{
    public int EmpId;
    public string FirstName;
    public String LastName;

    public Employee(int empid, string fname, string lname)
    {
        EmpId = empid;
        FIrstName = fname;
        LastName = lname;

    }

    Employee emp = new Employee(10, "Bill", "Gates");

}

```
All member in a struct should be initialized otherwise a compile time error will be thown if one or more paramters arent passed a value in the constructor.

## Stattic Contructor 

A struct can have a parameterless static struct,.

```c#

struct Employee
{
    public int EmpId;
    public string FirstName;
    public string LastName;

    static Employee()
    {
        Console.Write("First object created");
    }

    public Employee(int empid, string fname, string lname)
    {
        EmpId = empid;
        FirstName = fname;
        LastName = lname;
    }
}

Employee emp1 = new Employee(10, "Bill", "Gates");
Employee emp2 = new Employee(10, "Steve", "Jobs");

```

A Struct can have properties nad motheods in the same way a class does:

```c#
struct Employee
{
    public int EmpId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public Employee(int empid, string fname, string lname)
    {
        EmpId = empid;
        FirstName = fname;
        LastName = lname;
    }

    public string GetFullName()
    {
        return FirstName + " " + LastName;
    }
}

Employee emp = new Employee(10, "Bill", "Gates");

Console.Write(emp.GetFullName()); // prints Bill Gates  

```

## Events in Struct

A struct can contain events to notify a user about some action.

```c#

struct Point
{
    private _x;

    public int X
    {
        get 
        {
            return _x;
        }

        set 
        {
            _x = value;
            PointChanged(_x);
        }

    }

    public event Action<int> PointChanged;
}
```
Handler:

```c#

static void StructureEventHandler(int point)
{
    Console.WriteLine("Point changed to {0}", point);

}

//main

Point p = new Point();

p.PointChanged += StructEventHandler;
p.X = 10;

```

Strcts cannot provide for inheritance as they cannot act as a base. Struct can be instasntiated without the new operator. However, you won't be able to use any of its methods, events or properties if you do so.