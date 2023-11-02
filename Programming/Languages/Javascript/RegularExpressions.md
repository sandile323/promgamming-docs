

### What is JavaScript RegExs? 
A JavaScript RegEx is a sequence of characters that forms a search pattern. You can define what needs to be searched in a text with the help of regular expressions. These expressions can be of any number of characters, be it alphabets, digits or special characters. They are more commonly used for text search and text replacement operations.

General Syntax: 

`/pattern/flag`

#### Flags
Flags alter the behavior of JavaScript RegEx. They may be appended to the end of a RegEx literal, or they may be specified as the second argument to the regular expression. Here’s a list of flags or modifiers supported by JavaScript.

g - Global. Finds all possible matches for the given characters
i - Ignore case. `/[a-z]/i` is equivalent to `/[a-zA-Z]/`
m - Multiline. `^` and `$` are used to match the beginning and end of each line, respectively
u - Unicode. If this flag is not supported, you must match specific Unicode characters with \uXXXX where XXXX is the character's value in hexadecimal
y - Finds all consecutive matches

#### Quantifiers
Quantifiers define the number of occurrences of a string. The most commonly used quantifiers are ‘+’, ‘*’ and ‘?’. 

`+` - Indicates one or more occurrence of the character n 

`*` - Indicates zero or more occurrences of the character n 

`?` - Indicates zero or one occurrence of the character n 

#### What Are Metacharacters?
Characters with special meaning are known as metacharacters. Given below is a list of a couple of metacharacters and their descriptions. 

![image](https://github.com/sandile323/Notes/assets/47978346/ad04fbbc-9857-4080-9495-4520444c5ee8)
