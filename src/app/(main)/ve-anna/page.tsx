import AboutUs from '@/sections/about-us';
import { postData } from '@/lib/post-data';

const AboutUsPage = async () => {
  const bodyGetAboutUs: any = {
    url: `wp-json/acf/v3/posts/1094?_fields=acf`,
    method: 'get',
  };

  const dataGetAboutus = await postData(bodyGetAboutUs);

  return <AboutUs dataGetAboutus={dataGetAboutus} />;
  // return <div>sadasds</div>
};

export default AboutUsPage;
