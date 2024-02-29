'use client';

import { RHFInput } from '@/components/hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DialogFooter } from '@/components/ui/dialog';
import { TextareaUnderline } from '@/components/ui/textarea-underline';
import { postDataBase } from '@/lib/fetch-data-rest';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSession } from 'next-auth/react';

interface IProps {
  slug: string;
  setReplies?: any;
  replies?: string;
}

const formSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email invalid!'),
  message: z.string({
    required_error: 'message is required',
  }),
  website: z.string(),
  remember: z.boolean(),
});

function FormCommentBlog({ slug, replies, setReplies }: IProps) {
  const { data: session } = useSession();

  const defaultValues = {
    email: session?.user?.email || '',
    message: '',
    name: session?.user?.firstName || '',
    website: '',
    remember: false,
  };

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { handleSubmit, setError } = methods;
  const [message, setMessage] = useState('');
  const [checkRemember, setCheckRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleMessage = (e: any) => {
    setMessage(e?.target?.value);
  };
  const handleCheckRemember = (value: boolean) => {
    setCheckRemember(value);
  };
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const param = {
      website: values?.website,
      author: values?.name,
      email: values?.email,
      content: message,
    };
    try {
      setIsLoading(true);
      if (replies && replies !== '') {
        await postDataBase({
          url: `custom-comment/v1/reply-comment/${replies}`,
          body: JSON.stringify(param),
        });
      } else {
        await postDataBase({
          url: `custom-comments/v1/post/${slug}/comment`,
          body: JSON.stringify(param),
        });
      }

      router.refresh();
      setMessage('');
      setIsLoading(false);
    } catch (error: any) {
      if (error?.message) {
        setError('name', {
          message: JSON.parse(error?.message)?.error?.message,
        });
        return;
      }
      setError('message', {
        message: 'message require!',
      });
    }
  };

  const handleCancelReply = () => {
    setReplies('');
  };

  return (
    <div className="md:max-w-[57.25rem] px-12 md:px-2 m-auto">
      <h4 className="text-black pt-8 md:pt-4 text-[4.5rem] md:text-[1.75rem] font-semibold">
        Để lại bình luận
        {replies !== '' && replies && (
          <span
            onClick={handleCancelReply}
            className="text-[#007bff] cursor-pointer text-[2.5rem] md:text-2xl pl-8 md:pl-4"
          >
            Cancel Reply
          </span>
        )}
      </h4>
      <p className="text-[3.25rem] md:text-[1.25rem] font-medium">
        Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được
        đánh dấu *
      </p>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col mb-12 md:mb-0 gap-2">
              <TextareaUnderline
                name="message"
                onChange={(e) => handleMessage(e)}
                placeholder="Nhập bình luận..."
                className="w-full border border-stone-300 text-[3rem] md:text-base font-medium bg-[#FAFAFA] p-8 md:p-3 h-[25rem] md:h-[12rem]"
              />
            </div>
            {!session && (
              <div className="flex justify-between flex-wrap md:flex-nowrap gap-12 md:gap-3">
                <div className="w-full">
                  <RHFInput
                    name="name"
                    inputStyle="input-underline"
                    placeholder="Nhập tên*"
                    className="w-full border border-stone-300 font-medium bg-[#FAFAFA] text-[3rem] md:text-base p-8 md:p-3"
                  />
                </div>
                <div className="w-full">
                  <RHFInput
                    name="email"
                    inputStyle="input-underline"
                    placeholder="admin@gmail.com"
                    className="w-full border border-stone-300 bg-[#FAFAFA] font-medium text-[3rem] md:text-base p-8 md:p-3"
                  />
                </div>
                <div className="w-full">
                  <RHFInput
                    name="website"
                    inputStyle="input-underline"
                    placeholder="Website"
                    className="w-full border font-medium border-stone-300 bg-[#FAFAFA] text-[3rem] md:text-base p-8 md:p-3"
                  />
                </div>
              </div>
            )}
            <div>
              <Checkbox
                onCheckedChange={(value: boolean) => handleCheckRemember(value)}
                name="remember"
                className="border-[#ccc] border-[1px] w-[3rem] md:w-[1rem] h-[3rem] md:h-[1rem]"
              />
              <span className="ml-8 md:ml-4 text-[3.25rem] md:text-[1.25rem] font-medium">
                Lưu tên của tôi, email, và trang web trong trình duyệt này cho
                lần bình luận kế tiếp của tôi.
              </span>
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button
              type="submit"
              disabled={isLoading}
              className="text-white p-20 md:p-3 text-[4rem] md:text-[1.25rem] bg-[#81C8C2]"
            >
              Bình luận
            </Button>
          </DialogFooter>
        </form>
      </FormProvider>
    </div>
  );
}

export default FormCommentBlog;
