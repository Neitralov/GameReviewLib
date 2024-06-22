namespace WebAPI.IntegrationsTests;

// ReSharper disable once ClassNeverInstantiated.Global
public class ProblemDetails
{
    [JsonPropertyName("errors")] 
    // ReSharper disable once MemberCanBePrivate.Global
    public Dictionary<string, string[]> Errors { get; set; } = new Dictionary<string, string[]>();
    
    public string GetFirstErrorMessage() => Errors.Values.First().First();
}