import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

  const reviews = [
    {
      name: "JavaScript",
      username: "@javascript",
      body: "私の初めてのプログラミング言語。これからも漠然と好き。",
      img: "/logo-javascript.svg",
    },
    {
      name: "TypeScript",
      username: "@typescript",
      body: "型づけなんて最初はめんどいじゃんと思いきや、超大事だった。自覚した時成長したと思った。",
      img: "/typescript (1).svg",
    },
    {
      name: "React",
      username: "@react",
      body: "hooksとかの理解が初学者の身でもスラスラ入ってきた。好き。",
      img: "/react-2.svg",
    },
    {
      name: "Next.js",
      username: "@nextjs",
      body: "一番好きな技術。お前と共に俺のエンジニア人生は始まったし続いていく予定。",
      img: "/next-js.svg",
    },
    {
      name: "Tailwindcss",
      username: "@tailwindcss",
      body: "見ずらいのもわかる。物心ついた時からこれだったので耐性持ち。",
      img: "/tailwind-css-2.svg",
    },
    {
      name: "Express.js",
      username: "@expressjs",
      body: "APIの基礎を学ぶ時にお世話になった。honoとか随所で面影を感じる。",
      img: "/expressjs-icon.svg",
    },
    {
      name: "Prisma",
      username: "@prisma",
      body: "最初に触れたORMであり、今頑張りどころのコンテンツ。",
      img: "/prisma-3.svg",
    },
    {
      name: "Firebase",
      username: "@firebase",
      body: "NoSQLとRDBMSの差異を調べるときに使用。認証の設定のしやすさは度肝を抜いた覚えあり。",
      img: "/firebase-1.svg",
    },
    {
      name: "Supabase",
      username: "@supabase",
      body: "とりあえずアプリ開発で使う便利でお気に入りのBaaS。",
      img: "/supabase-logo-icon.svg",
    },
    {
      name: "PostgreSQL",
      username: "@postsql",
      body: "初めてのRDBMS。SQL文も基礎理解のためにそこそこ頑張って書いた思い出。",
      img: "/postgresql (1).svg",
    },
    {
      name: "bun",
      username: "@bun",
      body: "npmより爆速と聞いてみたらすごい早い。ただlockがバイナリでコンフリクトの時大変だった。",
      img: "/bun-1.svg",
    },
    {
      name: "Postman",
      username: "@postman",
      body: "swaggerUIを使う前によく使っていた記憶。",
      img: "/postman.svg",
    },
    {
      name: "Figma",
      username: "@figma",
      body: "プラグインの知識等を身につけていくうちに知識もついて、楽しくデザインできるので好き。",
      img: "/figma-icon.svg",
    },
  ];
  
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  
  const ReviewCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };
  
  export default function Skill() {
    return (
    <div className="p-7">
      <h1 id="Skill" className="flex justify-center text-4xl">💻Skill</h1>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
    );
  }
