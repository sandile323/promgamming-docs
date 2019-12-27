## Winforms & WPF Applications

Simply add the following code to your app.config pr web.conifg files. If your connection string has sensitive data you can use 'Secret Manager: 

```
https://docs.microsoft.com/aspnet/core/security/app-secrets#secret-manager

```

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>

  <connectionStrings>
    <add name="BloggingDatabase"
         connectionString="Server=(localdb)\mssqllocaldb;Database=Blogging;Trusted_Connection=True;" />
  </connectionStrings>
</configuration>

```

You can read the configuration using the ConfigurationManager APOcom  the OnConfiguring ethod like so:

```c#

public class BloggingContext : DbContext
{
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Post> Posts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseSqlServer(ConfigurationManager.ConnectionStrings["BloggingDatabase"].ConnectionString);
    }
}

```

## ASP>NET Core

In this environment the config is sored in appsetting.json or alternatively an environments varaible, the user secret store, or any pther config source. 

In appsetting.json: 

```json

{
  "ConnectionStrings": {
    "BloggingDatabase": "Server=(localdb)\\mssqllocaldb;Database=EFGetStarted.ConsoleApp.NewDb;Trusted_Connection=True;"
  },
}

```

The context is setup in Startup.cs. The GetConnectionString() method looks for aa configuration value whose key is 'ConnectionsStrings: <connection string name> . You need to import Microsoft.Extensions.Confiuration namespace to use this extension method.

```c#

public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<BloggingContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("BloggingDatabase")));
}
```

Usage of this in yoour controller will be as follows


```c#

        public EmployeeController(EmpDBContext context)
        {
            _context = context;
            _context.Database.EnsureCreated();

        }

```







