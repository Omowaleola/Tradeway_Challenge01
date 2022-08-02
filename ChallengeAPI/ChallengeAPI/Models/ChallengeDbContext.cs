using Microsoft.EntityFrameworkCore;

namespace ChallengeAPI.Models
{
    public class ChallengeDbContext: DbContext
    {
        public ChallengeDbContext(DbContextOptions<ChallengeDbContext> options): base(options)
        {

        }
        public virtual DbSet<Prize> Prizes => Set<Prize>();
        public virtual DbSet<Users> User => Set<Users>();
        public virtual DbSet<QuestionOption> QuestionOptions => Set<QuestionOption>();
        public virtual DbSet<Question> Questions => Set<Question>();
        public virtual DbSet<Result> Results => Set<Result>();
        public virtual DbSet<RedeemedPrize> RedeemedPrizes => Set<RedeemedPrize>();
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Result>().HasOne(x => x.Question).WithMany(y => y.Results).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Result>().HasOne(x => x.QuestionOption).WithMany(y => y.Results).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<RedeemedPrize>().HasOne(x => x.User).WithMany(y => y.RedeemedPrizes).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<RedeemedPrize>().HasOne(x => x.Result).WithMany(y => y.RedeemedPrizes).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<RedeemedPrize>().HasOne(x => x.Prize).WithMany(y => y.RedeemedPrizes).OnDelete(DeleteBehavior.NoAction);
          //  Seed(modelBuilder);

        }

        private void Seed(ModelBuilder md)
        {
            AddQuestions(md);
        }

        private void AddQuestions(ModelBuilder mb)
        {
            int questionId = 1;
            int optionId = 1;
            Question[] questions =
            {
                new(){
                    Id=questionId++,
                    Text= "Does Lindt Have Dark Chocolate",
                    QuestionOptions= new[]
                    {
                        new QuestionOption
                        { 
                            Id=optionId++,
                            QuestionId = questionId,
                            Text = "Yes",
                            IsCorrect = true,
                        },
                        new QuestionOption
                        {
                            Id = optionId++,
                            QuestionId = questionId,
                            Text = "No",
                            IsCorrect = false, },
                        

                    }
                },
                new(){
                    Id=questionId++,
                    Text= "Does Lindt Have White Chocolate",
                    QuestionOptions= new[]
                    {
                       new QuestionOption
                        {
                         Id = optionId++,
                        QuestionId = questionId,
                        Text = "Yes",
                        IsCorrect = true,
                        },
                        new QuestionOption
                        {
                            Id = optionId ++, 
                            QuestionId = questionId,
                        Text = "No",
                        IsCorrect = false, },


                    }
                },
               

            };
            foreach (var q in questions)
            {
                var options = q.QuestionOptions;
                q.QuestionOptions = new QuestionOption[] { };
                mb.Entity<Question>()
                    .HasData(q);
                if (options != null)
                {
                    mb.Entity<QuestionOption>()
                        .HasData(options);
                }
            }
        }
        
    }
}
