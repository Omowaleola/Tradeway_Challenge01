namespace ChallengeAPI.Models
{
    public class Result
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public Users User { get; set; }
        public int QuestionId { get; set; }
        public Question Question { get; set; }
        public int QuestionOptionId { get; set; }
        public QuestionOption QuestionOption { get; set; }
        public ICollection<RedeemedPrize> RedeemedPrizes { get; set; }

      
        
    }
}
