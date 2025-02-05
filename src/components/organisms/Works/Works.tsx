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
    <div>
      <h1 className="flex justify-center text-4xl p-4">〜Works〜</h1>
      <div className="max-w-7xl mx-auto p-8">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg" key={post.id}>
            <Link href={`/post/${post.id}`}>
              <img src={post.eyecatch.url} alt="" className="w-full h-48 object-cover overflow-hidden hover:scale-105 transition-transform" />  
              <div className="p-6">
                <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                <small className="text-gray-600">{post.publishedAt}</small>
              </div>
            </Link> 
          </div>
        ))}
      </ul>
      </div>
    </div>
    );
}
