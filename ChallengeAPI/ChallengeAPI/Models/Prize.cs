namespace ChallengeAPI.Models
{
    public class Prize
    {
        public int Id { get; set; }
       
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public int QuantityAvailable { get; set; }
        public ICollection<RedeemedPrize>? RedeemedPrizes { get; set; }
    }
}
