using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cep.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Cep.Infrastructure.Data
{
    public class DialingDbContext : DbContext
    {
       public DialingDbContext(DbContextOptions<DialingDbContext> options)
            : base(options)
        {
        }

         public DbSet<DialingEntity> DialingEntities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DialingEntity>()
                .HasKey(x => x.Ddd);

            base.OnModelCreating(modelBuilder);
        }
    }
}