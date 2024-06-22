namespace Database.Repositories;

public class GameReviewRepository(LiteDatabase database) : IGameReviewRepository
{
    public Task AddReview(GameReview review)
    {
        var reviews = database.GetCollection<GameReview>();
        reviews.Insert(review);

        return Task.CompletedTask;
    }

    public Task<GameReview?> FindReviewById(Guid reviewId)
    {
        var reviews = database.GetCollection<GameReview>();
        var review = reviews.FindById(reviewId);

        return Task.FromResult<GameReview?>(review);
    }

    public Task<List<GameReview>> GetReviews()
    {
        var reviews = database.GetCollection<GameReview>();
        var orderedReviews = reviews.Query().OrderBy(review => review.Timestamp).ToList();

        return Task.FromResult(orderedReviews);
    }

    public Task<List<GameReview>> GetHallOfFlame()
    {
        var reviews = database.GetCollection<GameReview>();
        var hallOfFlame = reviews.Find(review => review.IsBestGame).ToList();

        return Task.FromResult(hallOfFlame);
    }

    public Task<bool> IsEnoughBestGames()
    {
        var reviews = database.GetCollection<GameReview>();
        var numberOfBestGames = reviews.Count(review => review.IsBestGame);
        var isEnoughBestGames = numberOfBestGames == GameReview.MaxNumberOfTheBestGames;
        
        return Task.FromResult(isEnoughBestGames);
    }

    public Task<bool> RemoveReview(Guid reviewId)
    {
        var reviews = database.GetCollection<GameReview>();
        var result = reviews.Delete(reviewId);

        return Task.FromResult(result);
    }

    public Task<bool> UpdateReview(GameReview review)
    {
        var reviews = database.GetCollection<GameReview>();
        var result = reviews.Update(review);

        return Task.FromResult(result);
    }
}