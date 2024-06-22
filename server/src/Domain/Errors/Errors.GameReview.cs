namespace Domain.Errors;

public static class DomainErrors
{
    public static class GameReview
    {
        public static Error NotFound => Error.NotFound(
            code:        $"{nameof(Entities.GameReview)}.{nameof(NotFound)}",
            description: "Обзор не найден");

        public static Error InvalidName => Error.Validation(
            code:        $"{nameof(Entities.GameReview)}.{nameof(InvalidName)}",
            description: $"Название игры в обзоре должно быть не короче {Entities.GameReview.MinNameLength} символов " +
                         $"и не длиннее {Entities.GameReview.MaxNameLength} символов");

        public static Error InvalidReleaseYear => Error.Validation(
            code:        $"{nameof(Entities.GameReview)}.{nameof(InvalidReleaseYear)}",
            description: $"Год выхода игры в обзоре должен быть не ранее {Entities.GameReview.MinReleaseYear} г. " +
                         $"и не позднее {Entities.GameReview.MaxReleaseYear} г.");

        public static Error InvalidGenre => Error.Validation(
            code:        $"{nameof(Entities.GameReview)}.{nameof(InvalidGenre)}",
            description: "Жанр игры в обзоре не указан или указан некорректно");
        
        public static Error InvalidMode => Error.Validation(
            code:        $"{nameof(Entities.GameReview)}.{nameof(InvalidMode)}",
            description: "Режим игры в обзоре не указан или указан некорректно");
        
        public static Error InvalidEngine => Error.Validation(
            code:        $"{nameof(Entities.GameReview)}.{nameof(InvalidEngine)}",
            description: "Движок игры в обзоре не указан или указан некорректно");
        
        public static Error InvalidScore => Error.Validation(
            code:        $"{nameof(Entities.GameReview)}.{nameof(InvalidScore)}",
            description: $"Нельзя поставить оценку ниже {Entities.GameReview.MinScore} и выше {Entities.GameReview.MaxScore}");
        
        public static Error ScoreCantBeZeroWhenGameIsCompleted => Error.Validation(
            code:        $"{nameof(Entities.GameReview)}.{nameof(ScoreCantBeZeroWhenGameIsCompleted)}",
            description: "Нельзя поставить оценку 0 для пройденной игры");
        
        public static Error ScoreMustBeZeroWhenGameIsNotCompleted => Error.Validation(
            code:        $"{nameof(Entities.GameReview)}.{nameof(ScoreMustBeZeroWhenGameIsNotCompleted)}",
            description: "Нельзя поставить оценку выше 0 для непройденной игры");
        
        public static Error GameCantBeTheBestWhenScoreIsLowerThanMaxScore => Error.Validation(
            code:        $"{nameof(Entities.GameReview)}.{nameof(GameCantBeTheBestWhenScoreIsLowerThanMaxScore)}",
            description: $"Нельзя объявить игру в обзоре лучшей, если ей выставлена оценка ниже {Entities.GameReview.MaxScore}");
        
        public static Error TooManyBestGames => Error.Validation(
            code:        $"{nameof(Entities.GameReview)}.{nameof(TooManyBestGames)}",
            description: $"Нельзя объявить более {Entities.GameReview.MaxNumberOfTheBestGames} игр лучшими");
    }
}