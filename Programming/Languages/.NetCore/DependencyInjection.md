IN .net core dependency injection occures through ioC contianer which manages services. It it represented by IServiceProvider implementation which supports contructor injection by default.

There are basically two types of services in ASP.NET Core:

- Framework Services: Services which are a part of ASP.NET Core framework such as IApplicationBuilder, IHostingEnvironment, ILoggerFactory etc.
- Application Services: The services (custom types or classes) which you as a programmer create for your application.

```c#
//Example: Register Service
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.Add(new ServiceDescriptor(typeof(ILog), new MyConsoleLogger()));        
    }
}

```

## Understanding Service Lifetime
Built-in IoC container manages the lifetime of a registered service type. It automatically disposes a service instance based on the specified lifetime.

The built-in IoC container supports three kinds of lifetimes:

- Singleton: IoC container will create and share a single instance of a service throughout the application's lifetime.
- Transient: The IoC container will create a new instance of the specified service type every time you ask for it.
- Scoped: IoC container will create an instance of the specified service type once per request and will be shared in a single request.

Example: Register a Service with Lifetime
```c#
public void ConfigureServices(IServiceCollection services)
{
    services.Add(new ServiceDescriptor(typeof(ILog), new MyConsoleLogger()));    // singleton
    
    services.Add(new ServiceDescriptor(typeof(ILog), typeof(MyConsoleLogger), ServiceLifetime.Transient)); // Transient
    
    services.Add(new ServiceDescriptor(typeof(ILog), typeof(MyConsoleLogger), ServiceLifetime.Scoped));    // Scoped
}

```

## Extension Methods for Registration

ASP.NET Core provides extension methods for registering services: AddSingleton, AddScoped, AddTransient.

Example:

```c#

public void ConfigureServices(IServiceCollection services)
{
    services.AddSingleton<ILog, MyConsoleLogger>();
    services.AddSingleton(typeof(ILog), typeof(MyConsoleLogger));

    services.AddTransient<ILog, MyConsoleLogger>();
    services.AddTransient(typeof(ILog), typeof(MyConsoleLogger));

    services.AddScoped<ILog, MyConsoleLogger>();
    services.AddScoped(typeof(ILog), typeof(MyConsoleLogger));
}

```

## Constructor Injection

When a service is registered in the IoC container it automatically perform injectiion in the constructor:

```c#

Example: Using Service
public class HomeController : Controller
{
    ILog _log;

    public HomeController(ILog log)
    {
        _log = log;
    }
    public IActionResult Index()
    {
        _log.info("Executing /home/index");

        return View();
    }
}
```

## Action Method Injection
Sometime we my need to inject the service in a single service and this is done as follows trough the services attribute:

```c#

using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public HomeController()
    {
    }

    public IActionResult Index([FromServices] ILog log)
    {
        log.info("Index method executing");

        return View();
    }
}

```
## Get Services manually

We can use the RequestSevices inthe http context tot get services.

```c#

public class HomeController : Controller
{
    public HomeController()
    {
    }
    public IActionResult Index()
    {
        var services = this.HttpContext.RequestServices;
        var log = (ILog)services.GetService(typeof(ILog));
            
        log.info("Index method executing");
    
        return View();
    }

}

````

