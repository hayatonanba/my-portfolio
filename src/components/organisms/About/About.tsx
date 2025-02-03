import Image from "next/image";

export default function About() {
    return (
      <div className="container mx-auto">
        <h1 className="flex justify-center text-4xl p-4">〜About〜</h1>
        <div className="flex justify-center items-center gap-16">
          <Image src="/darts_throw_man.png" alt="" className="rounded-full border-black border" width={200} height={200} />
          <div className="space-y-3">
            <p className="text-gray-400">2005年 2月 28日生まれ</p>
            <h1 className="text-3xl">難波 隼人</h1>
            <h2>青山学院大学 コミュニティ人間科学部 コミュニティ人間科学科</h2>
            <p>心理学を専攻。課外活動では、個人チーム問わず幅広い範囲で開発中。</p>
            <ul className="list-disc space-y-1">
              <li>2020年 4月 愛知県 私立中部大学第一高等学校 入学</li>
              <li>2023年 3月 愛知県 私立中部大学第一高等学校 卒業</li>
              <li>2023年 4月 青山学院大学 入学</li>
              <li>2027年 3月 青山学院大学 卒業見込み</li>
            </ul>
          </div>
        </div>
      </div>
    );
}
