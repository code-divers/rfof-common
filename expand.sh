#!/bin/bash
set -e
cd /etc/RFoptic

unzip -o rfof-common.zip -d /etc/RFoptic/rfof-common
unzip -o rfof-server.zip -d /etc/RFoptic/rfof-server
unzip -o rfof-client.zip -d /etc/RFoptic/rfof-client

mv rfof-common.zip /home/pi/projects/html-server
mv rfof-server.zip /home/pi/projects/html-server
mv rfof-client.zip /home/pi/projects/html-server

echo "install rfof-common package"
cd /etc/RFoptic/rfof-common
npm install
npm run build-prod
rm -rf node_modules/
npm install --production

echo "install rfof-server package"
cd /etc/RFoptic/rfof-server
npm install
npm run build-prod
rm -rf node_modules/
npm install --production
rm -rf *.*
rm -rf src

echo "install rfof-client package"
cd /etc/RFoptic/rfof-client
npm install
npm run build-prod
rm -rf *.*
rm -rf node_modules/
rm -rf src

cd /etc/RFoptic/rfof-common
sudo cp rfof-server-service.service /lib/systemd/system

cd /etc/RFoptic/
sudo rm -rf /home/pi/projects/etcRFoptic.gz
sudo tar -czf /home/pi/projects/etcRFoptic.gz rfof-common/ rfof-client/ rfof-server/

sudo systemctl daemon-reload
sudo systemctl stop rfof-server-service
sudo systemctl start rfof-server-service


