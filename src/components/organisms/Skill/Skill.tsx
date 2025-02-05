import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

  const reviews = [
    {
      name: "JavaScript",
      username: "@javascript",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "/logo-javascript.svg",
    },
    {
      name: "TypeScript",
      username: "@typescript",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "/typescript (1).svg",
    },
    {
      name: "React",
      username: "@react",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/react-2.svg",
    },
    {
      name: "Next.js",
      username: "@nextjs",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/next-js.svg",
    },
    {
      name: "Tailwindcss",
      username: "@tailwindcss",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/tailwind-css-2.svg",
    },
    {
      name: "Express.js",
      username: "@expressjs",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/expressjs-icon.svg",
    },
    {
      name: "Prisma",
      username: "@prisma",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/prisma-3.svg",
    },
    {
      name: "Firebase",
      username: "@firebase",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/firebase-1.svg",
    },
    {
      name: "Supabase",
      username: "@supabase",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/supabase-logo-icon.svg",
    },
    {
      name: "PostgreSQL",
      username: "@postsql",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/postgresql (1).svg",
    },
    {
      name: "bun",
      username: "@bun",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/bun-1.svg",
    },
    {
      name: "Postman",
      username: "@postman",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "/postman.svg",
    },
    {
      name: "Figma",
      username: "@figma",
      body: "I'm at a loss for words. This is amazing. I love it.",
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
      <h1 className="flex justify-center text-4xl">〜Skill〜</h1>
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
