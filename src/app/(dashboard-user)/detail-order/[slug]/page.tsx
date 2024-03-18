import DetailOrder from '@/sections/dashboard-user/detail-order';

const DetailOrderPage = async ({ params: { slug } }: any) => {
  return (
    <div className="h-full">
      <DetailOrder slug={slug} />
    </div>
  );
};

export default DetailOrderPage;
