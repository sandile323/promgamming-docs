Model binding is creating asp.net objects from http requests through the model binder. When values in the view change the binder updates values in the model through the controller actions. Model binding is the bridde between c# action methods and HTTP requests.


## Create Employee `Create` View

This illustrates manual binding:
```c#

@model MVCSimpleApp.Models.Employee
@{
   Layout = null;
}

<!DOCTYPE html>
<html>
   <head>
      <meta name = "viewport" content = "width = device-width" />
      <title>Create</title>
   </head>
	
   <body>
      @using (Html.BeginForm()){
         @Html.AntiForgeryToken()
         <div class = "form-horizontal">
            <h4>Employee</h4>
            <hr />
            @Html.ValidationSummary(true, "", new { @class = "text-danger" })
				
            <div class = "form-group">
               @Html.LabelFor(model => model.Name, htmlAttributes:
                  new{ @class = "control-label col-md-2" })
						
               <div class = "col-md-10">
                  @Html.EditorFor(model => model.Name, new{ htmlAttributes =
                     new { @class = "form-control" } })
							
                  @Html.ValidationMessageFor(model => model.Name, "",
                     new{ @class = "text-danger" })
               </div>
            </div>
				
            <div class = "form-group">
               @Html.LabelFor(model => model.JoiningDate, htmlAttributes:
                  new{ @class = "control-label col-md-2" })
						
               <div class = "col-md-10">
                  @Html.EditorFor(model => model.JoiningDate, new{ htmlAttributes =
                     new { @class = "form-control" } })
							
                  @Html.ValidationMessageFor(model => model.JoiningDate, "",
                     new { @class = "text-danger" })
               </div>
            </div>
				
            <div class = "form-group">
               @Html.LabelFor(model => model.Age, htmlAttributes:
                  new { @class = "control-label col-md-2" })
						
               <div class = "col-md-10">
                  @Html.EditorFor(model => model.Age, new { htmlAttributes =
                     new { @class = "form-control" } })
							
                  @Html.ValidationMessageFor(model => model.Age, "", new{ @class = "text-danger" })
               </div>
            </div>
				
            <div class = "form-group">
               <div class = "col-md-offset-2 col-md-10">
                  <input type = "submit" value = "Create" class = "btn btn-default"/>
               </div>
            </div>
				
         </div>
      }
		
      <div>
         @Html.ActionLink("Back to List", "Index")
      </div>
		
   </body>
</html>

```
### Employee create action (manual binding)

```c#
// POST: Employee/Create
[HttpPost]
public ActionResult Create(FormCollection collection){
   try {
        //
      Employee emp = new Employee();
      emp.Name = collection["Name"];
      DateTime jDate;
      DateTime.TryParse(collection["DOB"], out jDate);
      emp.JoiningDate = jDate;
      string age = collection["Age"];
      emp.Age = Int32.Parse(age);
      empList.Add(emp);
      return RedirectToAction("Index");
   }catch {
      return View();
   }
}

```

### Model Binding

Now the magic of Model Binding depends on the id of HTML variables that are supplying the values i.e. :

(.Net Framework)
```c#
@Html.EditorFor(model => model.Name, new { htmlAttributes = new { @class = "form-control" } })
```

The mapping will be based on the Property name by default. This is where we will find HTML helper methods very helpful because these helper methods will generate the HTML, which will have proper Names for the Model Binding to work.

```c#
        [HttpPost]
        public ActionResult Create(Employee emp)
        {
            try
            {
               //Model Binding
                empList.Add(emp);
                return RedirectToAction("Index"); 

            }
            catch
            {
                return View();
            }
        }

```