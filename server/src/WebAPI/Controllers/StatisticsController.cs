namespace WebAPI.Controllers;

/// <inheritdoc />
[Route("/api/statistics")]
public class StatisticsController(StatisticsService statisticsService) : ApiController
{
    /// <summary>Получить количество пройденных игр</summary>
    /// <response code="200">Количество пройденных игр</response>
    [HttpGet("number-of-completed-games")]
    [ProducesResponseType(typeof(int), 200)]
    public async Task<IActionResult> GetNumberOfCompletedGames()
    {
        var numberOfCompletedGames = await statisticsService.GetNumberOfCompletedGames();
        
        return Ok(numberOfCompletedGames);
    }
    
    /// <summary>Получить количество отложенных игр</summary>
    /// <response code="200">Количество отложенных игр</response>
    [HttpGet("number-of-postponed-games")]
    [ProducesResponseType(typeof(int), 200)]
    public async Task<IActionResult> GetNumberOfPostponedGames()
    {
        var numberOfPostponedGames = await statisticsService.GetNumberOfPostponedGames();

        return Ok(numberOfPostponedGames);
    }
    
    /// <summary>Получить последнюю пройденную игру</summary>
    /// <response code="200">Последняя пройденная игра</response>
    [HttpGet("last-completed-game")]
    [ProducesResponseType(typeof(string), 200)]
    public async Task<IActionResult> GetLastCompletedGame()
    {
        var lastCompletedGame = await statisticsService.GetLastCompletedGame();

        return Ok(lastCompletedGame);
    }
    
    /// <summary>Получить самую новую пройденную игру</summary>
    /// <response code="200">Самая новая пройденная игра</response>
    [HttpGet("newest-completed-game")]
    [ProducesResponseType(typeof(string), 200)]
    public async Task<IActionResult> GetNewestCompletedGame()
    {
        var newestCompletedGame = await statisticsService.GetNewestCompletedGame();

        return Ok(newestCompletedGame);
    }
    
    /// <summary>Получить самую старую пройденную игру</summary>
    /// <response code="200">Самая старая пройденная игра</response>
    [HttpGet("oldest-completed-game")]
    [ProducesResponseType(typeof(string), 200)]
    public async Task<IActionResult> GetOldestCompletedGame()
    {
        var oldestCompletedGame = await statisticsService.GetOldestCompletedGame();

        return Ok(oldestCompletedGame);
    }
    
    /// <summary>Получить рейтинг количества пройденных игр по жанрам</summary>
    /// <response code="200">Рейтинг количества пройденных игр по жанрам</response>
    [HttpGet("rating-of-completed-games-by-genre")]
    [ProducesResponseType(typeof(List<RatingDto>), 200)]
    public async Task<IActionResult> GetRatingOfCompletedGamesByGenre()
    {
        var ratingOfCompletedGamesByGenre = await statisticsService.GetRatingOfCompletedGamesByGenre();
        
        return Ok(ratingOfCompletedGamesByGenre.Adapt<RatingResponse>());
    }
    
    /// <summary>Получить рейтинг количества пройденных игр по режимам</summary>
    /// <response code="200">Рейтинг количества пройденных игр по режимам</response>
    [HttpGet("rating-of-completed-games-by-mode")]
    [ProducesResponseType(typeof(List<RatingDto>), 200)]
    public async Task<IActionResult> GetRatingOfCompletedGamesByMode()
    {
        var ratingOfCompletedGamesByMode = await statisticsService.GetRatingOfCompletedGamesByMode();

        return Ok(ratingOfCompletedGamesByMode.Adapt<RatingResponse>());
    }
    
    /// <summary>Получить рейтинг количества пройденных игр по движкам</summary>
    /// <response code="200">Рейтинг количества пройденных игр по движкам</response>
    [HttpGet("rating-of-completed-games-by-engine")]
    [ProducesResponseType(typeof(List<RatingDto>), 200)]
    public async Task<IActionResult> GetRatingOfCompletedGamesByEngine()
    {
        var ratingOfCompletedGamesByEngine = await statisticsService.GetRatingOfCompletedGamesByEngine();

        return Ok(ratingOfCompletedGamesByEngine.Adapt<RatingResponse>());
    }
}