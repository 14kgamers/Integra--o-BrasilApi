using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cep.Domain.Entities;

namespace Cep.Domain.Interfaces
{
    public interface ICepRepository
    {
        Task<CepEntity> GetCepAsync(string cep);
        
    }
}