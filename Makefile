dev:
	cd client && bun install
	cd client && bun run build
	cp -rfT client/dist server/src/WebAPI/wwwroot
	cd server/src/WebAPI && dotnet publish -c Release
	cd server/src/WebAPI && podman build . -t gamereviewlib-dev

	podman run \
	-d \
	-p 7432:8080 \
	-e ASPNETCORE_ENVIRONMENT=Development \
    -v gamereviewlib-posters-dev:/app/wwwroot/posters:Z \
    -v gamereviewlib-database-dev:/app/data:Z \
    --name gamereviewlib-dev \
    --replace \
    gamereviewlib-dev