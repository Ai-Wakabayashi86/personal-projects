import { MoodForm } from "@/components/MoodForm";

export default function Home() {
  return (
    <main className="container">
      <h1>今じゃないんだよなぁー</h1>

      <p className="description">
        今の気分を教えてください。
        <br />
        AIがあなたにぴったりな映画を3作品紹介します。
      </p>

      <MoodForm />
    </main>
  );
}