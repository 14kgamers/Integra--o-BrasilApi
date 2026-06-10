using System.Text.Json;
using Cep.Domain.Entities;

namespace Cep.Infrastructure.Services
{
    public class MoedaService
    {
        private readonly HttpClient _httpClient;

        public MoedaService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<MoedaEntity?> BuscarMoedaAsync(string simbolo)
{
    var response = await _httpClient.GetAsync(
        "https://brasilapi.com.br/api/cambio/v1/moedas");

    if (!response.IsSuccessStatusCode)
        return null;

    var content = await response.Content.ReadAsStringAsync();

    var moedas = JsonSerializer.Deserialize<List<MoedaEntity>>(
        content,
        new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });

    var moeda = moedas?.FirstOrDefault(x =>
        x.simbolo.Equals(simbolo, StringComparison.OrdinalIgnoreCase));

    if (moeda == null)
        return null;

    return new MoedaEntity
    {
        simbolo = moeda.simbolo,
        nome = moeda.nome,
        tipo_moeda = moeda.tipo_moeda
    };
}
}
}