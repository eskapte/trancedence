using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Text.Json.Serialization;

namespace ft_trancedence_Api.Models.Dtos
{
    public class InputUserDto
    {
        [JsonPropertyName("username")]
        public string Username { get; set; }
        [JsonPropertyName("password")]
        public string Password { get; set; }

        public bool IsEmpty()
        {
            return (this.Username == null || this.Password == null);
        }

        public override string ToString()
        {
            return String.Format("{0} {1}", Username, Password);
        }
    }
}
