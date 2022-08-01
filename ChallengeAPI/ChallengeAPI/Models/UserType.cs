namespace ChallengeAPI.Models
{
    public class UserType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Users>? Users { get; set; }
    }
}
