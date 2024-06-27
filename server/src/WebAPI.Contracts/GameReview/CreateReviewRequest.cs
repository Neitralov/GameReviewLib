using Domain.Enums;

namespace WebAPI.Contracts.GameReview;

public record CreateReviewRequest(
    string Title,
    int ReleaseYear,
    Genres Genre,
    GameModes Mode,
    GameEngines Engine,
    bool IsCompleted,
    int Score,
    bool IsBestGame,
    string? Comment,
    string PosterPath)
{
    /// <example>Minecraft</example>
    public string Title { get; init; } = Title;
    /// <example>2024</example>
    public int ReleaseYear { get; init; } = ReleaseYear;
    /// <example>4</example>
    public Genres Genre { get; init; } = Genre;
    /// <example>1</example>
    public GameModes Mode { get; init; } = Mode;
    /// <example>1</example>
    public GameEngines Engine { get; init; } = Engine;
    /// <example>true</example>
    public bool IsCompleted { get; init; } = IsCompleted;
    /// <example>4</example>
    public int Score { get; init; } = Score;
    /// <example>false</example>
    public bool IsBestGame { get; init; } = IsBestGame;
    /// <example>This is like DiggerOnline</example>
    public string? Comment { get; init; } = Comment;
    /// <example>/posters/poster1</example>
    public string PosterPath { get; init; } = PosterPath;
}