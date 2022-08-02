using Microsoft.AspNetCore.Mvc;
using ChallengeAPI.Models;
namespace ChallengeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private ChallengeDbContext context;
        public RegistrationController(ChallengeDbContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public ActionResult<Users> SaveUser(Users user)
        {
            try
            {
                var temp = context.User.FirstOrDefault(u=> u.Email==user.Email || u.CellPhone==user.CellPhone);
                if(temp==null)
                {
                    user.Created = DateTime.Now;
                    context.User.Add(user);
                    context.SaveChanges();
                    return Ok(user);
                }
                return BadRequest("Your email or phone number has been registered in the system");
            }catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet]
        [Route("checkEmail/{email}")]
        public ActionResult<bool> CheckEmail(string email)
        {
            try
            {
                if (context.User.Any(x => x.Email.Equals(email)))
                    return Ok(true);
                return Ok(false);
            }
            catch (Exception ex)
            {
               return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("checkMobileNumber/{number}")]
        public ActionResult<bool> CheckMobileNumber(string number)
        {
            try
            {
                if (context.User.Any(x => x.CellPhone.Equals(number)))
                    return Ok(true);
                return Ok(false);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
