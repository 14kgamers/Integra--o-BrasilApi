using System.Text.Json;
using Cep.Domain.Entities;

namespace Cep.Infrastructure.Services
{
    public class DialingService
    {
        private readonly HttpClient _httpClient;

        public DialingService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<DialingEntity?> GetDddAsync(int ddd)
        {
            var response = await _httpClient.GetAsync(
                $"https://brasilapi.com.br/api/ddd/v1/{ddd}");

            if (!response.IsSuccessStatusCode)
                return null;

            var content = await response.Content.ReadAsStringAsync();

            var dddEntity = JsonSerializer.Deserialize<DialingEntity>(
                content,
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

            if (dddEntity != null)
            {
                dddEntity.Ddd = ddd;
            }

            return dddEntity;
        }
    }
}