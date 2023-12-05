### Variables

Sass variable syntax: 

```scss
$variablename: value;
```

The following examples declares 4 variables named myFont, myColor, myFontSize and myWidth. After the variables wherever you want:

```scss

$myfont: Helvetica, sans-serif;
$myColor: red;
$myFontSize: 8px;
$myWidth: 680px;

body {
  font-family: $myFont;
  font-size: $myFontSize;
  color: $myColor;
}

#container {
  width: $myWidth;
}
```
When transpiled, it takes the vars and outputs normal css with the variables values placed in csss like: 

```css

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: red;
}

#container {
  width: 680px;
}
```

### Sass nesting

Seass lets you use selectors in the same way as html

example:

```css
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

```

#### Sass nested properties: 

Many css properties have the same prefix like: font-family, font-weight or text-align, text-transform and text-overflow:

example: 

```scss

font: {
  family: Helvetica, sans-serif;
  size: 10px;
  weight: bold
}

text: {
  align: center;
  transform: lowercase;
  overflow: hidden;
}

```

transpiled css: 
```css

font-family: Helvetica, sans-serif;
font-size: 18px;
font-weight: bold;

text-align: center;
text-transform: lowercase;
text-overflow: hidden;

```

### Sass `@import`

Just like in css, the @import directive allows you to include the content of one file in another. The css `@import` directive has a 
major drawback related to perfomance, it created an HTTP request everytime you call it where in Sass the directive inclludes the file the in css and
not additional http requests are needed.

`Tip: You do not need to specify a file extension, Sass automatically assumes that you mean a .sass or .scss file. You can also import CSS files. The @import directive imports the file and any variables or mixins defined in the imported file can then be used in the main file.`

examples: 

```scss
@import "variables";
@import "colors";
@import "reset";

```

Let's look at an example: Let's assume we have a reset file called "reset.scss", that looks like this:

 ```scss

html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}

```

and now we want to import the "reset.scss" file into another file called "standard.scss".

Here is how we do it: It is normal to add the @import directive at the top of a file; this way its content will have a global scope:

```scss
@import "reset";

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: red;
}

```


CSS output:

```css
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: red;
}

```

### @mixin & @include

The `@mxin` directive lets you create csss code to be reused throughout the site. The `@include` directive iw created to let you use the mixin

#### Defining a mixin

Sass @mixin syntax: 

`
@mixin name {
  property: value,
`

The following example creates a mixin named "important-text":

```scss
@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}

```

#### Using a mixin

The `@include` directive is used to include a mixin: 

```scss
selector {
  @include: mixin-name
}
```

so to use the important text mixin:

```css
.danger {
  @include important-text;
  background-color: green;
}

```

This will result in the following css:

```css
.danger {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
  background-color: green;
}
```

and you cann also include mixins in the declaration of other mixins

```css

@mixin special-text {
  @include important-text;
  @include link;
  @include special-border;
}
```
