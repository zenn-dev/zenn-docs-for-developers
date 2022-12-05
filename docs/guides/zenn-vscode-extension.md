# zenn-vscode-extension

:::caution
この拡張はまだ β 版です
:::

VSCode の Web エディタ（github.dev など）で、Zenn の記事や本を執筆を補助するための[**VSCode Web 拡張機能**](https://code.visualstudio.com/api/extension-guides/web-extensions)です。

主な機能は以下の通りです。

- 記事や本をツリー表示
- 記事や本の雛形を作成
- 記事や本をプレビュー

詳細な使い方は [README](https://github.com/zenn-dev/zenn-vscode-extension#readme) を参照して下さい。

## セットアップ

このリポジトリでは yarn を用いてパッケージ管理を行っています。
以下のコマンドを実行することで、必要なパッケージをインストールすることができます。

```shell
$> yarn install
```

:::note
この時、[VSCode Insiders](https://code.visualstudio.com/insiders/) がインストールされます。
:::

## 開発環境

[セットアップ](#セットアップ)が正常に完了したあと、以下のコマンドを実行することでブラウザが開き拡張をローカル環境で試すことができます。

```shell
$> yarn dev
```

![](./img/vscode-extension/yarn-dev-preview.png)

## デバッグ方法

VSCode を使用している場合は [VSCode のデバッグ機能](https://code.visualstudio.com/docs/editor/debugging) を使用することで、
使用している VSCode 上で拡張機能を試すこともできます。

VSCode 上でデバッグビューを開き、`Run Web Extension` を選択します。

![](./img/vscode-extension/debug-start.png)

次に `F5` キーまたはデバッグ実行ボタンを押すと、別の VSCode ウィンドウが開きます。

![](./img/vscode-extension/debugging-window.png)

### ブレークポイントを打ちたい場合

リポジトリを開いている VSCode で、停止したい箇所にブレークポイントを打ちます。

![](./img/vscode-extension/breakpoint.png)

:::caution
拡張がインストールされている VSCode ではない点に注意してください
:::

次にデバッグを開始し、新規に開かれた VSCode のウィンドウで 開発者ツールの切り替え を実行し、Dev Tools を表示します。
ブラウザで開いている場合は、`F12` キーを押すことで Dev Tools を表示できます。

![](./img/vscode-extension/open-dev-tools.png)

この状態で処理を実行すると、ブレークポイントを打った箇所で処理が停止しますが、
デバッグ画面はこのリポジトリを開いている VSCode であることに注意してください。

:::note
ブレークポイントが機能していない場合は、Developer: Reload Window コマンドを実行すると上手くいく可能性があります。
:::

### Hot Reload について

デバッグ中は Hot Reload が有効ですが、変更を適用するには Zenn の拡張がインストールされている VSCode ウィンドウで `Developer: Reload Window` を実行する必要があります。

## ビルド

`yarn package-web` コマンドを実行することで、`./dist` にビルド結果が生成されます。

## ブランチ

- `canary`: 開発用のブランチです。通常はこのブランチから新しいブランチを切って Pull Request を作成します。
- `main`: リリース用のブランチです。通常は`canary`ブランチからのみマージを受け付けます。このブランチに Pull Request をマージすると、`X.Y.Z`のようなバージョンが自動的にリリースされます。

## リリースについて

リリース手順は以下のようになります。

1. `canary` ブランチから `main` ブランチに対して Pull Request を作成します。
2. `release:patch`, `release:minor`, `release:major` のいずれかのラベルを Pull Request に付与します
3. ラベルが付与されるとバージョンアップコミットが Pull Request に追加されます
4. Pull Request をマージします ( ※ バージョンアップコミットが含まれていないとマージできません )
5. GitHub Actions によって、自動的に拡張がリリースされます
