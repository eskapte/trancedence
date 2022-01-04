using ft_trancedence_Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using ft_trancedence_Api.Models.Auth;

namespace backend_api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/friends")]
    public class FriendsController : ControllerBase
    {
        readonly ApplicationDbContext _dbContext;
        readonly ILogger<FriendsController> _logger;

        public FriendsController(ApplicationDbContext dbContext, ILogger<FriendsController> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet("search")]
        public async Task<IActionResult> Search([FromQuery]string searchQuery)
        {
            _logger.LogInformation("Search query = {0}", searchQuery);

            string authUsername = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name)?.Value;
            User authUser = await _dbContext.Users.SingleOrDefaultAsync(u => u.Username == authUsername);

            if (authUser == null)
                return BadRequest("Авторизованный пользователь не найден в базе данных");

            IQueryable<User> findedByQuery = _dbContext.Users.Where(u => u.Username.StartsWith(searchQuery));

            return Ok(findedByQuery.ToList().Select(f => new { username = f.Username, avatarUrl = f.AvatarUrl, isOnline = f.IsOnline }));
        }
    }
}
