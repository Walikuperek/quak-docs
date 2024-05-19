echo "Building zip: $1"
pnpm build
pnpm export
cd out
zip $1 -r . # zip all files
cd ../scripts/deploy
echo "Deploying zip: $1"
pnpm run deploy $1 # deploy the zip file