using expenseTracker.API.Models;
using Microsoft.EntityFrameworkCore;

namespace expenseTracker.API.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Category> Category { get; set;}
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
    }
}