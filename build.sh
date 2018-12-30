#!/bin/bash
set -e

echo "install rfof-common"
npm install
npm run build

echo "install rfof-server"
cd ../rfof-server
npm install
npm run build-prod

echo "install rfof-client"
cd ../rfof-client
npm install
npm run build-prod
