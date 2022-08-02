namespace ChallengeAPI.Models.Views
{
    public class PrizeView
    {
        public int? Id { get; set; } 
        public string Name { get; set; } = null!;
        public string ImageUrl { get; set; } = null!;
        public int QuantityAvailable { get; set; }


    }
}
