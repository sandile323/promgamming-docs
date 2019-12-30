Web API makes it easy to build http services and reaches a broad s\range of clients, browser and mobile devices. IT is ideal for restful web servuces in .Net

The verbs themselves are included in the APIs, like Get Customers, Insert Invoice, Delete Customer, and that each of these endpoints end up being a separate URI.

using the Employee model. We create a controller for demonstration on how Web Api works to provide data via its actions:

```c#

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPIDemo.Models {
   public class Employee{
      public int ID { get; set; }
      public string Name { get; set; }
      public DateTime JoiningDate { get; set; }
      public int Age { get; set; }
   }

```

Controller:


```c#

using System;
using System.Collections.Generic;
using System.Linq;

using System.Web.Http;
using WebAPIDemo.Models;

namespace WebAPIDemo.Controllers{
   public class EmployeesController : ApiController{
      Employee[] employees = new Employee[]{
         new Employee { ID = 1, Name = "Mark", JoiningDate =
            DateTime.Parse(DateTime.Today.ToString()), Age = 30 },
         new Employee { ID = 2, Name = "Allan", JoiningDate =
            DateTime.Parse(DateTime.Today.ToString()), Age = 35 },
         new Employee { ID = 3, Name = "Johny", JoiningDate =
            DateTime.Parse(DateTime.Today.ToString()), Age = 21 }
      };
		
      public IEnumerable<Employee> GetAllEmployees(){
         return employees;
      }
		
      public IHttpActionResult GetEmployee(int id){
         var employee = employees.FirstOrDefault((p) => p.ID == id);
         if (employee == null){
            return NotFound();
         }
         return Ok(employee);
      }
   }
}
```


