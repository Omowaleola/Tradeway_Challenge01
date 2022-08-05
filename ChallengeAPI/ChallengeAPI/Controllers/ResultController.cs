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

        public ActionResult<Result> SaveResult(ResultView result)
        {
            try
            {
                var temp = context.Results
               .FirstOrDefault(dbResult => dbResult.UserId == result.UserId);
                if (temp == null)
                {
                    Result tempResult = new Result
                    {
                        UserId = result.UserId,
                        QuestionId = result.QuestionId,
                        QuestionOptionId = result.QuestionOptionId,
                        Created= DateTime.Now
                    };
                    
                    context.Results.Add(tempResult);
                    context.SaveChanges();
                    return Ok(tempResult);
                }
                return BadRequest("You have already attempted to win a prize.");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("Report")]
        public ActionResult<List<ResultReportView>> GetResultsReport()
        {
            try
            {
                var wrong = (from r in context.Results
                             join qo in context.QuestionOptions on r.QuestionOptionId equals qo.Id
                             where qo.IsCorrect == false
                             select r).Count();
                var correct = (from r in context.Results
                               join qo in context.QuestionOptions on r.QuestionOptionId equals qo.Id
                               where qo.IsCorrect == false
                               select r).Count();
                var correctR = new ResultReportView
                {
                    name = "Correct",
                    number = correct
                };
                var wrongR = new ResultReportView
                {
                    name = "Wrong",
                    number = wrong
                };
                 List<ResultReportView> report =new List<ResultReportView>();
                report.Add(wrongR); 
                report.Add(correctR);
                
                return (report);
            }catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        


    }
}
