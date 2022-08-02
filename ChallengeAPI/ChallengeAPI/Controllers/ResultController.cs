using ChallengeAPI.Models;
using ChallengeAPI.Models.Views;
using Microsoft.AspNetCore.Mvc;

namespace ChallengeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResultController : ControllerBase
    {
        private ChallengeDbContext context;

        public ResultController(ChallengeDbContext context)
        {
            this.context = context;
        }

        [HttpPost]

        public IActionResult SaveResult(Result result)
        {
            try
            {
                var temp = context.Results
               .FirstOrDefault(dbResult => dbResult.UserId == result.UserId);
                if (temp == null)
                {   result.Created = DateTime.Now;
                    context.Results.Add(result);
                    context.SaveChanges();
                    return Ok();
                }
                return BadRequest("You have already attempted to win a prize.");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        


    }
}
