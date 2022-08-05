using ChallengeAPI.Models;
using ChallengeAPI.Models.Views;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChallengeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private ChallengeDbContext context;
        private Random random = new Random();
        public QuestionController(ChallengeDbContext context)
        {
            this.context = context;
        }

        [HttpGet("PrizeQuestion")]
        public ActionResult<Question> GetQuestionToWinPrize()
        {
            try
            {
               var questions = context.Questions.Include(q=>q.QuestionOptions).ToList();
                var question = questions.OrderBy(x => random.Next()).First();
                if (question != null)
                {
                   
                    return Ok(question);
                }
                return BadRequest("No Questions available");

            }catch(Exception e)

            {
                return BadRequest(e.Message);
            }            

        }

    }
}
