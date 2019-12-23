## There are 3 types of selector attributes:

- ### Action

Used for the name of an action and allows developers to use a different action method to what the action is.

  [ActionName("CurrentTime")]
      public string GetCurrentTime(){
         return DateTime.Now.ToString("T");
      }