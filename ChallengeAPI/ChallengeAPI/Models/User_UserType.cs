namespace ChallengeAPI.Models
{
    public class User_UserType
    {
        
        public int UserId { get; set; }
        public int UserTypeId { get; set; }
        public Users User { get; set; } = null!;
        public UserType UserType { get; set; } = null!;

    }
}
