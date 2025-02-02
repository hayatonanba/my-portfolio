import Link from "next/link";
import { client } from "./libs/microcms";
import Image from "next/image";
import type { Props } from "@/types/blogtype";
import Header from "@/components/organisms/Header/Header";

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
    <main>
      <Header />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <Image src={post.eyecatch.url} width={500} height={350} alt="" />
              {post.title}
            </Link>
            <small>{post.publishedAt}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}