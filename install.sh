git clone https://github.com/Neitralov/GameReviewLib.git
cd GameReviewLib

cd server/src/WebAPI
dotnet publish -c Release
podman build . -t gamereviewlib-webapi

cd ../../../client
bun i
bun run build
podman build . -t gamereviewlib-client

podman pod create \
--name gamereviewlib \
-p 7431:80 \
-p 7432:8080 \
--replace

podman run \
-d \
--pod gamereviewlib \
-e ASPNETCORE_ENVIRONMENT=Production \
-v gamereviewlib-posters:/app/wwwroot:Z \
-v gamereviewlib-database:/app/data:Z \
--name gamereviewlib-webapi \
--replace \
gamereviewlib-webapi

podman run \
-d \
--pod gamereviewlib \
--name gamereviewlib-client \
--replace \
gamereviewlib-client

cd ~/.config/systemd/user
podman generate systemd --name gamereviewlib -f
systemctl --user enable pod-gamereviewlib.service
podman pod stop gamereviewlib
podman pod start gamereviewlib