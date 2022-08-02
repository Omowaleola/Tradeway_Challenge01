namespace ChallengeAPI.Models
{
    public class QuestionOption
    {
        public int? Id { get; set; }
        public string Text { get; set; } = null!;
        public int QuestionId { get; set; }
        public Boolean IsCorrect { get; set; }
        public virtual Question Question { get; set; } = null!;
        public virtual ICollection<Result>? Results { get; set; } = null!;
    }
}
