# Script/Deploy

## Environment Variables

To run the deploy script to the CPanel, you need to have the following environment variables set:

> Store variables in `quak-docs/sripts/deploy/.env`
> ```dotenv
> # Username and password for the CPanel
> USERNAME=your-username
> PASSWORD=your-password
> ```

### Usage

```bash
$ cd scripts/deploy
$ pnpm run deploy path/to/your/next-version-package.zip
```