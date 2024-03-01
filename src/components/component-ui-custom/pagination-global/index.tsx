import React, { Dispatch, SetStateAction } from 'react';
import ICArrowLeft from '@/components/Icons/ICArrowLeft';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import './style.css';
import map from 'lodash.map';
import { cn } from '@/lib/utils';
import { IDataPagination } from '@/types/types-general';

interface IProps {
  dataPagination: IDataPagination;
  setDataPagination: Dispatch<SetStateAction<IDataPagination>>;
}
function PaginationGlobal(props: IProps) {
  const { dataPagination, setDataPagination } = props;

  const numberOfPage = Math.floor(
    dataPagination.total / dataPagination.perpage
  );

  const arrayPagination = () => {
    let arrayMapPagination: any = [];

    if (numberOfPage <= 5) {
      for (let i = 0; i < numberOfPage; i++) {
        arrayMapPagination.push({ currentPage: i + 1 });
      }
      return arrayMapPagination;
    }
    if (numberOfPage - dataPagination.currentPage < 5) {
      for (let i = numberOfPage - 4; i <= numberOfPage; i++) {
        arrayMapPagination.push({ currentPage: i });
      }
      return arrayMapPagination;
    }
    if (dataPagination.currentPage <= 3) {
      for (let i = 0; i < 5; i++) {
        arrayMapPagination.push({ currentPage: i + 1 });
      }
      return arrayMapPagination;
    }
    arrayMapPagination = [
      { currentPage: dataPagination.currentPage - 2 },
      { currentPage: dataPagination.currentPage - 1 },
      { currentPage: dataPagination.currentPage },
      { currentPage: dataPagination.currentPage + 1 },
      { currentPage: dataPagination.currentPage + 2 },
    ];
    return arrayMapPagination;

    return [
      {
        currentPage: 1,
      },
    ];
  };

  const prevPage = (): void => {
    if (dataPagination.currentPage > 2) {
      setDataPagination({
        ...dataPagination,
        currentPage: dataPagination.currentPage - 1,
      });
    }
  };

  const prevStartPage = (): void => {
    setDataPagination({
      ...dataPagination,
      currentPage: 1,
    });
  };

  const nextPage = (): void => {
    if (dataPagination.currentPage < numberOfPage) {
      setDataPagination({
        ...dataPagination,
        currentPage: dataPagination.currentPage + 1,
      });
    }
  };

  const nextEndPage = (): void => {
    setDataPagination({
      ...dataPagination,
      currentPage: numberOfPage,
    });
  };

  const handlePagination = (currentPage: number): void => {
    setDataPagination({
      ...dataPagination,
      currentPage: currentPage,
    });
  };

  return (
    <div className="w-fit flex items-center pagigation-global-container max-md:hidden">
      <div role="button" onClick={prevStartPage} className="flex items-center">
        <div className="-mr-[1.5rem]">
          <ICArrowLeft stroke="#55D5D2" />
        </div>
        <ICArrowLeft stroke="#55D5D2" />
      </div>
      <div role="button" onClick={prevPage}>
        <ICArrowLeft stroke="#55D5D2" />
      </div>
      {map(arrayPagination(), (item, index) => (
        <button
          type="button"
          onClick={() => handlePagination(item.currentPage)}
          className={cn(
            ' h-[2rem] w-[2rem] mr-[0.62rem] font-bold rounded-full text-[0.875rem] leading-[1.3125rem] not-italic transition-all duration-300',
            dataPagination.currentPage === item.currentPage
              ? 'active'
              : 'inactive'
          )}
          key={index}
        >
          {item.currentPage}
        </button>
      ))}
      <div role="button" onClick={nextPage}>
        <ICArrowRight stroke="#55D5D2" />
      </div>
      <div role="button" onClick={nextEndPage} className="flex items-center">
        <ICArrowRight stroke="#55D5D2" />
        <div className="-ml-[1.5rem]">
          <ICArrowRight stroke="#55D5D2" />
        </div>
      </div>
    </div>
  );
}

export default PaginationGlobal;
