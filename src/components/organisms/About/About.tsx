import Image from "next/image";

export default function About() {
    return (
      <div className="container mx-auto p-5">
        <h1 className="flex justify-center text-4xl p-10">〜About〜</h1>
        <div className="flex justify-center items-center gap-16">
          <Image src="/darts_throw_man.png" alt="" className="rounded-full border-black border" width={200} height={200} />
          <div className="space-y-3">
            <p className="text-gray-400">2005年 2月28日生まれ</p>
            <h1 className="text-3xl">難波 隼人</h1>
            <h2>青山学院大学 コミュニティ人間科学部 コミュニティ人間科学科在籍 27卒見込み</h2>
            <p>心理学を専攻。課外活動では、個人チーム問わず幅広い範囲で開発中。</p>
            <ul className="list-disc space-y-1">
              <li>2024.8.25	サポーターズ 技育キャンプハッカソン	優秀賞	Maclay Rush</li>
              <li>2024.9.15	サポーターズ 技育キャンプハッカソン	努力賞	文化祭サイト</li>
              <li>2024.10.20	Progateハッカソン	最優秀賞	Workspace 他</li>
            </ul>
          </div>
        </div>
      </div>
    );
}
