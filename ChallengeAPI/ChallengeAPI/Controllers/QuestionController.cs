using ChallengeAPI.Models;
using ChallengeAPI.Models.Views;
using Microsoft.AspNetCore.Mvc;

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
        public ActionResult<QuestionView> GetQuestionToWinPrize()
        {
            try
            {
                var questions = context.Questions.ToList();
                questions = questions.OrderBy(x => random.Next()).ToList();
                if (questions != null)
                {
                    var question = questions.First();
                    var questionOptions = context.QuestionOptions.Where(qo => qo.QuestionId == question.Id).ToList();
                    var questionView = new QuestionView
                    {
                        question = question,
                        questionOptions = questionOptions
                    };
                    return Ok(questionView);
                }
                return BadRequest("No Questions available");

            }catch(Exception e)

            {
                return BadRequest(e.Message);
            }            

        }

    }
}
