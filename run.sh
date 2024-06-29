cd server/src/WebAPI
dotnet publish -c Release
podman build . -t backend-test

cd ../../../client
bun run build
podman build . -t frontend-test

podman pod create \
--name gamereviewlib \
-p 7431:80 \
-p 7432:8080 \
--replace

podman run \
-d \
--pod gamereviewlib \
-e ASPNETCORE_ENVIRONMENT=Development \
-v gamereviewlib-backend-volume-posters:/app/wwwroot:Z \
-v gamereviewlib-backend-volume-database:/app/data:Z \
--name gamereviewlib-backend \
--replace \
backend-test

podman run \
-d \
--pod gamereviewlib \
--name gamereviewlib-frontend \
--replace \
frontend-test
