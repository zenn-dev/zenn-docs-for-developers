# zenn-editor

zenn-editor リポジトリで管理されているパッケージの開発ガイドです。

## セットアップ

zenn-editor リポジトリは [pnpm](https://pnpm.io/ja/) + [Turborepo](https://turbo.build/repo) + [lerna-lite](https://github.com/lerna-lite/lerna-lite) によるモノレポ構成です。

それぞれのプロジェクトは `./packages` に配置されています。

リポジトリをクローンし、プロジェクトルートで `pnpm install` を実行することで、`./packages` にある全てのプロジェクトの依存モジュールがインストールされます。

```shell
$ git clone https://github.com/zenn-dev/zenn-editor.git

# pnpmをcorepackでインストールする場合は以下を実行
$ corepack enable pnpm

$ pnpm install
```

:::note
pnpm のインストールには corepack を使用することを推奨します。<br />
corepack を使用しない場合は、corepack の[インストール方法](https://pnpm.io/ja/installation)を参照してインストールしてください。
:::

同様に、テストやビルドもプロジェクトのルートで `pnpm test`、`pnpm build` を実行することで、`./packages` にある全てのプロジェクトに対して行うことができます。これは依存するモジュールに対するテストや動作確認をしたい時に便利です。

AIコーディングエージェント向けのファイル管理には[rulesync](https://github.com/dyoshikawa/rulesync)を使用しています。次のコマンドを実行することで、主要なAIコーディングエージェントに対応した設定ファイルが生成されます。

```bash
npx rulesync generate
```

## ブランチ

- `canary`: 開発用のブランチです。新しいブランチを作る場合は、`canary`ブランチから作成します。`canary`の最新は `X.Y.Z-alpha.0` のようなバージョン指定または `@canary` でインストールすることができます。
- `main`: リリース用のブランチです。通常は`canary`ブランチから`main`ブランチにマージします。mainの最新は `X.Y.Z` のようなバージョン指定または `@latest` でインストールすることができます。

## リリース

### canaryバージョンのリリース

- `canary`ブランチにコミット（PRがマージ）されると、GitHub Actions によって自動的にビルドが実行され、`X.Y.Z-alpha.0`のようなバージョンがnpmにリリースされます。

### mainバージョンのリリース

- `canary`ブランチから`main`ブランチへのPRを作成します。
- `release` ラベルを付けます。
- PRがマージされると、GitHub Actions によって自動的にビルドが実行され、`X.Y.Z`のようなバージョンがnpmにリリースされます。

## Monorepo で使用しているライブラリ

zenn-editor では以下のライブラリを使用して、Monorepo 環境を構築しています。

### pnpm 

**公式サイト:** https://pnpm.io/ja/

npm、yarn などと同じパッケージマネージャーです。
シンボリックリンクを利用した独自構成で node_modules を管理することにより、高速で安全なパッケージ管理を可能とします。
zenn-editor では、workspace 機能によって Monorepo のパッケージを管理しています。


### Turborepo

**公式サイト:** https://turbo.build/repo

管理している workspace を依存関係を考慮してコマンドを実行するツールです。
zenn-editor では、ビルドやテストなどを実行する時に使用しています。


### lerna-lite

**公式サイト:** https://github.com/lerna-lite/lerna-lite

[lerna](https://lerna.js.org/) から `version` と `publish` 機能だけを抜き出したバージョン管理ツールです。
基本的な使い方は lerna と一緒ですが、多くの Monorepo 機能はデフォルトでは含まれていないことに注意してください。
zenn-editor では、workspace をリリースする際に使用しています。

## 動作確認

- `zenn-cli` は `zenn-content-css` `zenn-embed-elements` `zenn-markdown-html` `zenn-model` に依存しているため、 `zenn-cli` の動作確認をすることで、これらのパッケージの動作確認も行うことができます。
    - `zenn-cli` の動作確認方法は [zenn-cli](./zenn-cli.md) を参照してください。
