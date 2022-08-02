namespace ChallengeAPI.Models
{
    public class Prize
    {
        public int? Id { get; set; }
       
        public string Name { get; set; } = null!;
        public string ImageUrl { get; set; } = null!;
        public int QuantityAvailable { get; set; }
        public ICollection<RedeemedPrize>? RedeemedPrizes { get; set; }
    }
}
