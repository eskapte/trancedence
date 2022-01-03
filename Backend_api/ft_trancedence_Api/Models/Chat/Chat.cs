using ft_trancedence_Api.Models.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend_api.Models.Chat
{
    public class Chat
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public bool IsDialog { get; set; } = true;

        public string Name { get; set; }

        public ICollection<User> Users { get; set; }
        public ICollection<Message> Messages { get; set; }

        public Chat()
        {
            Users = new List<User>();
            Messages = new List<Message>();
        }
    }
}
