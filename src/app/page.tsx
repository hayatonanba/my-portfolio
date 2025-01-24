import Link from "next/link";
import { client } from "./libs/microcms";

type Props = {
  id: string,
  title: string,
  content: string,
}

// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'blogs', // 'blog'はmicroCMSのエンドポイント名
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
      <h1>ブログ記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blogs/${post.id}`}> {/* 記事へのリンクを生成 */}
              {post.title} {/* タイトルを表示 */}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}