# zenn-markdown-html

zenn-markdown-html は、Zenn独自の記法を含む markdown を HTML に変換するためのパッケージです。

サポートするmarkdown記法は [Markdown記法一覧](https://zenn.dev/zenn/articles/markdown-guide) を参照してください。

このパッケージは2つのインターフェイスを提供します。

- `markdownToHtml`: Zennの記事、本、コメントなどで使用するHTMLに変換します。
- `markdownToSimpleHtml`: Publicationの定型メッセージなど、限られた装飾のみをサポートするHTMLに変換します。

## 構成

:::info
以下の説明は、`markdownToHtml` を対象とします。
:::

主な変換プロセスは以下の通りです。

1. [markdown-it](https://github.com/markdown-it/markdown-it) で markdown を HTML に変換する
2. [prism.js](https://prismjs.com/) でコードブロックをハイライトする
3. [sanitize-html](https://github.com/apostrophecms/sanitize-html) で HTML をサニタイズする

### markdown-it

プラグインについて説明します。

- `mdBr`: `<br>` の使用を許可します。
- `mdRendererFence`: prism.jsによりコードブロックをハイライトします。ただしlangが`mermaid`の場合は、mermaidの埋め込み用iframeに変換します。
- `markdownItImSize`: markdown-it-imsize をforkしたものです。イメージのサイズを指定できるように拡張しています。
- `mdCustomBlock`: markdown-it-custom-block をforkしたものです。`@[tag](arg)`形式の埋め込みをiframeに変換します。
- `mdContainer`: markdown-it-container をforkしたものです。`<details> ~ <summary>` や `:::message` などの記法をサポートします。
- `mdFootnote`: markdown-it-footnote です。注釈の記法をサポートします。
- `mdTaskLists`: markdown-it-task-lists です。タスクリスト形式の記法をサポートします。
- `mdInlineComments`: markdown-it-inline-comments です。インラインコメントをサポートします。
- `mdLinkAttributes`: markdown-it-link-attributes です。リンクに属性を追加しています。
- `markdownItAnchor`: markdown-it-anchor です。見出しにアンカーを追加しています。
- `mdKatex`: markdown-it-mdKatex をforkしたものです。KaTeXの記法を zenn-embed-elements でレンダリングできように加工しています。
- `mdLinkifyToCard`: 埋め込みに対応しているURLへのリンクを埋め込み用のiframeに変換します。

### prism.js

プラグインについて説明します。

- `enableDiffHighlight`: diff構文をサポートします。

### sanitize-html

現在、markdown-itにより `<br>` 以外のHTMLタグは全てサニタイズしています。`<br>` はmarkdown-itのプラグインを書いて特別に許可していますが、この方式で他のHTMLタグもサポートするのは難しいため、将来的にはmarkdown-itでのサニタイズをやめて、sanitize-htmlでサニタイズを行うようにする予定です。

その前段として、現状ではmarkdown-itおよびそのプラグインで変換されたHTMLだけを許可するように設定しています。

## 開発環境

[zenn-cli](./zenn-cli.md) で動作確認します。

## ビルド

`yarn build` で実行します。

### Babelの使用について

zenn-markdown-html では、`PrismJS` の言語プラグインを予め全て読み込むために `babel-plugin-prismjs` を使用しているため、ソースコードのビルドには `babel` を使用し、型ファイル(*.d.ts)のビルドには `tsc` を使用してビルドしています。

## テスト

`yarn test` で実行します。

## lint

`yarn lint:fix` で実行します。

## 開発方針

### カスタムブロックによる埋め込み

Markdownにカスタムブロックを追加し、外部ページの埋め込みを追加することができます（例: `@[youtube](youtube-video-id)`）新しい埋め込みを追加する場合は、以下のガイドラインに従ってください。

- iframeで埋め込みができること。ただし、外部から提供されているscriptを使ってiframeを生成するのはセキュリティ上の理由から許可していません。
- 埋め込みの対象となるサービスが広く普及しており、継続的に安定して運営されることが見込まれること。

### Link Cardの埋め込み

本文中にURLがある場合、それをLink Cardとして埋め込みで表示します。なお、一部のメジャーなサービス（Twitter、Youtube、など）は、Link Cardではなくサービスに対応するiframeの埋め込みに変換しています。Link Cardおよびiframeの埋め込みの変換に対応する外部サービスの基準は、現在対応しているサービスと同等のものとします。
