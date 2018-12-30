#!/bin/bash
set -e
cd /etc/RFoptic

unzip -o rfof-common.zip -d /etc/RFoptic/rfof-common
unzip -o rfof-server.zip -d /etc/RFoptic/rfof-server
unzip -o rfof-client.zip -d /etc/RFoptic/rfof-client

rm rfof-common.zip
rm rfof-server.zip
rm rfof-client.zip

echo "install rfof-common package"
cd /etc/RFoptic/rfof-common
npm install
npm run build

echo "install rfof-server package"
cd /etc/RFoptic/rfof-server
npm install
npm run build-prod
rm -rf node_modules/
npm install --production
cp -a node_modules/. /home/pi/projects/html-server/node_modules

echo "install rfof-client package"
cd /etc/RFoptic/rfof-client
npm install --production
npm run build-prod

sudo systemctl stop rfof-server-service
sudo systemctl start rfof-server-service


