using Microsoft.EntityFrameworkCore;
using ReactCrudApp.Server.Models;

namespace ReactCrudApp.Server.Data
{
    public class ReactDBContext : DbContext
    {
        public ReactDBContext(DbContextOptions<ReactDBContext> options) : base(options)
        {
            
        }
        public DbSet<Product> Products { get; set; }
    }
}
