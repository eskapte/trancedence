using backend_api.Models.Chat;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ft_trancedence_Api.Models.Auth
{
    public class User
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        [Required]
        public string Username { get; set; }
        [Required]
        public string PasswordHash { get; set; }
        public string AvatarUrl { get; set; }

        public ICollection<Chat> Chats { get; set; }
        public ICollection<User> Friends { get; set; }

        public bool IsOnline { get; set; } = false;

        public User()
        {
            Chats = new List<Chat>();
            Friends = new List<User>();
        }
    }
}
