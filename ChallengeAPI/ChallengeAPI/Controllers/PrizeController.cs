using Microsoft.AspNetCore.Mvc;
using ChallengeAPI.Models;
using ChallengeAPI.Models.Views;

namespace ChallengeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrizeController : ControllerBase
    {
        private ChallengeDbContext context;
        private Random random = new Random();

        public PrizeController(ChallengeDbContext context)
        {
            this.context = context;
        }

        [HttpGet("Prizes/{numPrizes}")]
        public ActionResult<List<PrizeView>> GetPrizesToSpin(int numPrizes)
        {
            var prizes = from p in context.Prizes
                         where p.QuantityAvailable > 0
                         select new PrizeView(p.Id, p.Name, p.ImageUrl, p.QuantityAvailable);
            if(prizes!=null)
            {
                List<PrizeView> tempArray = new List<PrizeView>();
                PrizeView emptyPrize= new PrizeView(0,"No Prize","NoPrize", GetNumberOfPrizes()*2);
                List<PrizeView> tempList = Enumerable.Repeat(emptyPrize, emptyPrize.QuantityAvailable).ToList();
               // tempArray.AddRange(tempList);
                foreach(var temp in prizes)
                {
                    List<PrizeView> clone = Enumerable.Repeat(temp, temp.QuantityAvailable).ToList();
                    tempArray.AddRange(clone);
                }
                randomize(tempArray, GetNumberOfPrizes());
                return tempArray.Take(numPrizes).ToList();
            }
           
            return BadRequest("No Prizes");
        }

        private void randomize(List<PrizeView> arr, int n)
        {
            // Creating a object
            // for Random class
            Random r = new Random();

            // Start from the last element and
            // swap one by one. We don't need to
            // run for the first element
            // that's why i > 0
            for (int i = n - 1; i > 0; i--)
            {

                // Pick a random index
                // from 0 to i
                int j = r.Next(0, i + 1);

                // Swap arr[i] with the
                // element at random index
                PrizeView temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }

        private int GetNumberOfPrizes()
        {
            var quantities= (from p in context.Prizes select new {p.QuantityAvailable}).ToList();
            return quantities.Select(q=>q.QuantityAvailable).Sum();
        }


        [HttpGet()]
        public ActionResult<List<PrizeView>> GetAllPrizes()
        {
            var prizes = from p in context.Prizes                      
                         select new PrizeView(p.Id, p.Name, p.ImageUrl, p.QuantityAvailable);
            if(prizes.Any())
            {
                return Ok(prizes);
            }
            return BadRequest("No Prizes");
        }
        [HttpGet("{id}")]
        public ActionResult<PrizeView> GetPrizeById (int id)
        {
            var prize = context.Prizes.FirstOrDefault(prize=>prize.Id == id);
            if(prize == null)
            {
                return NotFound();
            }
            return Ok(prize);
        }
        [HttpPut("{id}")]
        public IActionResult UpdatePrize(int prizeId, PrizeView prize)
        {
            try
            {
                var dbPrize = context.Prizes.FirstOrDefault(prize=>prize.Id == prize.Id);
                if(dbPrize != null)
                {
                    dbPrize.Name=prize.Name;
                    dbPrize.ImageUrl=prize.ImageUrl;
                    dbPrize.QuantityAvailable=prize.QuantityAvailable;
                    context.SaveChanges();
                    return Ok();
                }
                return NotFound();

            }catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult SavePrize(PrizeView prize)
        {
            try
            {
                var temp = new Prize() { Name = prize.Name, ImageUrl = prize.ImageUrl, QuantityAvailable = prize.QuantityAvailable };
                context.Prizes.Add(temp);
                context.SaveChanges();
                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        
    }
}
