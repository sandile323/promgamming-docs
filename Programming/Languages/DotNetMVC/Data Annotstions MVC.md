Data annotations are used to configure your model classes., which highlights needed config. These are attriutes that override default code firts conventions.

System.ComponentModel.Annotions includes the following attributes which impacts nullability or size of a column.

- Key
- Timestamp
- COncurrency check
- Required
- MinLength
- MaxLength
- StringLength

System.ComponentModel.DataAnnotations.Schema includes the followinattributes that inmpacts the schema of a database

- Table
- Column
- Index
- Foriegn Key
- NotMapped
- InverseProperty

## Key

EF relies on a class having a key property named ID or ClassNameId, else t throws an error becuase it uses this as a primary key. A work around for this is using the [key] attribute.

Example

```c#

public class Student{
   [Key]
   public int StdntID { get; set; }
   public string LastName { get; set; }
   public string FirstMidName { get; set; }
   public DateTime EnrollmentDate { get; set; }

   public virtual ICollection<Enrollment> Enrollments { get; set; }
}

```
EF also support the idea of composite key and these are keys that consist of more than one identity property

```c#

public class DrivingLicense{
   [Key, Column(Order = 1)]
   public int LicenseNumber { get; set; }//composite key 1
	
   [Key, Column(Order = 2)]
   public string IssuingCountry { get; set;}//composite key 2
   public DateTime Issued { get; set; }
   public DateTime Expires { get; set; }
}

```
Ef requires you to specify the order of your composite keys and the column annotation is used for this.

## Timestamp

MVC allows you to only have one timestamp property of type array byte. Code first will treat such a property the same as concurrency checks. 

```c#

public class Course{
   public int CourseID { get; set; }
   public string Title { get; set; }
   public int Credits { get; set; }
   [Timestamp]
   public byte[] TStamp { get; set; }

   public virtual ICollection<Enrollment> Enrollments { get; set; }
}

```

This will result in a timestamp column.

## ConcurrencyCheck

This allows you to flag one property for concurrency checks that will run in the db server.

```c#

public class Course{
   public int CourseID { get; set; }
	
   [ConcurrencyCheck]
   public string Title { get; set; }
   public int Credits { get; set; }
	
   [Timestamp, DataType("timestamp")]
   public byte[] TimeStamp { get; set; }

   public virtual ICollection<Enrollment> Enrollments { get; set; }
}

```

The Title column will be flagged for concurrency checks.

```sql
exec sp_executesql N'UPDATE [dbo].[Courses]
   SET [Title] = @0
   WHERE (([CourseID] = @1) AND ([Title] = @2))
   ',N'@0 nvarchar(max) ,@1 int,@2 nvarchar(max)
',@0 = N'Maths',@1 = 1,@2 = N'Calculus'
go

```

## Required

This annotaation pseaks for itself and EF will flag such a property as not null.

```c#

public class Student{
   [Key]
   public int StdntID { get; set; }
	
   [Required]
   public string LastName { get; set; }
	
   [Required]
   public string FirstMidName { get; set; }
   public DateTime EnrollmentDate { get; set; }

   public virtual ICollection<Enrollment> Enrollments { get; set; }
}

```

## MaxLength, Stringlzebgth and MinLength

This annotation allows you to set the min or max size of an array / string. StringLength is also works the same but only on type string.

```c#

public class Course{
   public int CourseID { get; set; }
   [ConcurrencyCheck]
   [MaxLength(24) , MinLength(5)]
   public string Title { get; set; }
   [StringLength (24)]
   public string Title { get; set; }
   public int Credits { get; set; }

   public virtual ICollection<Enrollment> Enrollments { get; set; }
}

```

## Table

You can use this to specify the table name of the a class if names do not match.

```c#

[Table("StudentsInfo")]
public class Student{
   [Key]
   public int StdntID { get; set; }
	
   [Required]
   public string LastName { get; set; }
	
   [Required]
   public string FirstMidName { get; set; }
   public DateTime EnrollmentDate { get; set; }

   public virtual ICollection<Enrollment> Enrollments { get; set; }
}

```
You can also specify schema:

```c#

[Table("StudentsInfo", Schema = "Admin")]

```

## Column 

The column attribute overrides the name of a column in the same way the table does a able in the db.

```c#

public class Student{
   public int ID { get; set; }
   public string LastName { get; set; }
	
   [Column("FirstName")]
   public string FirstMidName { get; set; }
   public DateTime EnrollmentDate { get; set; }

   public virtual ICollection<Enrollment> Enrollments { get; set; }
}

```

## Indexes

Indexes improve time it takes to query a db bur slows updates and inserts. You can add indexes like this:
```c#
public class Cours{
   public int CourseID { get; set; }
   public string Title { get; set; }
   [Index]
   public int Credits { get; set; }

   public virtual ICollection<Enrollment> Enrollments { get; set; }
}
```
Indexes are non unique by default and an IsUnique parameter can be set in the following way:

```c#
[Index(IsUnique = true)]
	
   public string Title { get; set; }
```
## Foreign Keys

Sometimes Code First needs a foriegn key to be specified especially if the primary key it references from another foreign class does not follow the EF naming conventioin i.e <classname>ID or ID. 
```c#

public class Student{
   [Key]
   public int StdntID { get; set; }
   public string LastName { get; set; }
   public string FirstMidName { get; set; }
   public DateTime EnrollmentDate { get; set; }

   public virtual ICollection<Enrollment> Enrollments { get; set; }
}


public class Enrollment{
   public int EnrollmentID { get; set; }
   public int CourseID { get; set; }
   public int StudentID { get; set; }
   public Grade? Grade { get; set; }
   public virtual Course Course { get; set; }
	
   [ForeignKey("StudentID")]
   public virtual Student Student { get; set; }
}

```

## NotMapped

By Default code first represents properties with getters and setters and that are of a supported type in the db. If you want a specific property not to be sttored in the db it is best to use the NotMapped attribute.

```c#

public class Student{
   [Key]
   public int StdntID { get; set; }
   public string LastName { get; set; }
   public string FirstMidName { get; set; }
   public DateTime EnrollmentDate { get; set; }

   [NotMapped]
   public int FatherName { get; set; }

   public virtual ICollection<Enrollment> Enrollments { get; set; }
}

```

Code First will not create a column for a property which does not have either getters or setters.


## Inverse Property

Sometimes code first cannot understand if a class has more than one to many relationships as is the case below:


```c#

public class Course
{
    public int CourseId { get; set; }
    public string CourseName { get; set; }
    public string Description { get; set; }

    public Teacher OnlineTeacher { get; set; }
    public Teacher ClassRoomTeacher { get; set; }
}

public class Teacher
{
    public int TeacherId { get; set; }
    public string Name { get; set; }

    public ICollection<Course> OnlineCourses { get; set; }
    public ICollection<Course> ClassRoomCourses { get; set; }

}
```
THis code will genetate more thaqn 2 one to many relationships in the cources table. To fix this the inverse property can be used to better specify this relationship.

```c#

public class Course
{
    public int CourseId { get; set; }
    public string CourseName { get; set; }
    public string Description { get; set; }

    [ForeignKey("OnlineTeacher")]
    public int? OnlineTeacherId { get; set; }
    public Teacher OnlineTeacher { get; set; }

    [ForeignKey("ClassRoomTeacher")]
    public int? ClassRoomTeacherId { get; set; }
    public Teacher ClassRoomTeacher { get; set; }
}

public class Teacher
{
    public int TeacherId { get; set; }
    public string Name { get; set; }

    [InverseProperty("OnlineTeacher")]
    public ICollection<Course> OnlineCourses { get; set; }
    [InverseProperty("ClassRoomTeacher")]
    public ICollection<Course> ClassRoomCourses { get; set; }
}

```
