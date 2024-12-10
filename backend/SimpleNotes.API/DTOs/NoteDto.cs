namespace SimpleNotes.API.DTOs;

public class NoteDto
{
    public int Id { get; set; }
    public string Title { get; set; } //Название заметки
    public string Content { get; set; } //Основной текст заметки
}