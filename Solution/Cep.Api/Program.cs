using Cep.Domain.Interfaces;
using Cep.Infrastructure.Data;
using Cep.Infrastructure.Repositories;
using Cep.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AdbContext>(options =>
{
    options.UseInMemoryDatabase("CepDb");
});

builder.Services.AddHttpClient<CepService>();

builder.Services.AddScoped<ICepRepository, CepRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();