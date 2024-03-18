import BannerBlogDetail from '@/sections/blog-detail/Banner';
import React from 'react';
import './style.css';
import ContentBlogDetail from '@/sections/blog-detail/Content';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import SectionHome from '@/sections/home/view/SectionHome';
import BlogOther from '@/sections/blog-detail/BlogOther';
import ContentComment from '@/sections/blog-detail/ContentComment';

interface IpropBlogDetail {
  slug: string;
}
const BlogDetail = async ({ slug }: IpropBlogDetail) => {
  const listBlog = fetchDataRest('GET', `wp/v2/posts?slug=${slug}`);
  const listComment = fetchDataRest(
    'GET',
    `custom-comment/v1/get-comments/${slug}`
  );

  const [listBlogRes, listCommentRes] = await Promise.all([
    listBlog,
    listComment,
  ]);

  return (
    <div>
      <BannerBlogDetail />
      <ContentBlogDetail listBlog={listBlogRes[0]} />
      <BlogOther />
      <ContentComment listComment={listCommentRes?.comments} slug={slug} />
      <SectionHome />
    </div>
  );
};

export default BlogDetail;
