# 🎬 AI映画レコメンドアプリ

> 「映画は見たい。でも、今じゃないんだよなぁー。」

そんな"映画を見ない理由"を、"今だから見たい映画"に変えるAI映画レコメンドアプリです。

ユーザーがその日の気分や状況を入力すると、AIが感情を解析し、今の気分にぴったりな映画を3作品提案します。

---

## コンセプト

映画を探すのではなく、

**"今のあなたに合う映画"を探す。**

映画を見る気が起きない日でも、AIが気分に寄り添っておすすめ作品を提案します。

---

## 主な機能

* 🎭 気分や状況を自由入力
* 🤖 AIによる気分解析
* 🎬 気分に合わせた映画を3作品提案
* 📝 作品ごとのおすすめ理由を表示
* ⚡ シンプルで直感的なUI

---

## 使用技術

### フロントエンド

* Next.js
* React
* TypeScript
* CSS

### AI

* OpenAI API

### 開発環境

* Docker
* Docker Compose

---

## ディレクトリ構成

```text
src/
├── app/
│   ├── api/
│   │   └── recommend/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── MoodForm.tsx
│   ├── MovieCard.tsx
│   └── MovieList.tsx
│
├── lib/
│   └── openai.ts
│
└── types/
    └── movie.ts
```

---

## 起動方法

### リポジトリを取得

```bash
git clone <repository-url>
cd <repository-name>
```

### 環境変数を設定

`.env.local`

```env
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

### Dockerで起動

```bash
docker compose up --build
```

ブラウザで以下へアクセスします。

```
http://localhost:3000
```

---

## 使い方

1. 今の気分を入力します。
2. 「映画を探す」を押します。
3. AIが気分を分析します。
4. あなたにおすすめの映画を3作品表示します。

入力例

```
今日は仕事で疲れたので、
何も考えずに笑える映画が見たい。
```

---

## 今後追加予定

* 映画ポスター表示
* YouTube予告編へのリンク
* Netflix・Amazon Primeなど配信サービス情報
* お気に入り機能
* 映画視聴履歴
* 気分タグの選択入力
* おすすめ理由の詳細表示
* レコメンド履歴の保存
