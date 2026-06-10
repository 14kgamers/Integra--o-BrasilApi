using System.ComponentModel.DataAnnotations;

namespace Cep.Domain.Entities
{
    public class DialingEntity
    {
        [Key]
        public int Ddd { get; set; }

        public string State { get; set; } = string.Empty;
    }
}