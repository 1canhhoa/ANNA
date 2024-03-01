import Statistics from '@/sections/httt/components/statistics';
import Action from './components/action';
import Banner from './components/banner';
import Video from './components/video';
import SectionHome from '@/sections/home/view/SectionHome';
import Share from '@/sections/httt/components/share';
import ThanksForJoin from '@/sections/httt/components/thanksforjoin';
import About from '@/sections/httt/components/about';
import Story from '@/sections/httt/components/story';
import Partner from '@/sections/httt/components/partner';
import LovingConnect from '@/sections/httt/components/lovingconnect';
import SlideTmp from '@/sections/httt/components/SlideTmp';

export default function HTTT() {
  return (
    <>
      <Banner />
      <Video />
      <Action />
      <Statistics />
      {/* <SlideTmp /> */}
      <Share />
      <ThanksForJoin />
      <About />
      <Story />
      <Partner />
      <LovingConnect />
      <SectionHome />
    </>
  );
}
