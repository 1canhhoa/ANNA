import { Skeleton } from '@/components/ui/skeleton';

function SkeletonItemProduct() {
  const array = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {array.map((_, index) => (
        <div key={index} className="space-x-4 mb-[1rem]">
          <Skeleton className="h-[9.6rem] w-full mb-[0.8rem] rounded-[0.8rem]" />
          <div
            style={{ marginLeft: 0 }}
            className="space-y-2 grow flex flex-col items-center justify-center"
          >
            <Skeleton className="h-[3rem] w-full rounded-[0.8rem]" />
            <Skeleton className="h-[3rem] w-full rounded-[0.8rem]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonItemProduct;
