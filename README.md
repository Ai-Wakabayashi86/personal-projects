# Thai Prefecture Learning App 🇹🇭

タイの県名・地域・特徴を学習するためのWebアプリです。

タイの各県について学習し、クイズで理解度を確認しながら学習を進めることができます。

---

## 概要

本アプリはタイの県に関する知識を効率的に学習することを目的としています。

学習ページでは県ごとの基本情報を確認でき、確認クイズによって学習内容の定着を支援します。

また、県ごとに色分けされた地図を表示し、地理的な位置関係も合わせて学習できます。

---

## 主な機能

### 学習機能

* 県名（日本語・タイ語・英語）の表示
* 地域区分の表示
* 地形情報の表示
* 特産品の表示
* 特徴・観光資源の表示
* 県ごとの地図表示

### クイズ機能

* 県名当てクイズ
* 学習内容の確認
* 正解数・不正解数の記録

### 学習状況管理

* 学習済み県の管理
* 正解数・不正解数の集計
* 学習進捗の表示
* 学習状況のリセット

---

## 技術スタック

* Next.js
* React
* TypeScript
* CSS
* Docker
* Docker Compose

---

## ディレクトリ構成

```text
src
├─ components
│   ├─ Layout.tsx
│   ├─ ProvinceCard.tsx
│   ├─ QuizCard.tsx
│   └─ ThailandMap.tsx
│
├─ data
│   ├─ north.ts
│   ├─ northeast.ts
│   ├─ central.ts
│   ├─ east.ts
│   ├─ south.ts
│   └─ provinces.ts
│
├─ pages
│   ├─ index.tsx
│   ├─ study.tsx
│   ├─ quiz.tsx
│   ├─ progress.tsx
│   └─ _app.tsx
│
├─ hooks
│   └─ useProgress.ts
│
├─ styles
│   └─ globals.css
│
└─ types
    └─ province.ts

public
└─ maps
    └─ *.svg
```

---

## 起動方法

### Dockerを使用する場合

```bash
docker compose up --build
```

起動後、以下へアクセスします。

```text
http://localhost:3000
```

---

## 学習対象地域

現在収録している地域

* 北部
* 東北部（イサーン）
* 中部
* 東部
* 南部

合計21県を収録しています。

今後、タイ全77県への拡張を予定しています。

---

## 今後の予定

* タイ全77県対応
* 地図クイズ機能
* 地域別学習モード
* 苦手県復習モード
* 学習履歴分析
* モバイルUI改善

---

## ライセンス

個人学習・教育目的で利用できます。
