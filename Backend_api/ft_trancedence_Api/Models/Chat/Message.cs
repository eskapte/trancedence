using ft_trancedence_Api.Models.Auth;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend_api.Models.Chat
{
    public class Message
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public User Sender { get; set; }

        [Required]
        public string Content { get; set; }

        public Chat Chat { get; set; }

    }
}
