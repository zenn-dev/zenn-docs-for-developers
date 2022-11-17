# zenn-cli

zenn-cli は記事や本のテンプレートを作成するコマンドツールと、プレビューを表示するWebサーバーを提供します。

## 構成

コマンドツールのルートは `./src/server/zenn.ts` で、サブコマンドは `./src/server/commands` 以下に配置します。

プレビューサーバーを起動するコマンドは `./src/server/commands/preview.ts` です。

プレビューサーバーは、大きく分けてサーバーとクライアントから成ります。

- サーバーの役割は、ローカルの `./articles` や `./books` ディレクトリからファイルを解析し、クライアントに情報をAPIで提供することと、クライアントをホスティングすることです。サーバーの実装は `./src/server/api` や `./src/server/lib` にあります。
- クライアントの役割は、サーバーのAPIから取得した情報を元に、ファイルツリーやプレビューを表示します。クライアントの実装は、`./src/client` にある React のプロジェクトです。

クライアントのプレビュー機能は、以下のパッケージに依存します。

- `zenn-content-css`
- `zenn-embed-elements`
- `zenn-markdown-html`
- `zenn-validator`

## 開発環境

`yarn dev` を実行することでクライアントとサーバーが起動します。クライアントは [vite](https://vitejs.dev/) でホスティングされ、サーバーはExpressサーバーを [nodemon](https://nodemon.io/) で監視することで、ホットリロードを実現します。

## ビルド

`yarn build` で `./dist` に生成されたファイルをnpmのリリース時に含めるようにします。（ `package.json` の `files` に指定）

```shell
$ yarn build
```

### webpackの使用について

zenn-cli では、依存関係（package.json の dependencies）を無くすため [webpack](https://webpack.js.org) でバンドルしたファイルをリリースしています。

依存関係を無くす理由は以下の通りです。

- `zenn-cli` を使用しているリポジトリで、対応する必要のない security alert が通知されてしまうのを防ぐため
- 依存関係のアップデートにより、誤作動を起こしてしまうのを防ぐため
- `node_modules` の重力を減らし、ブラックホールになってしまうのを防ぐため

## テスト

`yarn test` で実行します。

## lint

`yarn lint:fix` で実行します。
