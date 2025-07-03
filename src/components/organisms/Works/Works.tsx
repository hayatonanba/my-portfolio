import { client } from "@/app/libs/microcms";
import type { Props } from "@/types/blogtype";
import Link from "next/link";
import { FiUsers } from "react-icons/fi";
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'blogs', 
  });
  return data.contents;
}

export default async function Works() {
  const posts = await getBlogPosts();
  dayjs.locale('ja')
    return (
    <div>
      <h1 id="Works" className="flex justify-center text-4xl p-4">🗂️Works</h1>
      <div className="max-w-7xl mx-auto p-8">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg" key={post.id}>
            <Link href={`/post/${post.id}`}>
              <img src={post.eyecatch.url} alt="" className="w-full h-48 object-cover overflow-hidden hover:scale-105 transition-transform" />  
              <div className="p-6">
                <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                <div className="flex items-center gap-4 text-gray-600">  
                  <small>
                    { post.isDeployed ? "デプロイ済" : "未デプロイ" }
                  </small>
                  <small className="flex items-center gap-2"><FiUsers />{post.members}</small>
                  <small>更新日: {dayjs(post.publishedAt).format('YYYY年M月D日')}</small>
                </div>
              </div>
            </Link> 
          </div>
        ))}
      </ul>
      </div>
    </div>
    );
}
