import { client } from "@/app/libs/microcms";
import type { Props } from "@/types/blogtype";
import Image from "next/image";
import Link from "next/link";

async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'blogs', 
    queries: {
      limit: 5,  // 最新の5件を取得
    },
  });
  return data.contents;
}

export default async function Works() {
  const posts = await getBlogPosts();
    return (
      <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post/${post.id}`}>
            <Image src={post.eyecatch.url} width={250} height={150} alt="" />
            <h1>{post.title}</h1>
          </Link>
          <small>{post.publishedAt}</small>
        </li>
      ))}
    </ul>
    );
}
