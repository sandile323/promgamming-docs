### Variables

Sass variable syntax: 

```sass
$variablename: value;
```

The following examples declares 4 variables named myFont, myColor, myFontSize and myWidth. After the variables wherever you want:

```sass

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

$myFont: Helvetica, sans-serif;
$myColor: red;
$myFontSize: 18px;
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
