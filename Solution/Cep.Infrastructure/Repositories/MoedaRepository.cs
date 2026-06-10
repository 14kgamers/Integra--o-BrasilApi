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
    public class MoedaRepository : IMoedaRepository
    {
        private readonly MoedaDbContext _context;
        private readonly MoedaService _moedaService;
        public MoedaRepository(MoedaDbContext context, MoedaService moedaService)
        {
            _context = context;
            _moedaService = moedaService;
        }

        public Task<List<MoedaEntity>> GetAllMoeda()
        {
            throw new NotImplementedException();
        }

        public async Task<List<MoedaEntity>> GetAllMoedas()
        {
            return await _context.MoedaEntities.ToListAsync();
        }

        public async Task<MoedaEntity?> GetMoedaAsync(string simbolo)
        {
            var moedaEntity = await _context.MoedaEntities.FindAsync(simbolo);

            if (moedaEntity != null)
                return moedaEntity;

            moedaEntity = await _moedaService.BuscarMoedaAsync(simbolo);

            if (moedaEntity != null)
            {
                _context.MoedaEntities.Add(moedaEntity);
                await _context.SaveChangesAsync();
            }

            return moedaEntity;
        }
           
    }
}