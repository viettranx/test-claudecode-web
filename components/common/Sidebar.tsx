"use client";

import React from 'react';
import tagsData from '@/data/tags.json';

export default function Sidebar() {
  return (
    <aside className="hidden xl:block w-80 space-y-6">
      {/* Popular Tags */}
      <div className="bg-gray-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-4">Popular Tags</h2>
        <div className="space-y-2">
          {tagsData.map((tag) => (
            <button
              key={tag.id}
              className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-left group"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: tag.color }}
                ></div>
                <span className="text-gray-300 group-hover:text-white">#{tag.name}</span>
              </div>
              <svg
                className="w-4 h-4 text-gray-500 group-hover:text-gray-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-4">Filters</h2>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500 focus:ring-offset-gray-800"
              defaultChecked
            />
            <span className="text-gray-300 group-hover:text-white">Tech news</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500 focus:ring-offset-gray-800"
              defaultChecked
            />
            <span className="text-gray-300 group-hover:text-white">Tutorials</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500 focus:ring-offset-gray-800"
            />
            <span className="text-gray-300 group-hover:text-white">Podcasts</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500 focus:ring-offset-gray-800"
            />
            <span className="text-gray-300 group-hover:text-white">Videos</span>
          </label>
        </div>
      </div>

      {/* About */}
      <div className="bg-gray-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-3">About daily.dev</h2>
        <p className="text-gray-400 text-sm mb-4">
          Your personalized developer news platform. Get the latest tech articles, tutorials, and resources.
        </p>
        <div className="space-y-2">
          <a href="#" className="block text-purple-400 hover:text-purple-300 text-sm">
            About us
          </a>
          <a href="#" className="block text-purple-400 hover:text-purple-300 text-sm">
            Privacy policy
          </a>
          <a href="#" className="block text-purple-400 hover:text-purple-300 text-sm">
            Terms of service
          </a>
        </div>
      </div>
    </aside>
  );
}
