// src/pages/index.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>タイ県名学習アプリ</h1>

      <nav>
        <ul>
          <li>
            <Link href="/study">学習</Link>
          </li>
          <li>
            <Link href="/quiz">確認クイズ</Link>
          </li>
          <li>
            <Link href="/progress">学習状況</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}