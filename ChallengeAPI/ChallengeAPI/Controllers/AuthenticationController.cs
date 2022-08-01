using Microsoft.AspNetCore.Mvc;
using ChallengeAPI.Models;
namespace ChallengeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private ChallengeDbContext context;
        public AuthenticationController(ChallengeDbContext context)
        {
            this.context = context;
        }
    }
}
