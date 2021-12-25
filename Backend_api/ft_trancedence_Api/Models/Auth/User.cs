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
        public string? AvatarUrl { get; set; }
    }
}
