# zenn-docs-for-developers

Zennの開発者向けドキュメントのリポジトリです。

このドキュメントは [Docusaurus](https://docusaurus.io/) により作成され、GitHub Pagesにデプロイされています。

ドキュメントを読む場合は以下にアクセスしてください。

https://zenn-dev.github.io/zenn-docs-for-developers/

## デプロイ

GitHub Actionsにより、mainブランチにpushされると自動的にGitHub Pagesにデプロイされます。

## Docusaurusの使い方

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
