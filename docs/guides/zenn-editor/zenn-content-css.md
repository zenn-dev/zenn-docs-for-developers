# zenn-content-css

zenn-content-css は、 zenn-markdown-html で markdown から変換された HTML に適用するためのCSSです。

以下のように、`<div class="znc">` で囲まれたHTMLにCSSを適用します。

```html
<div class="znc">
  <!-- html parsed from markdown comes here. -->
</div>
```

## 構成

[Sass](https://sass-lang.com/) で記述されたプロジェクトです。エントリーポイントは `./src/index.scss` です。

## 開発環境

`pnpm dev` を実行することで、変更を検出して自動的に `./lib/index.css` にビルドファイルが生成されます。

## ビルド

`pnpm build` で実行します。

## テスト

未実装。

## lint

未実装。
