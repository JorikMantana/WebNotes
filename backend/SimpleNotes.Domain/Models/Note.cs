namespace SimpleNotes.Domain.Models;

public class Note
{
    public int Id { get; set; }
    public string Title { get; set; } //Название заметки
    public string Content { get; set; } //Основной текст заметки
}