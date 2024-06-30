git clone https://github.com/Neitralov/GameReviewLib.git
cd GameReviewLib

cd client
bun install
bun run build
cp -rfT ./dist ../server/src/WebAPI/wwwroot

cd ../server/src/WebAPI
dotnet publish -c Release
podman build . -t gamereviewlib

podman run \
-d \
-p 7432:8080 \
-e ASPNETCORE_ENVIRONMENT=Production \
-v gamereviewlib-posters:/app/wwwroot/posters:Z \
-v gamereviewlib-database:/app/data:Z \
--name gamereviewlib \
--replace \
gamereviewlib

cd ~/.config/systemd/user
podman generate systemd --name gamereviewlib -f
systemctl --user enable container-gamereviewlib.service