import React, { useState } from 'react';
import './style.css';
import ICCamera from '@/components/Icons/ICCamera';
import Image from 'next/image';

function PreviewImageUpload({ previewImage }: any) {
  return (
    <Image
      src={previewImage ?? '/img/no_image.jpg'}
      height={150}
      width={150}
      className="object-cover w-[10.9375rem] h-[10.9375rem] rounded-full max-md:w-[38rem] max-md:h-[38rem]"
      alt="Logo"
    />
  );
}

function ButtonUploadImage({ onChangeUploadFile }: any) {
  return (
    <div className="relative h-[2rem] w-[2rem] rounded-full bg-[#E8E8E8]">
      <div className="absolute bottom-0 w-full h-full flex items-center justify-center">
        <ICCamera width="1.1rem" height="1.1rem" />
      </div>
      <input
        type="file"
        accept="image/*"
        className="opacity-0 w-full h-full"
        onChange={onChangeUploadFile}
      />
    </div>
  );
}

export default function UploadImage(props: any) {
  const { imageUpload } = props;
  const [previewImage, setPreviewImage] = useState<any>(undefined);
  const onChangeUploadFile = (file: any): void => {
    setPreviewImage(URL.createObjectURL(file.target.files[0]));
    imageUpload(file);
  };
  return (
    <div className="relative ">
      <PreviewImageUpload previewImage={previewImage} />
      <div className="absolute bottom-[0.5rem] right-[1.1rem]">
        <ButtonUploadImage onChangeUploadFile={onChangeUploadFile} />
      </div>
    </div>
  );
}
