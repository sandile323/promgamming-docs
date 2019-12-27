First install EF

Add DB Context to model as follows:

```c#
using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNETMVC_Data_Models.Models
{
    public class Employee
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public DateTime JoiningDate { get; set; }
        public int Age { get; set; }
    }

    public class EmpDBContext: DbContext
    {
        public EmpDBContext(DbContextOptions<EmpDBContext> options): base (options)
        {

        }

        public DbSet<Employee> Employees { get; set; }
    }
}

```

Set the connection string as follows:

```json

{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "MyDB": "Server=localhost\\SQLEXPRESS;Database=myDb;Trusted_Connection=True;"
  }
  
}


```

Note: You don't actually need to add the EmpDBContext connection string. If you don't specify a connection string, Entity Framework will create localDB database in the user’s directory with the fully qualified name of the DbContext class.

Now to read the config from the startup file go to Startup.cs and add the following code

```c#
  public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContextPool<EmpDBContext>(options
                => options.UseSqlServer(Configuration.GetConnectionString("MyDB")));

            services.AddControllersWithViews();
        }
```

Tu use this db context in your controller:

```c#

    public EmployeeController(EmpDBContext context)
    {
        _context = context;
        _context.Database.EnsureCreated();

    }
```

and example query:

```c#

    _context.Employees.Add(emp);
    _context.SaveChanges()


```