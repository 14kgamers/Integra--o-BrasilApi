using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cep.Domain.Entities;
using Cep.Domain.Interfaces;
using Cep.Infrastructure.Data;
using Cep.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;

namespace Cep.Infrastructure.Repositories
{
    public class DialingRepository : IDialingRepository
    {
        private readonly DialingDbContext _context;
        private readonly DialingService _dialingService;

        public DialingRepository(DialingDbContext context, DialingService dialingService)
        {
            _context = context;
            _dialingService = dialingService;
        }
        public async Task<List<DialingEntity?>> GetAllDddsAsync()
        {
            return await _context.DialingEntities.ToListAsync();
        }
        public async Task<DialingEntity?> GetDddAsync(int ddd)
        {
            var dddEntity = await _context.DialingEntities.FindAsync(ddd);

            if (dddEntity != null)
                return dddEntity;

            dddEntity = await _dialingService.GetDddAsync(ddd);

            if (dddEntity != null)
            {
                _context.DialingEntities.Add(dddEntity);
                await _context.SaveChangesAsync();
            }

            return dddEntity;
        }
    }
}