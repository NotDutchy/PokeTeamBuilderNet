using GraphQL.AspNet.Configuration;
using PokeApiNet;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddGraphQL();
builder.Services.AddSingleton<PokeApiClient>();

var app = builder.Build();

//app.UseHttpsRedirection();

//app.UseAuthorization();

//app.MapControllers();

app.UseGraphQL();
app.Run();
