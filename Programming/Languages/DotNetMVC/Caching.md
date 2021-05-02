Used to omprove application performance by taking advantage of the output cache

example 


```c#
[OutputCache(Duration = 60)]
public ActionResult Index(){
   var employees = from e in db.Employees
   orderby e.ID
   select e;
   return View(employees);
}
```

### Varying the Output Cache

In some cases, you might want different cached versions, such as, when you create a detail page, then when you click on the detailed link you will get details for the selected employee.

Example
```c#
 // GET: Employee/Details/5
[OutputCache(Duration = int.MaxValue, VaryByParam = "id")]

public ActionResult Details(int id){
   var employee = db.Employees.SingleOrDefault(e => e.ID == id);
   return View(employee);
}
```

### Cache Profile

You can create a cache profile in the web.config file. It is an alternative to configuring output cache properties by modifying properties of the [OutputCache] attribute. It offers a couple of important advantages which are as follows.

 - Controls how controller actions cache content in one central location.

 - Creates one cache profile and apply the profile to several controllers or controller actions.

 - Modifies the web configuration file without recompiling your application.

 - Disables caching for an application that has already been deployed to production.



COnfig:

```xml
<caching>
   <outputCacheSettings>
      <outputCacheProfiles>
         <add name = "Cache10Min" duration = "600" varyByParam = "none"/>
      </outputCacheProfiles>
   </outputCacheSettings>
</caching>
```

In Code: 
```c#
[OutputCache(CacheProfile = "Cache10Min")]

public ActionResult Index(){
   var employees = from e in db.Employees
   orderby e.ID
   select e;
   return View(employees);
}

```