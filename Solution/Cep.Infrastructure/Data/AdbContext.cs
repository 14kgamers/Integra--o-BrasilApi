using Cep.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Cep.Infrastructure.Data
{
    public class AdbContext : DbContext
    {
        public AdbContext(DbContextOptions<AdbContext> options)
            : base(options)
        {
        }

        public DbSet<CepEntity> CepEntities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CepEntity>()
                .HasKey(x => x.Cep);

            base.OnModelCreating(modelBuilder);
        }
        
    }
}