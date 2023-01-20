# zenn-embed-elements

zenn-embed-elements は、 markdown のZenn独自の埋め込み要素をHTMLに変換するためのパッケージです。現在はKaTeXによる数式のレンダリングのためにのみ利用しており、それ以外の埋め込みはembed.zenn.studioを利用しています。

<details>
<summary>レンダリングの例</summary>

ユーザーが入力したmarkdown:

```markdown
$$
e^{i\theta} = \cos\theta + i\sin\theta
$$
```

zenn-markdown-html で変換された HTML:

```html
<section class="zenn-katex">
  <eqn>
    <embed-katex display-mode="1">e^{i\theta} = \cos\theta + i\sin\theta</embed-katex>
  </eqn>
</section>
```

zenn-embed-elements で変換された HTML:

```html
<section class="zenn-katex">
  <eqn>
    <embed-katex display-mode="1">
      <span class="katex-display">
        <span class="katex">
          <span class="katex-mathml">
            <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
              <semantics>
                <mrow>
                  <msup>
                    <mi>e</mi>
                    <mrow>
                      <mi>i</mi>
                      <mi>θ</mi>
                    </mrow>
                  </msup>
                  <mo>=</mo>
                  <mi>cos</mi>
                  <mo>⁡</mo>
                  <mi>θ</mi>
                  <mo>+</mo>
                  <mi>i</mi>
                  <mi>sin</mi>
                  <mo>⁡</mo>
                  <mi>θ</mi>
                </mrow>
                <annotation encoding="application/x-tex">
                  e^{i\theta} = \cos\theta + i\sin\theta
                </annotation>
              </semantics>
            </math>
          </span>
          <span class="katex-html" aria-hidden="true">
            <span class="base">
              <span class="strut" style="height: 0.899108em; vertical-align: 0em;">
              </span>
              <span class="mord">
                <span class="mord mathnormal">e</span>
                <span class="msupsub">
                  <span class="vlist-t">
                    <span class="vlist-r">
                      <span class="vlist" style="height: 0.899108em;">
                        <span class="" style="top: -3.113em; margin-right: 0.05em;">
                          <span class="pstrut" style="height: 2.7em;">
                          </span>
                          <span class="sizing reset-size6 size3 mtight">
                            <span class="mord mtight">
                              <span class="mord mathnormal mtight">i</span>
                              <span class="mord mathnormal mtight" style="margin-right: 0.02778em;">θ</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span class="mspace" style="margin-right: 0.277778em;">
              </span>
              <span class="mrel">=</span>
              <span class="mspace" style="margin-right: 0.277778em;">
              </span>
            </span>
            <span class="base">
              <span class="strut" style="height: 0.77777em; vertical-align: -0.08333em;">
              </span>
              <span class="mop">cos</span>
              <span class="mspace" style="margin-right: 0.166667em;"></span>
              <span class="mord mathnormal" style="margin-right: 0.02778em;">θ</span>
              <span class="mspace" style="margin-right: 0.222222em;"></span>
              <span class="mbin">+</span>
              <span class="mspace" style="margin-right: 0.222222em;"></span>
            </span>
            <span class="base">
              <span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span>
              <span class="mord mathnormal">i</span>
              <span class="mspace" style="margin-right: 0.166667em;"></span>
              <span class="mop">sin</span>
              <span class="mspace" style="margin-right: 0.166667em;"></span>
              <span class="mord mathnormal" style="margin-right: 0.02778em;">θ</span>
            </span>
          </span>
        </span>
      </span>
    </embed-katex>
  </eqn>
</section>
```

実際に表示される内容:

![](/img/katex_example.png)

</details>


## 構成

`./src/index.ts` がエントリーポイントです。

## 開発環境

[zenn-cli](./zenn-cli.md) で動作確認します。

## ビルド

`pnpm build` で実行します。

## テスト

未実装。

## lint

`pnpm lint:fix` で実行します。
