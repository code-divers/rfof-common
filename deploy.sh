#!/bin/bash
set -e
SERVER_ADDRESS=31.168.173.124
SERVER_USER=pi

echo "archiving projects and uploading"
rm rfof-common.zip
zip -r --exclude="*.git*" --exclude="*node_modules*" --exclude="*dist*" rfof-common.zip .
scp rfof-common.zip $SERVER_USER@$SERVER_ADDRESS:/etc/RFoptic
scp expand.sh $SERVER_USER@$SERVER_ADDRESS:/etc/RFoptic

cd ../rfof-client
rm rfof-client.zip
zip -r --exclude="*.git*" --exclude="*node_modules*" --exclude="*dist*" rfof-client.zip .
scp rfof-client.zip $SERVER_USER@$SERVER_ADDRESS:/etc/RFoptic

cd ../rfof-server
rm rfof-server.zip
zip -r --exclude="*.git*" --exclude="*node_modules*" --exclude="*dist*" rfof-server.zip .
scp rfof-server.zip $SERVER_USER@$SERVER_ADDRESS:/etc/RFoptic

echo "executing expand script on server"
cd ../rfof-common
ssh $SERVER_USER@$SERVER_ADDRESS "bash -s" < "expand.sh"