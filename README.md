# QUAK Website

This is README.md for [QUAK.COM.PL](https://quak.com.pl) website maintenance.

## Local Development

```bash
$ pnpm i
$ pnpm dev  # localhost:3000
```

## Deploy

### Install script dependencies

```bash
$ cd scripts/deploy
$ pnpm i
```

### Environment Variables

To run the deploy script to the CPanel, you need to have the following environment variables set:

> Store variables in `quak-docs/sripts/deploy/.env`
> ```dotenv
> # Username and password for the CPanel
> USERNAME=your-username
> PASSWORD=your-password
> ```

### Usage

#### Build, export to static HTML and Deploy

Use when you want to deploy the website for the first time or when you want to deploy a new version of the website.

```bash
$ sh scripts/build-deploy.sh 'Archive_19_05_2024_3.zip'
```

#### Deploy another version

Use to deploy another version of the website. Useful when the website is already deployed and you want to deploy another version from given zip package.

> Remember to put `Archive_17_05_2024.zip` in the `quak-docs/out/` directory.

```bash
$ sh scripts/change-version.sh 'Archive_17_05_2024.zip'
```
