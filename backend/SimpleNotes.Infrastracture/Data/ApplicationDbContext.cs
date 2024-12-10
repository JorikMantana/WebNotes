using Microsoft.EntityFrameworkCore;
using SimpleNotes.Domain.Models;

namespace SimpleNotes.Infrastracture.Data;

public class ApplicationDbContext : DbContext
{

    public DbSet<Note> Notes { get; set; }
    
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        Database.EnsureCreated();
    }
}