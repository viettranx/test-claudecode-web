import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import articlesData from '@/data/articles.json';
import { Article } from '@/types/article';

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const articles = articlesData as Article[];
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const articles = articlesData as Article[];
  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .filter((a) => a.tags.some((tag) => article.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header with back button */}
      <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
              <span>Back to Feed</span>
            </Link>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">
                daily.dev
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-600/20 text-purple-400 text-sm px-4 py-1 rounded-full border border-purple-500/30"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  {article.source.logo && (
                    <Image
                      src={article.source.logo}
                      alt={article.source.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  )}
                </div>
                <span className="font-medium">{article.source.name}</span>
              </div>
              <span>•</span>
              <time>{formatDate(article.publishedAt)}</time>
              <span>•</span>
              <span>{article.readTime} min read</span>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              {article.description}
            </p>
          </div>

          {/* Article Actions */}
          <div className="flex items-center justify-between py-6 border-y border-gray-800 mb-8">
            <div className="flex items-center space-x-6">
              {/* Upvote Button */}
              <button className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors group">
                <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-purple-600/20 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 15l7-7 7 7"></path>
                  </svg>
                </div>
                <span className="font-bold text-lg">{article.upvotes}</span>
              </button>

              {/* Comment Button */}
              <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-blue-600/20 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <span className="font-bold text-lg">{article.comments}</span>
              </button>
            </div>

            {/* Share and Bookmark */}
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <div className="text-gray-300 space-y-6">
              <p>
                This is where the full article content would be displayed. In a real
                application, you would fetch the complete article content from your API
                or CMS.
              </p>
              <p>
                The article discusses important concepts and best practices that every
                developer should know. It covers various aspects of modern web
                development and provides practical examples.
              </p>
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">
                Key Takeaways
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Understanding the fundamentals is crucial for success</li>
                <li>Always follow best practices and industry standards</li>
                <li>Keep learning and stay updated with the latest trends</li>
                <li>Practice regularly to improve your skills</li>
              </ul>
              <p>
                Continue reading to learn more about these concepts and how to apply
                them in your projects.
              </p>
            </div>
          </div>

          {/* Original Article Link */}
          <div className="mb-12">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
            >
              <span>Read original article</span>
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div>
              <h2 className="text-white text-2xl font-bold mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/article/${related.id}`}
                    className="bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all group"
                  >
                    <div className="relative h-40 w-full bg-gray-700">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold line-clamp-2 mb-2 group-hover:text-purple-400 transition-colors">
                        {related.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <span>{related.source.name}</span>
                        <span className="mx-2">•</span>
                        <span>{related.readTime} min</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}
