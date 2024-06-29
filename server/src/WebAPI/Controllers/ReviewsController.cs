namespace WebAPI.Controllers;

/// <inheritdoc />
[Route("/api/reviews")]
public class ReviewsController(GameReviewService reviewService) : ApiController
{
    /// <summary>Добавить новый обзор</summary>
    /// <response code="201">Обзор создан</response>
    /// <response code="400">
    /// Название, год выхода, жанр, режим, движок, оценка игры указано некорректно;
    /// Нельзя поставить оценку 0 для пройденной игры;
    /// Нельзя поставить оценку выше 0 для непройденной игры;
    /// Нельзя объявить игру в обзоре лучшей, если ей выставлена оценка ниже 5;
    /// Нельзя объявить более 10 игр лучшими.
    /// </response>
    [HttpPost]
    [ProducesResponseType(typeof(ReviewResponse), 201)]
    public async Task<IActionResult> CreateReview([Required] CreateReviewRequest request)
    {
        ErrorOr<GameReview> requestToReviewResult = CreateReviewFrom(request);

        if (requestToReviewResult.IsError)
            return Problem(requestToReviewResult.Errors);

        var review = requestToReviewResult.Value;
        ErrorOr<Created> createReviewResult = await reviewService.StoreReview(review);

        return createReviewResult.Match(_ => CreatedAtGetReview(review), Problem);
    }

    /// <summary>Получить данные об обзоре</summary>
    /// <param name="reviewId">Id обзора, который нужно найти</param>
    /// <response code="200">Обзор найден</response>
    /// <response code="404">Not found</response>
    [HttpGet("{reviewId:guid}")]
    [ProducesResponseType(typeof(ReviewResponse), 200)]
    public async Task<IActionResult> GetReview(Guid reviewId)
    {
        ErrorOr<GameReview> getReviewResult = await reviewService.GetReview(reviewId);
        
        return getReviewResult.Match(review => Ok(review.Adapt<ReviewResponse>()), Problem);
    }

    /// <summary>Получить все обзоры</summary>
    /// <response code="200">Список обзоров</response>
    [HttpGet]
    [ProducesResponseType(typeof(List<ReviewResponse>), 200)]
    public async Task<IActionResult> GetReviews()
    {
        var reviews = await reviewService.GetReviews();
        
        return Ok(reviews.Adapt<List<ReviewResponse>>());
    }
    
    /// <summary>Получить обзоры на лучшие игры</summary>
    /// <response code="200">Список обзоров</response>
    [HttpGet("hall-of-flame")]
    [ProducesResponseType(typeof(List<ReviewResponse>), 200)]
    public async Task<IActionResult> GetHallOfFlame()
    {
        var reviews = await reviewService.GetHallOfFlame();
        
        return Ok(reviews.Adapt<List<ReviewResponse>>());
    }

    /// <summary>Обновить существующий обзор</summary>
    /// <response code="204">Обзор успешно обновлен</response>
    /// <response code="400">
    /// Название, год выхода, жанр, режим, движок, оценка игры указано некорректно;
    /// Нельзя поставить оценку 0 для пройденной игры;
    /// Нельзя поставить оценку выше 0 для непройденной игры;
    /// Нельзя объявить игру в обзоре лучшей, если ей выставлена оценка ниже 5;
    /// Нельзя объявить более 10 игр лучшими.
    /// </response>
    /// <response code="404">Not found</response>
    [HttpPut]
    [ProducesResponseType(204)]
    public async Task<IActionResult> UpdateReview([Required] UpdateReviewRequest request)
    {
        ErrorOr<GameReview> requestToReviewResult = CreateReviewFrom(request);
        
        if (requestToReviewResult.IsError)
            return Problem(requestToReviewResult.Errors);
        
        var review = requestToReviewResult.Value;
        ErrorOr<Updated> updateReviewResult = await reviewService.UpdateReview(review);

        return updateReviewResult.Match(_ => NoContent(), Problem);
    }

    /// <summary>Удалить обзор</summary>
    /// <param name="reviewId">Id обзора, который нужно удалить</param>
    /// <response code="204">Обзор удален успешно</response>
    /// <response code="404">Not found</response>
    [HttpDelete("{reviewId:guid}")]
    [ProducesResponseType(204)]
    public async Task<IActionResult> RemoveReview(Guid reviewId)
    {
        ErrorOr<Deleted> removeReviewResult = await reviewService.RemoveReview(reviewId);
        
        return removeReviewResult.Match(_ => NoContent(), Problem);   
    }

    /// <summary>Загрузить постер в хранилище статических файлов</summary>
    /// <response code="200">Постер успешно загружен</response>
    [HttpPost("upload-poster")]
    [ProducesResponseType(200)]
    public async Task<IActionResult> UploadPoster(IFormFile file)
    {
        Directory.CreateDirectory("/app/wwwroot");
        var newFileName = $"{Path.GetRandomFileName()}.webp";
        var posterPath = $"/app/wwwroot/{newFileName}";
        
        try
        {
            await using var fileStream = new FileStream(posterPath, FileMode.Create);
            await file.CopyToAsync(fileStream);

            await using var readStream = new FileStream(posterPath, FileMode.Open);
            var webp = SKBitmap.Decode(readStream).Encode(SKEncodedImageFormat.Webp, 80);

            await using var writeStream = new FileStream(posterPath, FileMode.Create);
            webp.SaveTo(writeStream);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
        
        return Ok(newFileName);
    }
    
    private static ErrorOr<GameReview> CreateReviewFrom(CreateReviewRequest request)
    {
        return GameReview.Create(
            request.Title, 
            request.ReleaseYear, 
            request.Genre, 
            request.Mode, 
            request.Engine, 
            request.IsCompleted, 
            request.Score, 
            request.IsBestGame, 
            request.Comment,
            request.PosterPath);
    }
    
    private static ErrorOr<GameReview> CreateReviewFrom(UpdateReviewRequest request)
    {
        return GameReview.Create(
            request.Title, 
            request.ReleaseYear, 
            request.Genre, 
            request.Mode, 
            request.Engine, 
            request.IsCompleted, 
            request.Score, 
            request.IsBestGame, 
            request.Comment,
            request.PosterPath,
            request.Id);
    }
    
    private CreatedAtActionResult CreatedAtGetReview(GameReview review)
    {
        return CreatedAtAction(
            actionName:  nameof(GetReview),
            routeValues: new { reviewId = review.Id },
            value:       review.Adapt<ReviewResponse>());
    }
}

