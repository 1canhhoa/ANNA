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

  // GET HISTORY SEARCH
  const bodyHistorySearch: any = {
    url: `wp-json/customer-search/v1/get-search`,
    method: 'get',
  };

  const dataHistorySearch = await postData(bodyHistorySearch);
  // END

  return (
    <div>
      <main className="max-md:mt-0">
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
