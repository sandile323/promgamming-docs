Enums are used to declare a list of name integers constants. 

```c#

enum WeekDays
{
    Monday = 0,
    Tuesday =1,
    Wednesday = 2,
    Thursday = 3,
    Friday = 4,
    Saturday =5,
    Sunday = 6
}

Console.WriteLine(WeekDays.Friday);
Console.WriteLine((int)WeekDays.Friday);
/*
output: 
Friday 
4
*/

```

A changed in one value will change the rest sequentially.


Enums have the followiing methods:

- Format - converts the specified value of enum type to the specified string format.
- GetName	- Returns the name of the constant of the specified value of specified enum.
- GetNames - Returns an array of string name of all the constant of specified enum.
- GetValues - Returns an array of the values of all the constants of specified enum.
- object Parse(type, string) - Converts the string representation of the name or numeric value of one or more enumerated constants to an equivalent enumerated object.
- bool TryParse(string, out TEnum) -Converts the string representation of the name or numeric value of one or more enumerated constants to an equivalent enumerated object. The return value indicates whether the conversion succeeded.

example:

```c#

enum WeekDays
{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday 
}

Console.WriteLine(Enum.GetName(typeof(WeekDays), 4)); //prnts friday

foreach (string str in Enum.GetNames(typeof(WeekDays)))
    Console.WriteLine(str);//prints list above

WeekDays wdEnum;
Enum.TryParse<WeekDays>("1", out wdEnum);//prints tuesday



