namespace Domain.Services;

public class GameReviewService(IGameReviewRepository repository)
{
    public async Task<ErrorOr<Created>> StoreReview(GameReview review)
    {
        if (review.IsBestGame && await repository.IsEnoughBestGames())
            return DomainErrors.GameReview.TooManyBestGames;
            
        await repository.AddReview(review);
        return Result.Created;
    }

    public async Task<ErrorOr<GameReview>> GetReview(Guid reviewId)
    {
        var result = await repository.FindReviewById(reviewId);
        return result is not null ? result : DomainErrors.GameReview.NotFound;
    }

    public async Task<List<GameReview>> GetReviews()
    {
        return await repository.GetReviews();
    }

    public async Task<List<GameReview>> GetHallOfFlame()
    {
        return await repository.GetHallOfFlame();
    }

    public async Task<ErrorOr<Updated>> UpdateReview(GameReview review)
    {
        if (review.IsBestGame && await repository.IsEnoughBestGames())
            return DomainErrors.GameReview.TooManyBestGames;
        
        var result = await repository.UpdateReview(review);
        return result ? Result.Updated : DomainErrors.GameReview.NotFound;
    }

    public async Task<ErrorOr<Deleted>> RemoveReview(Guid reviewId)
    {
        var result = await repository.RemoveReview(reviewId);
        return result ? Result.Deleted : DomainErrors.GameReview.NotFound;
    }
}