namespace Database.Repositories;

public class StatisticsRepository(LiteDatabase database) : IStatisticsRepository
{
    public Task<int> GetNumberOfCompletedGames()
    {
        var reviews = database.GetCollection<GameReview>();
        var result = reviews.Count(review => review.IsCompleted);

        return Task.FromResult(result);
    }

    public Task<int> GetNumberOfPostponedGames()
    {
        var reviews = database.GetCollection<GameReview>();
        var result = reviews.Count(review => review.IsCompleted == false);

        return Task.FromResult(result);
    }

    public Task<string> GetLastCompletedGame()
    {
        var reviews = database.GetCollection<GameReview>();
        
        if (!reviews.Exists(reviwew => reviwew.IsCompleted)) 
            return Task.FromResult("N/A");
        
        var newestTimestamp = reviews.Find(reviwew => reviwew.IsCompleted).Max(review => review.Timestamp);
        var review = reviews.FindOne(review => review.IsCompleted && review.Timestamp == newestTimestamp);

        return Task.FromResult($"{review.Title} ({review.ReleaseYear})");
    }

    public Task<string> GetNewestCompletedGame()
    {
        var reviews = database.GetCollection<GameReview>();
        
        if (!reviews.Exists(reviwew => reviwew.IsCompleted)) 
            return Task.FromResult("N/A");
        
        var maxReleaseYear = reviews.Find(reviwew => reviwew.IsCompleted).Max(review => review.ReleaseYear);
        var review = reviews.FindOne(review => review.IsCompleted && review.ReleaseYear == maxReleaseYear);

        return Task.FromResult($"{review.Title} ({review.ReleaseYear})");
    }

    public Task<string> GetOldestCompletedGame()
    {
        var reviews = database.GetCollection<GameReview>();
        
        if (!reviews.Exists(reviwew => reviwew.IsCompleted)) 
            return Task.FromResult("N/A");
        
        var minReleaseYear = reviews.Find(reviwew => reviwew.IsCompleted).Min(review => review.ReleaseYear);
        var review = reviews.FindOne(review => review.IsCompleted && review.ReleaseYear == minReleaseYear);
        
        return Task.FromResult($"{review.Title} ({review.ReleaseYear})");
    }

    public Task<List<RatingDto>> GetRatingOfCompletedGamesByGenre()
    {
        var reviews = database.GetCollection<GameReview>();
        var rating = reviews
            .Find(review => review.IsCompleted)
            .GroupBy(review => review.Genre)
            .Select(review => new RatingDto(Count: review.Count(), Value: (int)review.Key))
            .OrderByDescending(ratingItem => ratingItem.Count)
            .ToList();
        
        return Task.FromResult(rating);
    }

    public Task<List<RatingDto>> GetRatingOfCompletedGamesByMode()
    {
        var reviews = database.GetCollection<GameReview>();
        var rating = reviews
            .Find(review => review.IsCompleted)
            .GroupBy(review => review.Mode)
            .Select(review => new RatingDto(Count: review.Count(), Value: (int)review.Key))
            .OrderByDescending(ratingItem => ratingItem.Count)
            .ToList();
        
        return Task.FromResult(rating);
    }

    public Task<List<RatingDto>> GetRatingOfCompletedGamesByEngine()
    {
        var reviews = database.GetCollection<GameReview>();
        var rating = reviews
            .Find(review => review.IsCompleted)
            .GroupBy(review => review.Engine)
            .Select(review => new RatingDto(Count: review.Count(), Value: (int)review.Key))
            .OrderByDescending(ratingItem => ratingItem.Count)
            .ToList();
        
        return Task.FromResult(rating);
    }
}