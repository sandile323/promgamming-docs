## There are 3 types of selector attributes:
1.  ### Action

Used for the name of an action and allows developers to use a different action method to what the action is.

Example:

```c#
  [ActionName("CurrentTime")]
      public string GetCurrentTime(){
         return DateTime.Now.ToString("T");
      }
```

2.  ### NonAction

This indicate that a method is not an action.

Example:

```c#
  [ActionName("CurrentTime")]
      public string GetCurrentTime(){
         return DateTime.Now.ToString("T");
      }

   [NonAction]
      public string TimeString(){
         return "Time is " + DateTime.Now.ToString("T");
      }
```

3. ### ActionVerbs

Restricts the indication of specific HttpVerbs.

- HttpGet
- HttpPost
- HttpDelete
- HttpOptions
- HttpPatch

```c#
      [HttpGet]
      public ActionResult Search(){
         var input = "Another Search action";
         return Content(input);
      }

```