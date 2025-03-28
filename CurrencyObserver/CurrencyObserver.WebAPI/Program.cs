using CurrencyObserver.WebAPI.Interfaces;
using CurrencyObserver.WebAPI.Services;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddHttpClient();
builder.Services.AddScoped<ICurrencyParser, NBUCurrencyParser>();
builder.Services.AddScoped<ICurrencyService, CurrencyService>();
builder.Services.AddLogging();
builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "CurrencyObserver API", Description = "Presenting all currencies you want!", Version = "v1" });
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("VVPolicy", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "CurrencyObserver API V1");
    });
}

app.UseHttpsRedirection();

app.UseCors("VVPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
