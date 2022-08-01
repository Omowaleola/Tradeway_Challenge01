namespace ChallengeAPI.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; } = null!;

        public virtual ICollection<QuestionOption> QuestionOptions { get; set; } = null!;
        public virtual ICollection<Result>? Results { get; set; } = null!;
    }
}
