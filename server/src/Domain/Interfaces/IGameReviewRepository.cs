namespace Domain.Interfaces;

public interface IGameReviewRepository
{
    // Create
    Task AddReview(GameReview review);

    // Read
    Task<GameReview?> FindReviewById(Guid reviewId);
    Task<List<GameReview>> GetReviews();
    Task<List<GameReview>> GetHallOfFlame();
    Task<bool> IsEnoughBestGames();

    // Delete
    Task<bool> RemoveReview(Guid reviewId);

    // Update
    Task<bool> UpdateReview(GameReview review);
}