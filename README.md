# ARTERRA LP

静的ランディングページ（CMS なし・低コスト運用）。Next.js の Static Export でビルドし、Vercel でホスティングします。

## 技術スタック

- **Next.js 14** (App Router) + **Static Export**（`output: 'export'`）
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**（アニメーション）
- ビルド結果は静的 HTML/CSS/JS のみ（サーバー・CMS 不要）

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（http://localhost:3000）
npm run dev

# 本番用ビルド（out/ に静的ファイルが出力される）
npm run build
```

## Vercel へのデプロイ

### 1. GitHub でやること

1. **リポジトリを作成**
   - GitHub で New repository（例: `arterra-lp`）
   - ローカルで以下を実行してプッシュ:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: ARTERRA LP"
   git branch -M main
   git remote add origin https://github.com/<あなたのユーザー名>/arterra-lp.git
   git push -u origin main
   ```

2. **今後の更新**
   - 変更をコミットして `main` にプッシュすると、Vercel が自動で再デプロイします（Vercel と GitHub を連携している場合）。

### 2. Vercel でやること

1. [Vercel](https://vercel.com) にログイン（GitHub アカウントで連携すると楽です）。
2. **Import Project** で「Import Git Repository」を選び、上で作成した GitHub リポジトリを選択。
3. **Framework Preset**: Next.js が自動検出されます。そのままで OK。
4. **Build and Output Settings**（必要なら）:
   - Build Command: `npm run build`
   - Output Directory: `out`（Static Export のデフォルト）
5. **Deploy** をクリック。数分で `https://〇〇.vercel.app` の URL が発行されます。

### 3. 独自ドメインの接続（運用時）

1. Vercel のダッシュボードで対象プロジェクトを開く。
2. **Settings** → **Domains** を開く。
3. **Add** でドメイン名を入力（例: `arterra.com` や `www.arterra.com`）。
4. 表示される指示に従い、ドメイン側（レジストラや DNS 管理画面）で以下のいずれかを設定:
   - **A レコード**: `76.76.21.21` を指定（Vercel の案内に従ってください）
   - **CNAME**: `cname.vercel-dns.com` を指定（サブドメインの場合）
5. 反映まで数分〜最大 48 時間かかることがあります。Vercel が「Valid Configuration」と表示すれば接続完了です。

## ディレクトリ構成

```
ARTERRA/
├── app/
│   ├── layout.tsx    # 共通レイアウト・メタデータ
│   ├── page.tsx      # トップページ（アニメーション付き）
│   └── globals.css   # グローバルスタイル（Tailwind）
├── public/           # 画像など静的アセット（必要に応じて追加）
├── next.config.mjs   # output: 'export' で静的出力
├── tailwind.config.ts
├── vercel.json       # Vercel 用設定（output: out）
└── package.json
```

## 注意事項

- CMS は使わない想定のため、文言や画像の変更はコードを編集してから再デプロイしてください。
- ビルドは `npm run build` で実行され、`out/` に静的ファイルが出力されます。Vercel はこの `out` を配信します。
