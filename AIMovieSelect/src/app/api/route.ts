import { NextResponse } from "next/server";
import { Movie } from "@/types/movie";

export async function POST(request: Request) {
  const body = await request.json();
  const mood = body.mood;

  if (!mood || typeof mood !== "string") {
    return NextResponse.json(
      { error: "気分が入力されていません。" },
      { status: 400 }
    );
  }

  const movies: Movie[] = [
    {
      title: "シェフ 三ツ星フードトラック始めました",
      genre: "ヒューマン / コメディ",
      reason: "疲れた日に、明るく前向きな気持ちを取り戻しやすい作品です。",
    },
    {
      title: "リトル・ミス・サンシャイン",
      genre: "ロードムービー / コメディ",
      reason: "完璧じゃなくても大丈夫、と思わせてくれる温かい映画です。",
    },
    {
      title: "最強のふたり",
      genre: "ヒューマン / コメディ",
      reason: "重すぎず、笑いと優しさのバランスがちょうどいい作品です。",
    },
  ];

  return NextResponse.json({ movies });
}