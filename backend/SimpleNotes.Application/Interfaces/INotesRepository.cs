using SimpleNotes.Domain.Models;

namespace SimpleNotes.Application.Interfaces;

public interface INotesRepository
{
    Task<IEnumerable<Note>> GetAllNotesAsync();
    Task AddNoteAsync(Note note);
    Task DeleteNoteAsync(int id);
}