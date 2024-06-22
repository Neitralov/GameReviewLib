namespace Domain.Tests;

public class GameReviewServiceTests
{
    [Fact]
    public async Task UserCanSaveReviewWhenItIsCorrect()
    {
        var review = GameReview.Create(
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: 5, 
            isBestGame: true, 
            comment: "someNote",
            posterPath: "/poster");
        
        var mock = new Mock<IGameReviewRepository>();
        mock.Setup(repository => repository.IsEnoughBestGames().Result).Returns(false);
        var sut = new GameReviewService(mock.Object);

        var result = await sut.StoreReview(review.Value);
        
        result.Value.Should().Be(Result.Created);
        mock.Verify(repository => repository.AddReview(It.IsAny<GameReview>()), Times.Once);
    }

    [Fact]
    public async Task UserCantSaveMoreThan10BestGames()
    {
        var review = GameReview.Create(
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: 5, 
            isBestGame: true, 
            comment: "someNote",
            posterPath: "/poster");
        
        var mock = new Mock<IGameReviewRepository>();
        mock.Setup(repository => repository.IsEnoughBestGames().Result).Returns(11 > GameReview.MaxNumberOfTheBestGames);
        var sut = new GameReviewService(mock.Object);

        var result = await sut.StoreReview(review.Value);
        
        result.FirstError.Should().Be(DomainErrors.GameReview.TooManyBestGames);
        mock.Verify(repository => repository.AddReview(It.IsAny<GameReview>()), Times.Never);
    }

    [Fact]
    public async Task UserWillReceiveReviewWhenItExists()
    {
        var review = GameReview.Create(
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: 5, 
            isBestGame: true, 
            comment: "someNote",
            posterPath: "/poster");
        
        var mock = new Mock<IGameReviewRepository>();
        mock.Setup(repository => repository.FindReviewById(It.IsAny<Guid>()).Result).Returns(review.Value);
        var sut = new GameReviewService(mock.Object);

        var result = await sut.GetReview(Guid.Empty);
        
        result.Value.Should().Be(review.Value);
    }
    
    [Fact]
    public async Task UserWontReceiveReviewWhenItNotExists()
    {
        var mock = new Mock<IGameReviewRepository>();
        mock.Setup(repository => repository.FindReviewById(It.IsAny<Guid>()).Result).Returns((GameReview)null!);
        var sut = new GameReviewService(mock.Object);

        var result = await sut.GetReview(Guid.Empty);
        
        result.FirstError.Should().Be(DomainErrors.GameReview.NotFound);
    }
    
    [Fact]
    public async Task UserWillReceiveAllReviews()
    {
        var mock = new Mock<IGameReviewRepository>();
        mock.Setup(repository => repository.GetReviews().Result).Returns([]);
        var sut = new GameReviewService(mock.Object);

        var result = await sut.GetReviews();

        result.Should().BeEmpty();
    }
    
    [Fact]
    public async Task UserWillReceiveAllBestGames()
    {
        var mock = new Mock<IGameReviewRepository>();
        mock.Setup(repository => repository.GetHallOfFlame().Result).Returns([]);
        var sut = new GameReviewService(mock.Object);

        var result = await sut.GetHallOfFlame();

        result.Should().BeEmpty();
    }
    
    [Fact]
    public async Task UserCanUpdateReviewWhenItExists()
    {
        var review = GameReview.Create(
            id: Guid.Empty, 
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: 5, 
            isBestGame: true, 
            comment: "someNote",
            posterPath: "/poster");
        
        var mock = new Mock<IGameReviewRepository>();
        mock.Setup(repository => repository.UpdateReview(It.IsAny<GameReview>()).Result).Returns(true);
        var sut = new GameReviewService(mock.Object);

        var result = await sut.UpdateReview(review.Value);
        
        result.Value.Should().Be(Result.Updated);
    }
    
    [Fact]
    public async Task UserCantUpdateNonExistentReview()
    {
        var review = GameReview.Create(
            id: Guid.Empty, 
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: 5, 
            isBestGame: true, 
            comment: "someNote",
            posterPath: "/poster");
        
        var mock = new Mock<IGameReviewRepository>();
        mock.Setup(repository => repository.UpdateReview(It.IsAny<GameReview>()).Result).Returns(false);
        var sut = new GameReviewService(mock.Object);

        var result = await sut.UpdateReview(review.Value);
        
        result.FirstError.Should().Be(DomainErrors.GameReview.NotFound);
    }
    
    [Fact]
    public async Task UserCanRemoveReviewWhenItExists()
    {
        var mock = new Mock<IGameReviewRepository>();
        mock.Setup(repository => repository.RemoveReview(It.IsAny<Guid>()).Result).Returns(true);
        var sut = new GameReviewService(mock.Object);

        var result = await sut.RemoveReview(Guid.Empty);
        
        result.Value.Should().Be(Result.Deleted);
    }
    
    [Fact]
    public async Task UserCantRemoveNonExistentReview()
    {
        var mock = new Mock<IGameReviewRepository>();
        mock.Setup(repository => repository.RemoveReview(It.IsAny<Guid>()).Result).Returns(false);
        var sut = new GameReviewService(mock.Object);

        var result = await sut.RemoveReview(Guid.Empty);
        
        result.FirstError.Should().Be(DomainErrors.GameReview.NotFound);
    }
}