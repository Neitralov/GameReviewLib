namespace Domain.Tests;

public class GameReviewTests
{
    [Fact]
    public void CanCreateReviewWithCorrectData()
    {
        var sut = GameReview.Create(
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

        var result = sut.IsError;
        
        result.Should().Be(false);
    }
    
    [Theory]
    [InlineData("")]
    [InlineData("   ")]
    [InlineData("ab")]
    [InlineData("abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgha")]
    public void CantCreateReviewWithIncorrectTitle(string title)
    {
        var sut = GameReview.Create(
            title: title, 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: 5, 
            isBestGame: true, 
            comment: "someNote",
            posterPath: "/poster");

        var result = sut.FirstError;
        
        result.Should().Be(DomainErrors.GameReview.InvalidName);
    }
    
    [Theory]
    [InlineData(1969)]
    [InlineData(10000)]
    public void CantCreateReviewWithIncorrectYear(int year)
    {
        var sut = GameReview.Create(
            title: "Minecraft", 
            releaseYear: year, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: 5, 
            isBestGame: true, 
            comment: "someNote",
            posterPath: "/poster");

        var result = sut.FirstError;
        
        result.Should().Be(DomainErrors.GameReview.InvalidReleaseYear);
    }

    [Fact]
    public void CantCreateReviewWithoutGenre()
    {
        var sut = GameReview.Create(
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: 0, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: 5, 
            isBestGame: true, 
            comment: "someNote",
            posterPath: "/poster");

        var result = sut.FirstError;
        
        result.Should().Be(DomainErrors.GameReview.InvalidGenre);
    }
    
    [Fact]
    public void CantCreateReviewWithoutMode()
    {
        var sut = GameReview.Create(
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: 0, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: 5, 
            isBestGame: true, 
            comment: "someNote",
            posterPath: "/poster");

        var result = sut.FirstError;
        
        result.Should().Be(DomainErrors.GameReview.InvalidMode);
    }
    
    [Fact]
    public void CantCreateReviewWithoutEngine()
    {
        var sut = GameReview.Create(
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: 0,
            isCompleted: true, 
            score: 5, 
            isBestGame: true, 
            comment: "someNote",
            posterPath: "/poster");

        var result = sut.FirstError;
        
        result.Should().Be(DomainErrors.GameReview.InvalidEngine);
    }

    [Theory]
    [InlineData(-1)]
    [InlineData(6)]
    public void CantCreateReviewWithIncorrectScore(int score)
    {
        var sut = GameReview.Create(
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: score, 
            isBestGame: false, 
            comment: "someNote",
            posterPath: "/poster");

        var result = sut.FirstError;
        
        result.Should().Be(DomainErrors.GameReview.InvalidScore);
    }

    [Fact]
    public void CantCreateReviewWithZeroScoreWhenGameIsCompleted()
    {
        var sut = GameReview.Create(
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: 0, 
            isBestGame: false, 
            comment: "someNote",
            posterPath: "/poster");

        var result = sut.FirstError;
        
        result.Should().Be(DomainErrors.GameReview.ScoreCantBeZeroWhenGameIsCompleted);
    }
    
    [Fact]
    public void CantCreateReviewWithSomeScoreWhenGameIsNotCompleted()
    {
        var sut = GameReview.Create(
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: false, 
            score: 5, 
            isBestGame: false, 
            comment: "someNote",
            posterPath: "/poster");

        var result = sut.FirstError;
        
        result.Should().Be(DomainErrors.GameReview.ScoreMustBeZeroWhenGameIsNotCompleted);
    }

    [Fact]
    public void CantCreateReviewWithIsBestGameWhenScoreIsLowerThanMaxScore()
    {
        var sut = GameReview.Create(
            title: "Minecraft", 
            releaseYear: 2024, 
            genre: Genres.ActionRpg, 
            mode: GameModes.Singleplayer, 
            engine: GameEngines.UnityEngine,
            isCompleted: true, 
            score: 1, 
            isBestGame: true, 
            comment: "someNote",
            posterPath: "/poster");

        var result = sut.FirstError;
        
        result.Should().Be(DomainErrors.GameReview.GameCantBeTheBestWhenScoreIsLowerThanMaxScore);
    }
}