import Image from 'next/image';
import './style.css';

export default function Banner() {
  return (
    <div className="h-screen relative w-full overflow-hidden max-md:mt-[5rem] max-md:h-[108rem]">
      <Image
        className="w-full h-full object-cover z-[5] absolute top-0 left-0"
        src="/img/httt/banner_desktop.jpg"
        alt="background hanh trinh tu te"
        width={1600}
        height={900}
      />
      <div className="bg-custom absolute md:top-0 bottom-0 left-0 z-[5] w-full md:h-screen h-fit max-md:flex max-md:flex-col max-md:pb-[8rem]">
        {/* <h1 className="">Hành trình tử tế by anna</h1> */}
        <div className="w-full md:pt-[14rem] md:pl-[14rem] max-md:px-[3.2rem]">
          <Image
            className="w-[38.66667rem] md:w-[36.0625rem] h-[22.66667rem] md:h-[21.72144rem] object-contain"
            src="/img/httt/slogan.png"
            alt="slogan hanh trinh tu te"
            width={550}
            height={350}
          />
          <p className="mt-[3.835vh] text-[#414141] text-[3.36rem] md:text-[1.25rem] font-medium leading-[1.65] tracking-[-0.0625rem] md:w-[38.4375rem]">
            Là một dự án phi lợi nhuận hướng đến cộng đồng và xã hội, chúng mình
            mong muốn{' '}
            <span className="text-[#7BD7D6]">lan toả giá trị nhân ái</span>,
            tiếp thêm động lực cộng đồng, và cùng nhau tiến về phía{' '}
            <span className="text-[#7BD7D6]">tương lai tốt đẹp hơn.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
