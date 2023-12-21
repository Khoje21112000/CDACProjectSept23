# ReactJS App and .NET Core WebAPI Setup Guide

This guide provides steps to set up a ReactJS frontend application and a .NET Core WebAPI backend.

## Prerequisites

Ensure you have the following installed:
- Node.js and npm (for ReactJS)
- .NET SDK (for .NET Core)

## NuGet Packages (for .NET Core)

This project utilizes the following NuGet packages:

- **Microsoft.EntityFrameworkCore (v6.0.3)**
  - Entity Framework Core is an ORM for .NET. It's used for database interactions.
  - [NuGet Package](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore/6.0.3)

- **Microsoft.EntityFrameworkCore.Tools (v6.0.3)**
  - EF Core Tools contain additional commands for Entity Framework Core.
  - [NuGet Package](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Tools/6.0.3)

- **Pomelo.EntityFrameworkCore.MySql (v6.0.1)**
  - Pomelo MySQL provider for Entity Framework Core. Enables MySQL database integration.
  - [NuGet Package](https://www.nuget.org/packages/Pomelo.EntityFrameworkCore.MySql/6.0.1)


## ReactJS App Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/your-react-app.git
    cd your-react-app
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Run the React App**
    ```bash
    npm start
    ```
    Your React app should be running on `http://localhost:3000`.

## .NET Core WebAPI Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/your-dotnet-webapi.git
    cd your-dotnet-webapi
    ```

2. **Run the WebAPI**
    Open the project in your preferred IDE (Visual Studio, VS Code, etc.)

3. **Set Up CORS in Program.cs**
    - Open `Program.cs`.
    - Add CORS configuration in the `ConfigureServices` and `Configure` methods. Example provided in [this guide](#configure-cors-in-programcs).

4. **Migrations using Entity Framework Core**
    To perform database migrations using Entity Framework Core:
    - Open a terminal or command prompt in the root directory of your WebAPI project.
    - Run the following commands:
        ```bash
        dotnet ef migrations add InitialCreate -o Data/Migrations
        dotnet ef database update
        ```
    This will create the initial migration and apply it to your database.


## Configure CORS in Program.cs

```csharp
// Example CORS Configuration in Program.cs

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Other configurations...

// Configure services
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

var app = builder.Build();

// Other configurations...

// Configure CORS middleware
app.UseCors("AllowSpecificOrigin");

// Other configurations...

app.Run();
```

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.
