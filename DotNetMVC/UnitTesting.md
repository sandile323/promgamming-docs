In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. In object-oriented programming, a unit is often an entire interface, such as a class, but could be an individual method.The primary goal of unit testing is to take the smallest piece of testable software in the application and determine whether it behaves exactly as you expect. Each unit is tested separately before integrating them into modules to test the interfaces between modules.

Example:

```c#

[TestClass]
public class EmployeeControllerTest{
   [TestMethod]
   public void Employees(){
      // Arrange
      EmployeeController controller = new EmployeeController();
		
      // Act
      ViewResult result = controller.Index() as ViewResult;
		
      // Assert
      Assert.IsNotNull(result);
   }
}

```