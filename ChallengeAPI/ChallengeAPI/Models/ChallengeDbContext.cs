using Microsoft.EntityFrameworkCore;

namespace ChallengeAPI.Models
{
    public class ChallengeDbContext: DbContext
    {
        public ChallengeDbContext(DbContextOptions<ChallengeDbContext> options): base(options)
        {

        }
        public virtual DbSet<Prize> Prizes => Set<Prize>();
        public virtual DbSet<Users> Users => Set<Users>();
        public virtual DbSet<UserType> UserTypes => Set<UserType>();
        public virtual DbSet<QuestionOption> QuestionOptions => Set<QuestionOption>();
        public virtual DbSet<Question> Questions => Set<Question>();
        public virtual DbSet<Result> Results => Set<Result>();
        public virtual DbSet<RedeemedPrize> RedeemedPrizes => Set<RedeemedPrize>();
        public virtual DbSet<User_UserType> UserUserTypes => Set<User_UserType>();
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User_UserType>().HasKey(k => k.UserId).HasName("PK_User_UserType");
            modelBuilder.Entity<Result>().HasOne(x => x.Question).WithMany(y => y.Results).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Result>().HasOne(x => x.QuestionOption).WithMany(y => y.Results).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<RedeemedPrize>().HasOne(x => x.User).WithMany(y => y.RedeemedPrizes).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<RedeemedPrize>().HasOne(x => x.Result).WithMany(y => y.RedeemedPrizes).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<RedeemedPrize>().HasOne(x => x.Prize).WithMany(y => y.RedeemedPrizes).OnDelete(DeleteBehavior.NoAction);

        }
        
    }
}
