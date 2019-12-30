This a a variable type with no name an example of this.

```c#

var anontype = new { prop1 = "1st prop", prop2 = "2nd prop", prop3 = true}

```

Properties of anonymous types will be read-only properties so you cannot change their values.

## Nested Anonymous Type

An anonymous type can have another in it:

```c#

var anontype = new { prop1 = "1st prop", prop2 = "2nd prop", prop3 = true}

```

## Scope of anonymous types

A anonymous type will always be local to where it is defined, it cannot be passed to another method unless passed as a dynamic type

Example:

```c#

static void Main(string[] args)
{
    var anontype = new { prop1 = "1st prop", prop2 = "2nd prop", prop3 = true};
    DoSomeshit(anontype);
}

static void DoSomeshit(dyanmic param)
{
    Console.WriteLine(param.prop1);
} 

```
## Anonymous Types with Linq

Linq Select clause creates an anonymous type as a result of a query to include various properties which is not defined in any class. 

```c#

public class Student
{
    public int StudentID { get; set; }
    public string StudentName { get; set; }
    public int age { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        IList<Student> studentList = new List<Student>() { 
                        new Student() { StudentID = 1, StudentName = "John", age = 18 } ,
                        new Student() { StudentID = 2, StudentName = "Steve",  age = 21 } ,
                        new Student() { StudentID = 3, StudentName = "Bill",  age = 18 } ,
                        new Student() { StudentID = 4, StudentName = "Ram" , age = 20  } ,
                        new Student() { StudentID = 5, StudentName = "Ron" , age = 21 } 
                    };

        var studentNames = from s in studentList
                           select new { StudentID = s.StudentID, 
                                        StudentName = s.StudentName 
                                      };
    }
}
```

In this example the anonymous type saves memory throughh the slect by creating a dynmic object which has properties of concenr and not all properties.

# Dynamic Type

Type chekcing for dynamic types is resloved at run time rather than compile time in the case of var.

example: 

```c#
 dynamic dynamicVariable = 1;
```

this tranlates to 

```c#
object dynamicVariable = 1;
```
in most cases at compile.

At runtime we can than get the data type:

```c#
static void Main(string[] args)
{
    dynamic dynamicVariable = 1;

    Console.WriteLine(dynamicVariable.GetType().ToString());
}// Outputs: System.Int32 
```
a dynamic type value can be change into any data type an this will be resolved at runtime.

If you assign a class object to a dynamic type than compile time wont check if an invoked method exists in the class. This will throw a runtime error instead.

```c#

public class Student
{
    public int StudentID { get; set; }
    public string StudentName { get; set; }
    public int Age { get; set; }
    public int StandardID { get; set; }

    public void DisplayStudentDetail()
    {
        Console.WriteLine("Name: {0}", this.StudentName);
        Console.WriteLine("Age: {0}", this.Age);
        Console.WriteLine("Standard: {0}", this.StandardID);
    }
}

class Program
{
    static void Main(string[] args)
    {
        dynamic dynamicStudent = new Student();

        dynamicStudent.FakeMethod();
    }

}

```
A methods can have a dynmic parameter so as to accept any type

