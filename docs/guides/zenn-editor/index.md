# zenn-editor

zenn-editor リポジトリで管理されているパッケージの開発ガイドです。

## セットアップ

zenn-editor リポジトリは [lerna](https://github.com/lerna/lerna) によるモノレポ構成です。

それぞれのプロジェクトは `./packages` に配置されています。

リポジトリをクローンし、プロジェクトルートで `pnpm install` を実行することで、`./packages` にある全てのプロジェクトの依存モジュールがインストールされます。

```shell
$ git clone https://github.com/zenn-dev/zenn-editor.git
$ pnpm install
```

同様に、テストやビルドもプロジェクトのルートで `pnpm test`、`pnpm build` を実行することで、`./packages` にある全てのプロジェクトに対して行うことができます。これは依存するモジュールに対するテストや動作確認をしたい時に便利です。

## ブランチ

- `canary`: 開発用のブランチです。通常は`canary`ブランチから新しいブランチを切って、PRで`canary`ブランチにマージします。マージされると、`X.Y.Z-alpha.0`のようなバージョンが自動的にリリースされます。
- `main`: リリース用のブランチです。通常は`canary`ブランチから`main`ブランチにマージします。マージされると、`X.Y.Z`のようなバージョンが自動的にリリースされます。
