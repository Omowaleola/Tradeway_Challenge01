namespace ChallengeAPI.Models.Views
{
    public class PrizeView
    {
        public int? Id { get; set; } 
        public string Name { get; set; } = null!;
        public string ImageUrl { get; set; } = null!;
        public int QuantityAvailable { get; set; }

        public PrizeView()
        { }

       public PrizeView(int? id, string name, string imageUrl, int quantityAvailable)
        {
            Id = id;
            Name = name;
            ImageUrl = imageUrl;
            QuantityAvailable = quantityAvailable;
        }
    }
}
