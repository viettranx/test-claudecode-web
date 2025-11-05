import React from 'react';
import { Article } from '@/types/article';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <Link href={`/article/${article.id}`} className="block">
      <article className="bg-gray-800 rounded-2xl overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all duration-200 group cursor-pointer h-full">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-700">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Source and Time */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
              {article.source.logo && (
                <Image
                  src={article.source.logo}
                  alt={article.source.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              )}
            </div>
            <span className="text-gray-400 text-sm">{article.source.name}</span>
          </div>
          <span className="text-gray-500 text-xs">{formatDate(article.publishedAt)}</span>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {article.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-700">
          <div className="flex items-center space-x-4">
            {/* Upvotes */}
            <div className="flex items-center space-x-1 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 15l7-7 7 7"></path>
              </svg>
              <span className="text-sm">{article.upvotes}</span>
            </div>

            {/* Comments */}
            <div className="flex items-center space-x-1 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span className="text-sm">{article.comments}</span>
            </div>
          </div>

          {/* Read time */}
          <div className="text-gray-500 text-sm">
            {article.readTime} min read
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
}
