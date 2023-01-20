# zenn-editor

zenn-editor リポジトリで管理されているパッケージの開発ガイドです。

## セットアップ

zenn-editor リポジトリは [pnpm](https://pnpm.io/ja/) + [Turborepo](https://turbo.build/repo) + [lerna-lite](https://github.com/lerna-lite/lerna-lite) によるモノレポ構成です。

それぞれのプロジェクトは `./packages` に配置されています。

リポジトリをクローンし、プロジェクトルートで `pnpm install` を実行することで、`./packages` にある全てのプロジェクトの依存モジュールがインストールされます。

```shell
$ git clone https://github.com/zenn-dev/zenn-editor.git
$ pnpm install
```

:::caution
上記のコマンドを実行するには、事前に pnpm のインストールが必要です。<br />
インストール方法: https://pnpm.io/ja/installation
:::


同様に、テストやビルドもプロジェクトのルートで `pnpm test`、`pnpm build` を実行することで、`./packages` にある全てのプロジェクトに対して行うことができます。これは依存するモジュールに対するテストや動作確認をしたい時に便利です。

## ブランチ

- `canary`: 開発用のブランチです。通常は`canary`ブランチから新しいブランチを切って、PRで`canary`ブランチにマージします。マージされると、`X.Y.Z-alpha.0`のようなバージョンが自動的にリリースされます。
- `main`: リリース用のブランチです。通常は`canary`ブランチから`main`ブランチにマージします。マージされると、`X.Y.Z`のようなバージョンが自動的にリリースされます。


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