namespace ChallengeAPI.Models.Views
{
    public class QuestionView
    {
        public Question question { get; set; } = null!;
        public List<QuestionOption> questionOptions { get; set; } = null!;

    }
}
