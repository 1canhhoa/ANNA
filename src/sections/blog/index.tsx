'use client';

import BannerBlog from '@/sections/blog/Banner';
import ServiceBlog from '@/sections/blog/Service';
import SectionHome from '@/sections/home/view/SectionHome';
import './style.css';
import ListBlog from '@/sections/blog/ListBlog';
import { baseUrl, fetchDataRest } from '@/lib/fetch-data-rest';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

interface IProps {
  listPostRes?: any;
  totalPostRes?: any;
}
function Blog(props: IProps) {
  const { listPostRes, totalPostRes } = props;

  // const listBlog = await fetchDataRest('GET', 'post/v1/posts');
  const [listBlog, setListBlog] = useState<any>({
    item: [],
  });
  const [totalBlog, setTotalBlog] = useState(0);
  const [page, setPage] = useState(1);
  const getListProduct = useSWR(
    `${baseUrl}post/v1/posts?per_page=9&page=${page}`,
    () =>
      fetchDataRest('GET', `post/v1/posts?per_page=9&page=${page}`).then(
        (res: any) => setListBlog(res)
      ),{
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false
      }
  );
  const getTotal = useSWR(`${baseUrl}post/v1/posts`, () =>
    fetchDataRest('GET', `post/v1/posts`).then((res: any) =>
      setTotalBlog(res?.countItem)
    ),{
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false
    }
  );

  useEffect(() => {
    getListProduct.mutate();
    getTotal.mutate();
  }, [page]);
  return (
    <div>
      <BannerBlog />
      <div className="container-custom">
        <ServiceBlog
          blogItemFirst={
            listBlog?.item && listBlog?.item.length > 0 ? listBlog?.item[0] : []
          }
        />
        <ListBlog
          listBlog={listBlog?.item}
          setPage={setPage}
          page={page}
          totalBlog={totalBlog}
        />
      </div>
      <SectionHome />
    </div>
  );
}

export default Blog;
