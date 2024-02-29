import Blog from '@/sections/blog';
import React from 'react';
import { fetchDataRest } from '@/lib/fetch-data-rest';

const BlogPage = async () => {
  const listPost = fetchDataRest('GET', `post/v1/posts?per_page=9&page=1`);
  const totalPost = fetchDataRest('GET', `post/v1/posts`);

  const [listPostRes, totalPostRes] = await Promise.all([listPost, totalPost]);
  return <Blog listPostRes={listPostRes} totalPostRes={totalPostRes} />;
};

export default BlogPage;
