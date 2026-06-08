using Cep.Domain.Entities;
using Cep.Domain.Interfaces;
using Cep.Infrastructure.Data;
using Cep.Infrastructure.Services;

namespace Cep.Infrastructure.Repositories
{
    public class CepRepository : ICepRepository
    {
        private readonly AdbContext _context;
        private readonly CepService _cepService;

        public CepRepository(
            AdbContext context,
            CepService cepService)
        {
            _context = context;
            _cepService = cepService;
        }

        public async Task<CepEntity?> GetCepAsync(string cep)
        {
            var cepEntity = await _context.CepEntities.FindAsync(cep);

            if (cepEntity != null)
                return cepEntity;

            cepEntity = await _cepService.BuscarCepAsync(cep);

            if (cepEntity != null)
            {
                _context.CepEntities.Add(cepEntity);
                await _context.SaveChangesAsync();
            }

            return cepEntity;
        }
    }
}