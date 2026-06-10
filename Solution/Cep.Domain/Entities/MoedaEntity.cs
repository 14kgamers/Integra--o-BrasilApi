using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Cep.Domain.Entities
{
    public class MoedaEntity
    {
        [Key]
        public string simbolo { get; set; } = string.Empty;
        public string nome { get; set; } = string.Empty;
        public string tipo_moeda { get; set; } = string.Empty;
    }
}