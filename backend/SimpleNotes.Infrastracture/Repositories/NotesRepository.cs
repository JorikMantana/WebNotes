using Microsoft.EntityFrameworkCore;
using SimpleNotes.Application.Interfaces;
using SimpleNotes.Domain.Models;
using SimpleNotes.Infrastracture.Data;

namespace SimpleNotes.Infrastracture.Repositories;

public class NotesRepository : INotesRepository
{
    private readonly ApplicationDbContext _context;

    public NotesRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<Note>> GetAllNotesAsync()
    {
        return await _context.Notes.ToListAsync();
    }

    public async Task AddNoteAsync(Note note)
    {
        await _context.Notes.AddAsync(note);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteNoteAsync(int id)
    {
        var note = await _context.Notes.FindAsync(id);
        _context.Notes.Remove(note);
        await _context.SaveChangesAsync();
    }
}
