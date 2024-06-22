namespace Domain.Services;

public class StatisticsService(IStatisticsRepository repository)
{
    public async Task<int> GetNumberOfCompletedGames() =>
        await repository.GetNumberOfCompletedGames();

    public async Task<int> GetNumberOfPostponedGames() =>
        await repository.GetNumberOfPostponedGames();

    public async Task<string> GetLastCompletedGame() =>
        await repository.GetLastCompletedGame();

    public async Task<string> GetNewestCompletedGame() =>
        await repository.GetNewestCompletedGame();

    public async Task<string> GetOldestCompletedGame() =>
        await repository.GetOldestCompletedGame();
    
    public async Task<List<RatingDto>> GetRatingOfCompletedGamesByGenre() => 
        await repository.GetRatingOfCompletedGamesByGenre();
    
    public async Task<List<RatingDto>> GetRatingOfCompletedGamesByMode() => 
        await repository.GetRatingOfCompletedGamesByMode();
    
    public async Task<List<RatingDto>> GetRatingOfCompletedGamesByEngine() => 
        await repository.GetRatingOfCompletedGamesByEngine();
}