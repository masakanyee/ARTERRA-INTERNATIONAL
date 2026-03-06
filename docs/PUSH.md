# GitHub へのプッシュ方法

このプロジェクトの変更を GitHub に反映する手順です。

## 前提

- リポジトリ: `https://github.com/masakanyee/ARTERRA-INTERNATIONAL.git`
- メインブランチ: `main`
- ターミナルまたは Cursor のターミナルで実行

---

## 基本的な流れ（3ステップ）

### 1. 変更をステージングする

```bash
cd /Users/masakameusa/Desktop/ARTERRA
git add -A
```

- `git add -A` … 変更・追加・削除したファイルをすべてステージング
- 特定のファイルだけ追加する場合: `git add ファイル名`

### 2. コミットする

```bash
git commit -m "変更内容を短く書く"
```

- `-m "..."` の部分は、何を変更したか分かるメッセージにすると後で見返しやすいです。

**例:**
- `git commit -m "トップのバナーを簡略化"`
- `git commit -m "Footer のリンクを更新"`

### 3. GitHub にプッシュする

```bash
git push origin main
```

- `origin` … リモート（GitHub）の名前
- `main` … プッシュ先のブランチ名

---

## よく使うコマンド一覧

| 目的 | コマンド |
|------|----------|
| 現在の状態を確認 | `git status` |
| 変更をすべてステージ | `git add -A` |
| コミット | `git commit -m "メッセージ"` |
| GitHub にプッシュ | `git push origin main` |
| リモートの最新を取得 | `git pull origin main` |

---

## 初回または別PCでクローンした場合

リポジトリを初めてクローンする場合:

```bash
git clone https://github.com/masakanyee/ARTERRA-INTERNATIONAL.git
cd ARTERRA-INTERNATIONAL
```

その後、ファイルを編集したら上記「基本的な流れ」の 1 → 2 → 3 を実行します。

---

## エラーが出たとき

- **`Permission denied` や認証エラー**  
  GitHub にログインしていない、または SSH/HTTPS の設定が必要です。  
  GitHub の **Settings → Developer settings → Personal access tokens** でトークンを作成し、パスワードの代わりに使う方法があります。

- **`Updates were rejected`**  
  リモートが先に更新されている場合があります。  
  先に `git pull origin main` で取り込んでから、再度 `git push origin main` を実行してください。

- **`git` コマンドがない**  
  [Git の公式サイト](https://git-scm.com/) からインストールしてください。
