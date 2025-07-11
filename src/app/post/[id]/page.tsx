import { client, getBlogPost } from "@/app/libs/microcms";
import parse from "html-react-parser"
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub, FiUsers } from "react-icons/fi";
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

// 記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // IDを取得
  const post = await getBlogPost(id);
    dayjs.locale('ja')

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="p-6 border-b border-gray-100">
        <Link href="/" className="flex items-center text-sm hover:text-gray-600">
          <FaArrowLeft className="w-4 h-4 mr-2" />
          作品一覧に戻る
        </Link>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-16">
          <h1 className="text-3xl font-medium mb-4">{post.title}</h1> 
          <p className="text-gray-600 mb-6 flex items-center flex-wrap gap-x-6">
            <span>{dayjs(post.publishedAt).format('YYYY年M月D日')} | Webデザイン・開発</span>
            <span className="inline-flex items-center">
              <FiUsers className="w-4 h-4 mr-1" />
              開発メンバー {post.members}名
            </span>
          </p>
          
          <div className="flex gap-4">
            { post.isDeployed ? 
              <a 
                href={post.siteLink}
                className="inline-flex items-center px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors rounded-sm"
              >
                <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                サイトを見る
              </a> : "" 
            }
            <a
              href={post.githubLink}
              className="inline-flex items-center px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors rounded-sm"
            >
              <FiGithub className="w-4 h-4 mr-2" />
              ソースコード
            </a>
          </div>
        </header>   
        <div className="mb-16">
          <img
            src={post.eyecatch.url}
            alt={post.title}
            className="w-full h-[250px] md:h-[350px] lg:h-[500px] object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <section className="mb-12">
                <h2 className="text-xl font-medium mb-4">プロジェクト概要</h2>
                <div className="text-gray-800 leading-relaxed">
                  {parse(post.content)}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-xl font-medium mb-4">がんばりポイント</h2>
                <div className="text-gray-800 space-y-2">
                  {parse(post.attemptPoint)}
                </div>
              </section>
          </div>

          <div>
            <section className="mb-8">
              <h2 className="text-xl font-medium mb-4">使用技術</h2>
              <img src={post.tech.url} alt="画像が読み込めません" />
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">担当領域</h2>
              <ul className="space-y-2 text-gray-800">
                {parse(post.isAssign)}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

// 静的パスを生成
 export async function generateStaticParams() {

  const contentIds = await client.getAllContentIds({ endpoint: 'blogs' });

  return contentIds.map((contentId) => ({
    id: contentId, // 各記事のIDをパラメータとして返す
  }));
 }
