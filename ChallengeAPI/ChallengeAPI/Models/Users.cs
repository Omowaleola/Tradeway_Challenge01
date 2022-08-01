namespace ChallengeAPI.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string CellPhone { get; set; }
        public string Password { get; set; }
        public int UserTypeId { get; set; }

        public virtual UserType UserType { get; set; }
        public ICollection<Result> Results { get; set; }
        public ICollection<RedeemedPrize> RedeemedPrizes { get; set; }


    }
}
