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
- `zenn-model`

## 開発環境

`pnpm dev` を実行することでクライアントとサーバーが起動します。クライアントは [vite](https://vitejs.dev/) でホスティングされ、サーバーはExpressサーバーを [nodemon](https://nodemon.io/) で監視することで、ホットリロードを実現します。

### その他のコマンドを開発環境で動かす

`pnpm build` でビルドを実行したうえで、`pnpm exec:zenn **` コマンドを実行します。

```shell
$ pnpm build
$ pnpm exec:zenn # = npx zenn
$ pnpm exec:zenn preview # = npx zenn preview (.mdの変更に伴うホットリロードも有効になります)
$ pnpm exec:zenn new:article --slug foo-bar-baz-qux # = npx zenn new:article --slug foo-bar-baz-qux
$ pnpm exec:zenn new:book --slug foo-bar-baz-qux # = npx zenn new:book --slug foo-bar-baz-qux
$ pnpm exec:zenn --help # = npx zenn --help
```

### 環境変数を設定する

zenn-cli ではビルドに必要な情報の一部を環境変数で設定します。
開発中に全ての機能を使いたい場合は、`./packages/zenn-cli/.env` ファイルを作成し以下のように設定します。

```bash
# 埋め込みサーバーのオリジン(viteにも対応するために`VITE_`をつけてます)
VITE_EMBED_SERVER_ORIGIN="https://embed.zenn.studio"
```

:::caution
環境変数の値は、zenn-cli (または zenn-editor) の開発目的でのみ使用してください。
:::

## ビルド

`pnpm build` で `./dist` に生成されたファイルをnpmのリリース時に含めるようにします。（ `package.json` の `files` に指定）

```shell
$ pnpm build
```

### webpackの使用について

zenn-cli では、依存関係（package.json の dependencies）を無くすため [webpack](https://webpack.js.org) でバンドルしたファイルをリリースしています。

依存関係を無くす理由は以下の通りです。

- `zenn-cli` を使用しているリポジトリで、対応する必要のない security alert が通知されてしまうのを防ぐため
- 依存関係のアップデートにより、誤作動を起こしてしまうのを防ぐため
- `node_modules` の重力を減らし、ブラックホールになってしまうのを防ぐため

## テスト

`pnpm test` で実行します。

## lint

`pnpm lint` で実行します。
厳密にチェックしたい場合は `pnpm strict:lint` を実行します。
また、Linter などの警告を修正したい場合は `pnpm fix` を実行します。