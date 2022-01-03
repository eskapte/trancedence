using ft_trancedence_Api.Models.Dtos;
using ft_trancedence_Api.Services.UserManager;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace ft_trancedence_Api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class AuthController : ControllerBase
    {
        readonly ILogger _logger;
        readonly UserManager _userManager;

        public AuthController(ILogger<AuthController> logger, UserManager userManager)
        {
            _logger = logger;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Auth([FromBody] InputUserDto loginUser)
        {
            _logger.LogInformation($"path: {Request.Path}, data: {loginUser.ToString()}");
            if (loginUser.IsEmpty())
                return BadRequest("getted data is null");

            JwtResponse jwt = await _userManager.Auth(loginUser);
            if (jwt.error != null)
                return BadRequest(jwt.error);

            return Ok(jwt.userData);
        }

        [HttpPost("new_user")]
        public async Task<IActionResult> Registration([FromBody] InputUserDto newUser)
        {
            if (newUser.IsEmpty())
                return BadRequest("Ошибка. Данные не дошли");

            try
            {
                await _userManager.CreateUser(newUser);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

            return Ok("Пользователь успешно создан!");
        }

        [HttpPost("logout")]
        public async Task Logout([FromBody] string username)
        {
            try
            {
                await _userManager.Logout(username);
            }
            catch(Exception e)
            {
                _logger.LogError(e.Message);
            }

        }
    }
}
