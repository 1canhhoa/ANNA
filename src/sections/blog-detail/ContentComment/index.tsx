'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import loginImg from '@/assets/images/img-register.jpg';
import { formatDate, formatDateTime } from '@/ultils/format-date';
import FormCommentBlog from '@/sections/blog-detail/FormComment';

interface IPropCommentItem {
  comment_ID: string;
  comment_author: string;
  comment_email: string;
  comment_content: string;
  comment_date: string;
  replies: any;
}
interface IPropComment {
  listComment: IPropCommentItem[];
  slug: string;
}
function ContentComment({ listComment, slug }: IPropComment) {
  const [replies, setReplies] = useState('');

  function CommonComment({
    dataComment,
    key,
  }: {
    dataComment: IPropCommentItem;
    key: number;
  }) {
    return (
      <div key={key} className="pl-8 py-[3rem] md:py-[1rem]">
        <div>
          <div className="flex items-center">
            <Image
              src={loginImg}
              alt=""
              quality={80}
              width={614}
              height={496}
              className="object-cover h-[40px] w-[40px]"
            />
            <div className="pl-8 md:pl-4">
              <p className="text-[2.5rem] md:text-base text-[#81c8c2] uppercase">
                {dataComment?.comment_author}
              </p>
              <p className="text-[2.5rem] md:text-base text-[#007bff]">
                {formatDate(dataComment?.comment_date)}
                {formatDateTime(dataComment?.comment_date)}
              </p>
            </div>
          </div>
          <div
            className="text-[3.5rem] md:text-base py-8 md:py-4 comment-content"
            dangerouslySetInnerHTML={{
              __html: `${dataComment?.comment_content}`,
            }}
          />
          <div
            role="button"
            className="text-[3.5rem] md:text-base flex justify-end text-[#007bff] border-b border-[#eeeeee] pb-[3rem] md:pb-[1rem] cursor-pointer"
            onClick={() => setReplies(dataComment?.comment_ID)}
          >
            Reply
          </div>
        </div>
        {replies === dataComment?.comment_ID && (
          <FormCommentBlog
            slug={slug}
            setReplies={setReplies}
            replies={replies}
          />
        )}
        <div className="">
          {dataComment?.replies?.map(
            (dataComment: IPropCommentItem, index: number) => (
              <CommonComment dataComment={dataComment} key={index} />
            )
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="md:max-w-[57.25rem] px-12 md:px-2 m-auto mb-20 md:mb-16">
      <h4 className="pt-[4rem] md:pt-8 text-[4.5rem] md:text-[2.25rem] font-semibold">
        Bình Luận
      </h4>
      <div>
        {listComment?.map((dataComment: IPropCommentItem, index: number) => (
          <CommonComment dataComment={dataComment} key={index} />
        ))}
      </div>
      {replies === '' && <FormCommentBlog slug={slug} />}
    </div>
  );
}

export default ContentComment;
