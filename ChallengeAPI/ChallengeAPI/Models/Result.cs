namespace ChallengeAPI.Models
{
    public class Result
    {
        public int? Id { get; set; }
        public int UserId { get; set; }
        public Users User { get; set; } = null!;
        public int QuestionId { get; set; }
        public Question Question { get; set; } = null!;
        public int QuestionOptionId { get; set; }
        public QuestionOption QuestionOption { get; set; } = null!;
        public ICollection<RedeemedPrize> RedeemedPrizes { get; set; } = null!;



    }
}
