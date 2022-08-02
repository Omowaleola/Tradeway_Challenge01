namespace ChallengeAPI.Models
{
    public class Users
    {
        public int? Id { get; set; }
        public string Name { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string CellPhone { get; set; } = null!;
        public DateTime? Created { get; set; }
        public ICollection<Result>? Results { get; set; } = null!;
        public ICollection<RedeemedPrize>? RedeemedPrizes { get; set; } = null!;


    }
}
