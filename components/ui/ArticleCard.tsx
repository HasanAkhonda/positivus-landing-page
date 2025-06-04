'use client';

import React from 'react';
import ArticleIcon from '../Icons/ArticleIcon.svg';  
import VideoIcon from '../Icons/VideoIcon.svg';      
import Link from 'next/link';

type Article = {
  type: 'Article' | 'Video';
  pubDate: string;
  title: string;
  summary: string;
  author: string;
  authImage: string;
  slug: string;
};

interface Props {
  article: Article;
}

// Format date (use your own logic or a library like date-fns)
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <div className="border-t border-black/10 hover:border-black transition-all duration-200">
      <article className="p-6">
        <div className="flex justify-between items-center mb-5 text-gray-500">
          <span className="bg-green text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
            {article.type === 'Article' ? <ArticleIcon /> : <VideoIcon />}
            <span className="ml-1">{article.type}</span>
          </span>
          <span className="text-sm">{formatDate(article.pubDate)}</span>
        </div>

        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {article.title}
        </h2>

        <p className="mb-5 font-light text-gray-500 whitespace-pre-line">
          {article.summary}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              className="w-7 h-7 rounded-full"
              src={article.authImage}
              alt={`${article.author} cover`}
            />
            <span className="font-medium">{article.author}</span>
          </div>

          <Link href={`/articles/${article.slug}`} className="inline-flex items-center font-medium text-black hover:text-green">
            Read more
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
