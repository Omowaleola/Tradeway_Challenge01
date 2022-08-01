namespace ChallengeAPI.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }

        public virtual ICollection<QuestionOption> QuestionOptions { get; set; }
        public virtual ICollection<Result>? Results { get; set; }
    }
}
