# 🎮 GameReviewLib
GameReviewLib — библиотека для локального хранения обзоров на видеоигры.

![image](https://github.com/Neitralov/GameReviewLib/assets/109409226/a836d6a0-9c7f-42af-8526-70abca2c79dc)

<details>
  <summary>🌆 Другие скриншоты 🌆</summary>

  ![image](https://github.com/Neitralov/GameReviewLib/assets/109409226/5b8d8418-0165-4fe0-afee-626792f8f2ae)
  ![image](https://github.com/Neitralov/GameReviewLib/assets/109409226/a836d6a0-9c7f-42af-8526-70abca2c79dc)
  ![image](https://github.com/Neitralov/GameReviewLib/assets/109409226/3405911a-346a-4fd9-8dbe-4199680df31e)
  ![image](https://github.com/Neitralov/GameReviewLib/assets/109409226/842586db-42e1-4073-bdd9-a396ae9de51c)
</details>

# 🔥 Особенности
* Хранение обзоров в виде коллекции карточек.
* Быстрый поиск по названию игры.
* Сортировка и фильтрация по множеству параметров.
* Анализ библиотеки и сводка данных в виде статистики.
* Удобный редактор для создания обзора.
* Сжатие обложек при загрузке.

# 📑 Документация
* [Макет сайта](https://www.figma.com/design/TXkT6cgTmrIRT4Vao7WXgZ/Game-Review-Lib)

# 🛠️ Сборка
1. Установите [.NET SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) версии 8.0 или новее.
2. Убедитесь, что имеете [Podman](https://podman.io).
3. Убедитесь, что имеете [Bun](https://bun.sh).
4. Скачайте исходники и запустите скрипт `run.sh`.

После приложение будет доступно в браузере по адресу `http://localhost:7432`.

# 💾 Установка (для Podman)
1. `curl -L https://raw.githubusercontent.com/Neitralov/GameReviewLib/master/install.sh -o ./install.sh`
2. `chmod u+x install.sh`
3. `./install.sh`

После приложение будет доступно по адресу `http://localhost:7432`.

# 🧰 Стек технологий
Frontend:

* [React](https://react.dev)
* [React Router](https://reactrouter.com/en/main/start/overview)
* [Tailwindcss](https://tailwindcss.com/)
* [Vite](https://vitejs.dev)

Backend:

* [ASP.NET Core 8](https://dotnet.microsoft.com/en-us/apps/aspnet)
* [LiteDB](https://github.com/mbdavid/litedb)

Тесты:
* [xUnit](https://github.com/xunit/xunit)
* [Moq](https://github.com/devlooped/moq)
* [FluentAssertions](https://github.com/fluentassertions/fluentassertions)

Дополнительные пакеты:

* [ErrorOr](https://github.com/amantinband/error-or)
* [SkiaSharp.NativeAssets.Linux.NoDependencies](https://github.com/mono/SkiaSharp)
* [Swashbuckle.AspNetCore](https://github.com/domaindrivendev/Swashbuckle.AspNetCore)
* [Swashbuckle.AspNetCore.Filters](https://github.com/mattfrear/Swashbuckle.AspNetCore.Filters)
* [Mapster](https://github.com/MapsterMapper/Mapster)

# 📃 Лицензия
Программа распространяется под лицензией [MIT](https://github.com/Neitralov/GameReviewLib/blob/master/LICENSE).

За исключением шрифта приложения Ubuntu [UBUNTU FONT LICENCE Version 1.0](https://github.com/Neitralov/GameReviewLib/blob/master/client/src/assets/UFL.txt).
