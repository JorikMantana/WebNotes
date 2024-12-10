using Microsoft.AspNetCore.Mvc;
using SimpleNotes.API.DTOs;
using SimpleNotes.Domain.Interfaces;
using SimpleNotes.Domain.Models;

namespace SimpleNotes.API.Controllers;

[ApiController]
[Route("[controller]")]
public class NotesController : Controller
{
    private readonly INotesService _notesService;

    public NotesController(INotesService notesService)
    {
        _notesService = notesService;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<NoteDto>>> GetAllNotes()
    {
        var notes = await _notesService.GetAllNotesAsync();

        var noteDtos = notes.Select(n => new NoteDto()
        {
            Id = n.Id,
            Title = n.Title,
            Content = n.Content
        });
        
        return Ok(notes);
    }

    [HttpPost]
    public async Task<ActionResult> AddNote(NoteDto noteDto)
    {
        var note = new Note()
        {
            Title = noteDto.Title,
            Content = noteDto.Content
        };
        
        await _notesService.AddNoteAsync(note);
        return Ok();
    }

    [HttpDelete]
    public async Task<ActionResult> DeleteNote(int id)
    {
        await _notesService.DeleteNoteAsync(id);
        return Ok();
    }
}