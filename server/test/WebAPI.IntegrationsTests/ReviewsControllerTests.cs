namespace WebAPI.IntegrationsTests;

public class ReviewsControllerTests(CustomWebApplicationFactory fixture) : IClassFixture<CustomWebApplicationFactory>
{
    [Fact] 
    public async Task CreatedReviewWillBeStored()
    {
        var database = fixture.Services.GetService<LiteDatabase>();
        database?.DropCollection(nameof(GameReview));
        var client = fixture.CreateClient();
        
        var request = new CreateReviewRequest(
            Title: "Minecraft", 
            ReleaseYear: 2024, 
            Genre: Genres.ActionRpg, 
            Mode: GameModes.Singleplayer, 
            Engine: GameEngines.UnityEngine,
            IsCompleted: true, 
            Score: 5, 
            IsBestGame: true, 
            Comment: "someNote",
            PosterPath: "/poster");
        
        var response = await client.PostAsJsonAsync("/api/reviews", request);
        
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadFromJsonAsync<ReviewResponse>();
        content?.Title.Should().Be("Minecraft");
    }
    
    [Fact] 
    public async Task GetAllReviewsSouldReturnsEmptyArrayWhenThereIsNoItemsInDatabase()
    {
        var database = fixture.Services.GetService<LiteDatabase>();
        database?.DropCollection(nameof(GameReview));
        var client = fixture.CreateClient();
        
        var response = await client.GetAsync("/api/reviews");
        
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadFromJsonAsync<List<ReviewResponse>>();
        content?.Count.Should().Be(0);
    }
    
    [Fact] 
    public async Task GetAllReviewsShouldReturnsArrayWithTwoItemsWhenThereIsTwoItemsInDatabase()
    {
        var database = fixture.Services.GetService<LiteDatabase>();
        database?.DropCollection(nameof(GameReview));
        var client = fixture.CreateClient();
        
        var request = new CreateReviewRequest(
            Title: "Minecraft", 
            ReleaseYear: 2024, 
            Genre: Genres.ActionRpg, 
            Mode: GameModes.Singleplayer, 
            Engine: GameEngines.UnityEngine,
            IsCompleted: true, 
            Score: 5, 
            IsBestGame: true, 
            Comment: "someNote",
            PosterPath: "/poster");
        
        await client.PostAsJsonAsync("/api/reviews", request);
        await client.PostAsJsonAsync("/api/reviews", request);
        
        var response = await client.GetAsync("/api/reviews");
        
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadFromJsonAsync<List<ReviewResponse>>();
        content?.Count.Should().Be(2);
    }
    
    [Fact] 
    public async Task GetHallOfFlameShouldReturnOnlyBestGames()
    {
        var database = fixture.Services.GetService<LiteDatabase>();
        database?.DropCollection(nameof(GameReview));
        var client = fixture.CreateClient();
        
        var request1 = new CreateReviewRequest(
            Title: "Minecraft", 
            ReleaseYear: 2024, 
            Genre: Genres.ActionRpg, 
            Mode: GameModes.Singleplayer, 
            Engine: GameEngines.UnityEngine,
            IsCompleted: true, 
            Score: 5, 
            IsBestGame: false, 
            Comment: "someNote",
            PosterPath: "/poster");
        
        var request2 = new CreateReviewRequest(
            Title: "Vangers", 
            ReleaseYear: 2024, 
            Genre: Genres.ActionRpg, 
            Mode: GameModes.Singleplayer, 
            Engine: GameEngines.UnityEngine,
            IsCompleted: true, 
            Score: 5, 
            IsBestGame: true, 
            Comment: "someNote",
            PosterPath: "/poster");
        
        await client.PostAsJsonAsync("/api/reviews", request1);
        await client.PostAsJsonAsync("/api/reviews", request2);
        
        var response = await client.GetAsync("/api/reviews/hall-of-flame");
        
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadFromJsonAsync<List<ReviewResponse>>();
        content?.Count.Should().Be(1);
    }
    
    [Fact] 
    public async Task UserWillGetAnErrorWhenThereIsMoreThan10ReviewsWithIsBestGameTrue()
    {
        var database = fixture.Services.GetService<LiteDatabase>();
        database?.DropCollection(nameof(GameReview));
        var client = fixture.CreateClient();
        
        var request = new CreateReviewRequest(
            Title: "Minecraft", 
            ReleaseYear: 2024, 
            Genre: Genres.ActionRpg, 
            Mode: GameModes.Singleplayer, 
            Engine: GameEngines.UnityEngine,
            IsCompleted: true, 
            Score: 5, 
            IsBestGame: true, 
            Comment: "someNote",
            PosterPath: "/poster");

        List<Task> tasks = [];
        for (var index = 0; index < 10; index++)
            tasks.Add(client.PostAsJsonAsync("/api/reviews", request));
        await Task.WhenAll(tasks);
        
        var response = await client.PostAsJsonAsync("/api/reviews", request);
        
        var content = await response.Content.ReadFromJsonAsync<ProblemDetails>();
        content?.GetFirstErrorMessage().Should().Be(DomainErrors.GameReview.TooManyBestGames.Description);
    }
    
    [Fact] 
    public async Task UserCanUpdateReview()
    {
        var database = fixture.Services.GetService<LiteDatabase>();
        database?.DropCollection(nameof(GameReview));
        var client = fixture.CreateClient();
        
        var createRequest = new CreateReviewRequest(
            Title: "Minecraft", 
            ReleaseYear: 2024, 
            Genre: Genres.ActionRpg, 
            Mode: GameModes.Singleplayer, 
            Engine: GameEngines.UnityEngine,
            IsCompleted: true, 
            Score: 5, 
            IsBestGame: true, 
            Comment: "someNote",
            PosterPath: "/poster");
        
        var createResponse = await client.PostAsJsonAsync("/api/reviews", createRequest);
        var id = (await createResponse.Content.ReadFromJsonAsync<ReviewResponse>())?.Id;
        
        var updateRequest = new UpdateReviewRequest(
            Id: id!.Value,
            Title: "Updated", 
            ReleaseYear: 2024, 
            Genre: Genres.ActionRpg, 
            Mode: GameModes.Singleplayer, 
            Engine: GameEngines.UnityEngine,
            IsCompleted: true, 
            Score: 5, 
            IsBestGame: true, 
            Comment: "someNote",
            PosterPath: "/poster");
        
        await client.PutAsJsonAsync("/api/reviews", updateRequest);

        var response = await client.GetAsync($"/api/reviews/{id}");
        
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadFromJsonAsync<ReviewResponse>();
        content?.Title.Should().Be("Updated");
    }
    
    [Fact] 
    public async Task UserCanDeleteReview()
    {
        var database = fixture.Services.GetService<LiteDatabase>();
        database?.DropCollection(nameof(GameReview));
        var client = fixture.CreateClient();
        
        var createRequest = new CreateReviewRequest(
            Title: "Minecraft", 
            ReleaseYear: 2024, 
            Genre: Genres.ActionRpg, 
            Mode: GameModes.Singleplayer, 
            Engine: GameEngines.UnityEngine,
            IsCompleted: true, 
            Score: 5, 
            IsBestGame: true, 
            Comment: "someNote",
            PosterPath: "/poster");
        
        var createResponse = await client.PostAsJsonAsync("/api/reviews", createRequest);
        var id = (await createResponse.Content.ReadFromJsonAsync<ReviewResponse>())?.Id;
        await client.DeleteAsync($"api/reviews/{id}");

        var response = await client.GetAsync($"/api/reviews");
        
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadFromJsonAsync<List<ReviewResponse>>();
        content?.Count.Should().Be(0);
    }
}