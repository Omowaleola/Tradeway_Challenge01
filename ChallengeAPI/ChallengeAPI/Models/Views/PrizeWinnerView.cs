namespace ChallengeAPI.Models.Views
{
    public class PrizeWinnerView
    {
        public int ResultId { get; set; }
        public string FullName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string CellPhone { get; set; } = null!;
        public int PrizeId { get; set; }
        public string PrizeName { get; set; } = null!;

    
    }
}
