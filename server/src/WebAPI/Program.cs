var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddRouting(options => options.LowercaseUrls = true);
    builder.Services.AddControllers();

    builder.Services.AddSingleton(new LiteDatabase("MyDb.db"));

    builder.Services.AddTransient<IGameReviewRepository, GameReviewRepository>();
    builder.Services.AddTransient<GameReviewService>();
    builder.Services.AddTransient<IStatisticsRepository, StatisticsRepository>();
    builder.Services.AddTransient<StatisticsService>();

    builder.Services.AddEndpointsApiExplorer();

    builder.Services.AddSwaggerGen(options =>
    {
        options.SwaggerDoc("v1", new OpenApiInfo { Title = "GameReviewLib.WebAPI", Version = "1.0" } );

        var xmlDocPaths = Directory.GetFiles(AppContext.BaseDirectory, "*.xml", SearchOption.TopDirectoryOnly).ToList();
        xmlDocPaths.ForEach(xmlDocPath => options.IncludeXmlComments(xmlDocPath));
    });
}

var app = builder.Build();
{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseExceptionHandler("/error");
    }

    app.UseHttpsRedirection();
    app.MapControllers();
    app.Run();
}

/// <summary>Объявление частичного абстрактного класса для возможности интеграционного тестирования</summary>
public abstract partial class Program { }