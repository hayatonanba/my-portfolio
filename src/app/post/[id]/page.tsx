import { client, getBlogPost } from "@/app/libs/microcms";

// 記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // IDを取得
  const post = await getBlogPost(id);

  return (
    <main>
      <h1>{post.title}</h1>
    </main>
  );
}

// 静的パスを生成
 export async function generateStaticParams() {

  const contentIds = await client.getAllContentIds({ endpoint: 'blogs' });

  return contentIds.map((contentId) => ({
    id: contentId, // 各記事のIDをパラメータとして返す
  }));
 }
