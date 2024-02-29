import CreateAddress from '@/sections/dashboard-user/create-address';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { fetchDataAuthen } from '@/lib/post-data';

const CreateAddressPage = async ({ params: { slug } }: any) => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  const bodyGetDetailAddress: any = {
    url: `wp-json/shipping/v1/get-shipping-address/${slug}`,
    method: 'get',
    token: session?.user?.token,
  };

  const dataDetailAddress: any = await fetchDataAuthen(bodyGetDetailAddress);
  return (
    <CreateAddress
      slug={slug}
      dataDetailAddress={dataDetailAddress?.address_details}
    />
  );
};

export default CreateAddressPage;
