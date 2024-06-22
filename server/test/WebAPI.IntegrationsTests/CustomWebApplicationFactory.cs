namespace WebAPI.IntegrationsTests;

// ReSharper disable once ClassNeverInstantiated.Global
public class CustomWebApplicationFactory : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureTestServices(services =>
        {
            services.RemoveAll<LiteDatabase>();
            services.AddSingleton(new LiteDatabase("TestDb.db"));
        });
    }
}