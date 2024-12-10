using SimpleNotes.Application.Interfaces;
using SimpleNotes.Domain.Interfaces;
using SimpleNotes.Domain.Models;

namespace SimpleNotes.Application.Services;

public class NotesService : INotesService
{
    private readonly INotesRepository _notesRepository;

    public NotesService(INotesRepository notesRepository)
    {
        _notesRepository = notesRepository;
    }
    
    public async Task<IEnumerable<Note>> GetAllNotesAsync()
    {
        return await _notesRepository.GetAllNotesAsync();
    }

    public async Task AddNoteAsync(Note note)
    {
        await _notesRepository.AddNoteAsync(note);
    }

    public async Task DeleteNoteAsync(int id)
    {
        await _notesRepository.DeleteNoteAsync(id);
    }
}