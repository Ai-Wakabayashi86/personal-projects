// src/components/Layout.tsx

import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <h1>タイ県名学習アプリ</h1>

        <nav>
          <Link href="/">ホーム</Link>{" "}
          <Link href="/study">学習</Link>{" "}
          <Link href="/quiz">確認クイズ</Link>{" "}
          <Link href="/progress">学習状況</Link>
        </nav>
      </header>

      <hr />

      <main>{children}</main>
    </div>
  );
}