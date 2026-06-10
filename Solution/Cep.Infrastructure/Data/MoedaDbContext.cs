using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cep.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Cep.Infrastructure.Data
{
    public class MoedaDbContext : AdbContext
    {
        public MoedaDbContext(DbContextOptions<AdbContext> options)
            : base(options)
        {
        }

         public DbSet<MoedaEntity> MoedaEntities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MoedaEntity>()
                .HasKey(x => x.simbolo);

            base.OnModelCreating(modelBuilder);
        }
    }
}