using SimpleNotes.Domain.Models;

namespace SimpleNotes.Domain.Interfaces;

public interface INotesService
{
    Task<IEnumerable<Note>> GetAllNotesAsync();
    Task AddNoteAsync(Note note);
    Task DeleteNoteAsync(int id);
}