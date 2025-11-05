import React from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '@/types/article';

interface FeedProps {
  articles: Article[];
}

export default function Feed({ articles }: FeedProps) {
  return (
    <div className="flex-1">
      {/* Feed Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-white text-2xl font-bold">My Feed</h1>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Latest
          </button>
          <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
            Top
          </button>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
          Load more articles
        </button>
      </div>
    </div>
  );
}
