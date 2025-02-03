import { client } from "./libs/microcms";
import type { Props } from "@/types/blogtype";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import Works from "@/components/organisms/Works/Works";
import About from "@/components/organisms/About/About";
import { TypingAnimation } from "@/components/ui/typing-animation";
import Skill from "@/components/organisms/Skill/Skill";

// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'blogs', 
    queries: {
      limit: 5,  // 最新の5件を取得
    },
  });
  return data.contents;
}

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <div>
      <Header />
        <main>
          <div className="bg-slate-100 space-y-10 p-56">
            <TypingAnimation className="flex justify-center text-8xl font-bold">Hi there 👋</TypingAnimation>
            <TypingAnimation className="flex justify-center text-5xl">I love doing and learning programming.</TypingAnimation>
          </div>
          <About />
          <Skill />
          <Works />
          {/* <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/post/${post.id}`}>
                  <Image src={post.eyecatch.url} width={250} height={150} alt="" />
                  <h1>{post.title}</h1>
                </Link>
                <small>{post.publishedAt}</small>
              </li>
            ))}
          </ul> */}
        </main>
      <Footer />
    </div>
  );
}