using System.Text.Json;
using Cep.Domain.Entities;

namespace Cep.Infrastructure.Services
{
    public class CepService
    {
        private readonly HttpClient _httpClient;

        public CepService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<CepEntity?> BuscarCepAsync(string cep)
        {
            var response = await _httpClient.GetAsync(
                $"https://brasilapi.com.br/api/cep/v2/{cep}");

            if (!response.IsSuccessStatusCode)
                return null;

            var content = await response.Content.ReadAsStringAsync();

            var dados = JsonSerializer.Deserialize<CepEntity>(
                content,
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

            return dados;
        }
    }
}