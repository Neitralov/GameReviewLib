namespace Domain.Interfaces;

public interface IStatisticsRepository
{
    // Read
    Task<int> GetNumberOfCompletedGames();
    Task<int> GetNumberOfPostponedGames();
    Task<string> GetLastCompletedGame();
    Task<string> GetNewestCompletedGame();
    Task<string> GetOldestCompletedGame();
    Task<List<RatingDto>> GetRatingOfCompletedGamesByGenre();
    Task<List<RatingDto>> GetRatingOfCompletedGamesByMode();
    Task<List<RatingDto>> GetRatingOfCompletedGamesByEngine();
}