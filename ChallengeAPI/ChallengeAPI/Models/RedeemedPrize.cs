namespace ChallengeAPI.Models
{
    public class RedeemedPrize
    {
        public int? Id { get; set; }
        public int UserId { get; set; }
        
        public Users User { get; set; } = null!;
        public int ResultId { get; set; }
        public Result Result { get; set; } = null!;
        public int PrizeId { get; set; }
        public Prize Prize { get; set; } = null!;
    }
}
