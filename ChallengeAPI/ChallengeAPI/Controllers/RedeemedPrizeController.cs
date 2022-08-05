using ChallengeAPI.Models;
using Microsoft.AspNetCore.Mvc;
using ChallengeAPI.Models.Views;

namespace ChallengeAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class RedeemedPrizeController : ControllerBase
    {
        private ChallengeDbContext context;
        public RedeemedPrizeController(ChallengeDbContext context)
        {
            this.context = context;
        }

        [HttpGet("prizeWinners")]
        public ActionResult<List<PrizeWinnerView>> GetSuccessfulPrizeWinners()
        {
            try
            {
                var prizeWinnerList = from rp in context.RedeemedPrizes
                                      join r in context.Results on rp.ResultId equals r.Id
                                      join p in context.Prizes on rp.PrizeId equals p.Id
                                      join u in context.User on r.UserId equals u.Id
                                      select new PrizeWinnerView
                                      {
                                          ResultId = rp.ResultId,
                                          FullName = u.Name + " " + u.Surname,
                                          CellPhone = u.CellPhone,
                                          Email = u.Email,
                                          PrizeId = rp.ResultId,
                                          PrizeName = p.Name
                                      };
                if (prizeWinnerList == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(prizeWinnerList);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPost]
        public IActionResult SaveRedeemedPrize(RedeemedPrizeView redeemedPrize)
        {
            try
            {
                var temp = context.RedeemedPrizes.FirstOrDefault(rp => rp.UserId == redeemedPrize.UserId);
                if (temp == null)
                {
                    var prize = context.Prizes.FirstOrDefault(p=>p.Id == redeemedPrize.PrizeId);
                    if (prize != null && prize.QuantityAvailable>0)
                    {
                        prize.QuantityAvailable = prize.QuantityAvailable - 1;
                        var tempRedeemedPrize = new RedeemedPrize
                        {
                            UserId = redeemedPrize.UserId,
                            ResultId= redeemedPrize.ResultId,
                            PrizeId= redeemedPrize.PrizeId,
                            Created= DateTime.Now
                    };
                       
                        context.RedeemedPrizes.Add(tempRedeemedPrize);
                        context.SaveChanges();
                        return Ok();
                    }
                   return BadRequest("Prize not available");
                }
                return BadRequest("You have already chosen a prize");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
