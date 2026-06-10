using Cep.Domain.Entities;

namespace Cep.Domain.Interfaces
{
    public interface IDialingRepository
    {
        Task<List<DialingEntity?>> GetAllDddsAsync();
        Task<DialingEntity?> GetDddAsync(int ddd);
    }
}