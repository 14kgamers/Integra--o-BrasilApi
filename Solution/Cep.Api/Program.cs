using Cep.Domain.Interfaces;
using Cep.Infrastructure.Data;
using Cep.Infrastructure.Repositories;
using Cep.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy
                .WithOrigins("http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});
builder.Services.AddDbContext<AdbContext>(options =>
{
    options.UseInMemoryDatabase("CepDb");
});
builder.Services.AddDbContext<MoedaDbContext>(options =>
{
    options.UseInMemoryDatabase("MoedaDb");
});
builder.Services.AddDbContext<DialingDbContext>(options =>
{
    options.UseInMemoryDatabase("DialingDb");
});

builder.Services.AddHttpClient<CepService>();
builder.Services.AddHttpClient<MoedaService>();
builder.Services.AddHttpClient<DialingService>();

builder.Services.AddScoped<ICepRepository, CepRepository>();
builder.Services.AddScoped<IMoedaRepository, MoedaRepository>();
builder.Services.AddScoped<IDialingRepository, DialingRepository>();

var app = builder.Build();
app.UseCors("AllowAngular");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();