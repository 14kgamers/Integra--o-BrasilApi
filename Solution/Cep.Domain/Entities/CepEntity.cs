using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Cep.Domain.Entities
{
    public class CepEntity
     {
        [Key]
        public string Cep { get; set; } = string.Empty;

        public string state { get; set; } = string.Empty;

        public string city { get; set; } = string.Empty;

        public string neighborhood { get; set; } = string.Empty;

        public string street { get; set; } = string.Empty;

        public string service { get; set; } = string.Empty;
    }
}