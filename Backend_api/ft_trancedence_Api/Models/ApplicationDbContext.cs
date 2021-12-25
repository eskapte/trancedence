using ft_trancedence_Api.Models.Auth;
using Microsoft.EntityFrameworkCore;


namespace ft_trancedence_Api.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property("Id").HasDefaultValueSql("gen_random_uuid()");

            modelBuilder.Entity<User>().HasData(new User
            {
                Username = "test",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("bonopart"),
                Id = System.Guid.NewGuid()
            });

            modelBuilder.Entity<User>().HasData(new User
            {
                Username = "test1",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("bonopart")
            });
        }

        public DbSet<User> Users { get; set; }
    }
}
