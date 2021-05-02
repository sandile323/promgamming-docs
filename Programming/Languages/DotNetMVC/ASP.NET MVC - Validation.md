The following validation annotations can be applied to your model: Required, StringLength, RegularExpression, and Range validation attributes. Data type can also be specified.

Example:

```c#
using System;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace MVCSimpleApp.Models {
   public class Employee{

      public int ID { get; set; }

      [StringLength(60, MinimumLength = 3)]
      public string Name { get; set; }

      [Display(Name = "Joining Date")]
      [DataType(DataType.Date)]
      [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}",
      ApplyFormatInEditMode = true)]
      public DateTime JoiningDate { get; set; }

      [Range(22, 60)]
      public int Age { get; set; }
      
   }
}
```

