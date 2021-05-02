.Net provides an abstract class, Array. as a base class for all araaays/ It provides static methods for creating, manipulating, sorting and searching arrays.

Example:

```c#
int[] intArr = new int[5]{1, 2,0,4,3}

Array.Sort(intArr);
Array.Reverse(intArr);

```


You can create an arrat instance that starts with index one instead of the default:

Example:

```c#
Array arr = Arrary.CreateInstamce(typeof(int), new int[1]{5}, new int[1]{1})

arr.SetValue(1, 12);
arr.SetValue(2, 20);
arr.SetValue(3, 30);
arr.SetValue(4, 1542);
arr.SetValue(5, 57);

```

## Multi Dimensional Arrays

A multi dimensional array can be initialized by specifying size of the rows and columns like this:

```c#
int[,] arr = new int[3,2]  {
                                {1,2},
                                {3,4},
                                {5,6}
                            }

// Access Multi-dimensional Array


intArray[0,0]; //Output: 1
intArray[0,1]; // 2

intArray[1,0]; // 3
intArray[1,1]; // 4

intArray[2,0]; // 5
intArray[2,1]; // 6
```

## Jagged Arrays

A jagged array is an array of an array. The first bracket specifies the size of an array, the second one specifies the dimension which will store values.


```c#
int [][] jArr = new in[2][];

jArr[0] = new int[3]{1, 2, 3};

jArr[1] = new int[2]{4, 5};


Console.WriteLine(jArr[0][1]) //prints 2
Console.WrieLine(jArr[1][1]) //prints 5

//initialize upon declaration:

int [][] jArr = new in[2][]
                {
                    new int[3]{1, 2, 3},
                    new int[2]{4, 5}
                };
Console.WriteLine(jArr[0][1]) //prints 2
Console.WrieLine(jArr[1][1]) //prints 5



```

Jagged Array with a multi dimmensional array example:

```c#

int[][,] jArr = new int[3][,];

jArr[0] = new int[3,2] {{1,2}, {3,4}, {5,6}};
jArr[1] = new int[2,2] {{7,8}, {9,10}};
jArr[2] = new int[2,2] {{11,12}, {13,14}};


Console.WriteLine(jArr[0][1,1]); //4

Console.WriteLine(jArr[1][1,0]); //9

Console.WriteLine(jArr[2][1,0]);//13

```



