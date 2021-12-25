using ft_trancedence_Api.Models;
using ft_trancedence_Api.Models.Dtos;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ft_trancedence_Api.Models.Auth;

namespace ft_trancedence_Api.Services.UserManager
{
    public class UserManager
    {
        readonly IConfiguration _config;
        readonly ApplicationDbContext _dbContext;

        public UserManager(IConfiguration configuration, ApplicationDbContext dbContext)
        {
            _config = configuration;
            _dbContext = dbContext;
        }

        public async Task<JwtResponse> Auth(InputUserDto user)
        {
            if (user == null)
                return new JwtResponse(error: "the user is null");
            var findedUser = await _dbContext.Users.SingleOrDefaultAsync(u => u.Username == user.Username);
            if (findedUser == null)
                return new JwtResponse(error: "Пользователя с данным логином не существует");

            bool isCorrectPassword = BCrypt.Net.BCrypt.Verify(user.Password, findedUser.PasswordHash);
            if (!isCorrectPassword)
                return new JwtResponse(error: "Неправильный пароль");

            return new JwtResponse(
                userData: new UserDataDto { token =  GenerateJwtToken(findedUser), username = user.Username, avatar = findedUser.AvatarUrl}
                );
        }

        public async Task CreateUser(InputUserDto user)
        {
            if (user == null)
                throw new Exception("Произошла ошибка");

            bool isUserExist = await _dbContext.Users.AnyAsync(u => u.Username == user.Username);
            if (isUserExist)
                throw new Exception("Пользователь с данным логином уже существует");

            await _dbContext.Users.AddAsync(new User 
            { 
                    Username = user.Username, 
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword(user.Password) 
            });

            await _dbContext.SaveChangesAsync();
        }

        private string GenerateJwtToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.Name, value: user.Username)
            };

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(Convert.ToInt32(_config["Jwt:LiveInMinutes"])),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }

    public struct JwtResponse
    {
        public readonly string error;
        public readonly UserDataDto userData;

        public JwtResponse(UserDataDto userData = null, string error = null)
        {
            this.userData = userData;
            this.error = error;
        }
    }
}
