import Footer from '@/sections/main/components/footer/footer';
import Navbar from '@/sections/main/components/navbar/navbar';
import { postData } from '@/lib/post-data';
import { Toaster } from '@/components/ui/sonner';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  // const session = await getServerSession(NEXT_AUTH_OPTIONS);

  const bodyGetProductHeader: any = {
    url: `wp-json/custom/v1/categories`,
    method: 'get',
  };

  const dataListProductHeader = await postData(bodyGetProductHeader);

  // GET API cart
  // const bodyGetCart: any = {
  //   url: `/wp-json/woocart/v1/cart`,
  //   method: 'get',
  //   token: session?.user.token,
  // };
  //
  // const dataListCart =
  //   session !== null ? await fetchDataAuthen(bodyGetCart) : undefined;

  // GET INFOR USER
  // const bodyGetInfoUser: any = {
  //   url: `wp-json/custom-woo-api/v1/customer`,
  //   method: 'get',
  //   token: session?.user.token,
  // };
  //
  // const dataGetInforUser =
  //   session !== null ? await fetchDataAuthen(bodyGetInfoUser) : undefined;

  // GET HISTORY SEARCH
  const bodyHistorySearch: any = {
    url: `wp-json/customer-search/v1/get-search`,
    method: 'get',
  };

  const dataHistorySearch = await postData(bodyHistorySearch);
  // END
  return (
    <div>
      <main className="max-md:mt-0 md:mb-[7.5rem]">
        <Navbar
          // avatarUser={dataGetInforUser?.avatar_url}
          // dataListCart={dataListCart}
          dataListProductHeader={dataListProductHeader}
          dataHistorySearch={dataHistorySearch}
        />
        <div>{children}</div>
        <Toaster />
        <Footer dataListProduct={dataListProductHeader} />
      </main>
    </div>
  );
};

export default MainLayout;
