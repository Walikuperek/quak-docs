echo "Deploying zip: $1"
cd ../scripts/deploy
pnpm run deploy $1 # deploy the zip file