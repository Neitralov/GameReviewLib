namespace Domain.Entities;

public class GameReview
{
    public Guid Id { get; private set; }
    public string Title { get; private set; } = string.Empty;
    public int ReleaseYear { get; private set; }
    public Genres Genre { get; private set; }
    public GameModes Mode { get; private set; }
    public GameEngines Engine { get; private set; }
    public bool IsCompleted { get; private set; }
    public int Score { get; private set; }
    public bool IsBestGame { get; private set; }
    public string? Comment { get; private set; } = string.Empty;
    public string PosterPath { get; private set; } = string.Empty;
    public DateTime Timestamp { get; private set; }

    public const int MaxNumberOfTheBestGames = 10;
    public const int MinNameLength = 3;
    public const int MaxNameLength = 128;
    public const int MinReleaseYear = 1970;
    public const int MaxReleaseYear = 9999;
    public const int MinScore = 0;
    public const int MaxScore = 5;
    
    private GameReview() { }
    
    public static ErrorOr<GameReview> Create(
        string title,
        int releaseYear,
        Genres genre,
        GameModes mode,
        GameEngines engine,
        bool isCompleted,
        int score,
        bool isBestGame,
        string? comment,
        string posterPath,
        Guid? id = null)
    {
        List<Error> errors = [];

        if (title.Trim().Length is < MinNameLength or > MaxNameLength)
            errors.Add(DomainErrors.GameReview.InvalidName);
        
        if (releaseYear is < MinReleaseYear or > MaxReleaseYear)
            errors.Add(DomainErrors.GameReview.InvalidReleaseYear);
        
        if (genre == 0 || !Enum.IsDefined(genre))
            errors.Add(DomainErrors.GameReview.InvalidGenre);
        
        if (mode == 0 || !Enum.IsDefined(mode))
            errors.Add(DomainErrors.GameReview.InvalidMode);
        
        if (engine == 0 || !Enum.IsDefined(engine))
            errors.Add(DomainErrors.GameReview.InvalidEngine);
        
        if (score is < MinScore or > MaxScore)
            errors.Add(DomainErrors.GameReview.InvalidScore);
        else
        {
            if (score == 0 && isCompleted)
                errors.Add(DomainErrors.GameReview.ScoreCantBeZeroWhenGameIsCompleted);
            
            if (score != 0 && !isCompleted)
                errors.Add(DomainErrors.GameReview.ScoreMustBeZeroWhenGameIsNotCompleted);
        }
        
        if (isBestGame && score != MaxScore)
            errors.Add(DomainErrors.GameReview.GameCantBeTheBestWhenScoreIsLowerThanMaxScore);

        if (errors.Count > 0)
            return errors;

        return new GameReview
        {
            Id = id ?? Guid.NewGuid(),
            Title = title.Trim(),
            ReleaseYear = releaseYear,
            Genre = genre,
            Mode = mode,
            Engine = engine,
            IsCompleted = isCompleted,
            Score = score,
            IsBestGame = isBestGame,
            Comment = comment,
            PosterPath = posterPath,
            Timestamp = DateTime.UtcNow
        };
    }
}